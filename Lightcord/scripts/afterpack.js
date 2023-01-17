'use strict';
/* 
  This is a hack to get around the issues with electron-builder not including nested node_modules.
  We do this by simply making the asar ourselves using the parameters from the build.
  This takes the asar file that we have created, unpacks it, then copies in the nested node_modules
  directories from the app directory.

  This also preserves any asar unpacked files that you may have had in the build, and unpacks any
  nested node_modules files that might have been unpacked as well.

  This also assumes that you have some sort of beforeBuild hook that already trims and massages the 
  nested node_modules files to be what you want; if not, you may have some bloat (and some potential 
  breakage)
*/

// Make sure you have these in your devDependencies in your root project.
const glob = require('fast-glob');
const fs = require('fs-extra');
const { promisify } = require('util')
const rimraf = promisify(require('rimraf'))
const asar = require('asar');
const micromatch = require("micromatch")
const { join } = require("path")

const commonExclude = [
    "!**/{test,__tests__,tests,powered-test,example,examples,CHANGELOG.md,README.md,README,readme.md,readme}",
    "!**/*.d.ts",
    "!**/.bin",
    "!**/*.{iml,o,hprof,orig,pyc,pyo,rbc,swp,csproj,sln,xproj}",
    "!**/{.DS_Store,.git,.hg,.svn,CVS,RCS,SCCS,.gitignore,.gitattributes}",
    "!**/{__pycache__,thumbs.db,.flowconfig,.idea,.vs,.nyc_output}",
    "!**/{appveyor.yml,.travis.yml,circle.yml}",
    "!**/{npm-debug.log,yarn.lock,.yarn-integrity,.yarn-metadata.json}"
]

function concatUnique(a,b) {
  if (!Array.isArray(a) || !Array.isArray(b)){
    throw Error("both parameters must be arrays")
  }
  let arr = a.concat(b)
  let seen = {};
  return arr.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

// we're using the platform-specific parameters over the global parameters.
function globalOrPlatformParam(local,global){
  if (typeof local != 'undefined' && local.length != 0){
    return local;
  } else if (typeof global != 'undefined' && global.length != 0){
    return global;
  }
  return undefined;
}

function globalOrPlatformArrayParam(local, global){
  let param = globalOrPlatformParam(local, global) || []
  if (typeof param == "string"){
    param = [param]
  }
  return param;
}

exports.default = async function afterPackHook(context){
  // Get build parameters from the context.
  const appDir = context.packager.info._appDir
  const platform = context.packager.platform.nodeName
  const globalFilesParam = context.packager.info._configuration.files;
  const platformFilesParam = context.packager.platformSpecificBuildOptions.files
  const globalUnpackAsarParam = context.packager.info._configuration.asarUnpack;
  const platformUnpackAsarParam = context.packager.platformSpecificBuildOptions.asarUnpack;

  let resourcesDir = join(context.appOutDir, "resources")
  // exception for resources dir for mac; win and linux use the same directory.
  if (platform == "darwin"){
    resourcesDir = join(context.appOutDir, context.packager.appInfo.productFilename + ".app", "Contents", "Resources")
  }

  const asarAppUnpackedDir = join(resourcesDir, "app.asar.unpacked")

  // The Platform-specific build options override the common config, so attempt to use those first.
  let globPatterns = globalOrPlatformArrayParam(platformFilesParam, globalFilesParam)

  // electron-builder automatically adds this to the files parameter, so we have to too
  if (!globPatterns.includes("**/*")){
    globPatterns.push("**/*")
  }

  // Add the common exclusions to the patterns
  globPatterns = concatUnique(globPatterns,commonExclude);

  // Find all the nested node_modules files in the app directory
  let nestedNMFiles = glob.sync("+(**/node_modules/**/*|!node_modules/**/*)", {cwd: appDir, dot:true})

  // filter out the ones not matched by the file globs in the builder config
  let filteredNestedFiles = micromatch(nestedNMFiles, globPatterns, {matchBase:true})

  // This is the directory we're copying everything to, to create the asar
  let asarAppDir = join(resourcesDir, "app")

  // Get a listing of all the files in the app.asar.unpacked dir, so we can create a franken-glob
  // to pass to asar when packing.
  let unpackedFileList = glob.sync("**/*", {cwd:asarAppUnpackedDir, dot:true})
  let unpackPattern = "{"
  unpackedFileList.forEach((file,idx,arr)=>{
    unpackPattern += join(asarAppDir, file) + ','
  })

  // Get any user-defined asarUnpack patterns in case we need to unpack some hoisted node_modules,
  // and add any to the pattern.
  let userUnpackGlob = globalOrPlatformArrayParam(platformUnpackAsarParam, globalUnpackAsarParam)
  let nestedFilesToUnpack = micromatch(nestedNMFiles, userUnpackGlob, {matchBase:true})
  nestedFilesToUnpack.forEach((file)=>{
    unpackPattern += join(asarAppDir, file) + ','
  })
  // trailing commas don't matter in this pattern.
  unpackPattern += '}'

  // Combine the nested files to unpack with the filtered nested files, as electron-builder
  // sometimes does weird things when file globs and the asarUnpack globs are used together; 
  // Files that don't match the file globs but do match the asarUnpack glob are included in the build.
  let nestedFilesToCopy = concatUnique(filteredNestedFiles, nestedFilesToUnpack);

  // Now we have the necessary file lists, create the asar.

  // Unpack everything in app.asar to the resources/app dir.
  // This also copies all the files in 'app.asar.unpacked' to here as well.
  asar.extractAll(join(resourcesDir, "app.asar"), asarAppDir)
  await rimraf(join(resourcesDir, "app.asar"))
  await rimraf(asarAppUnpackedDir)

  // Copy the nested node_modules files to the extracted directory.
  nestedFilesToCopy.forEach((file)=>{
    fs.copySync(join(appDir, file), join(asarAppDir, file))
  })
  // build the asar
  await asar.createPackageWithOptions(asarAppDir, join(resourcesDir, "app.asar"), {unpack: unpackPattern})
  await rimraf(asarAppDir)

  return true
};
