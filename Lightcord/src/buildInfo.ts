import { getCommitID } from "./common/git"
const pak = require("../package.json")

type branch = "stable"|"canary"|"ptb"|"development";

const buildTargets = {
    "darwin":"0.0.259",
    "linux":"0.0.12",
}

export const releaseChannel:branch = "stable"
export let version = buildTargets[process.platform] || "0.0.308"
export const commit = getCommitID()
export default {
    releaseChannel,
    version,
    commit
}

global["BuildInfo"] = {
    releaseChannel,
    version: pak.version,
    commit
}
