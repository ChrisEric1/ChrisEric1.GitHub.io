// bootstrap constants
// after startup, these constants will be merged into core module constants
// since they are used in both locations (see app/Constants.js)

import { releaseChannel } from './buildInfo';
import appSettings from './appSettings';
const pak = require("../package.json" as any) as any
import * as path from "path"

const settings = appSettings.getSettings();

function capitalizeFirstLetter(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const APP_NAME = 'Lightcord' + (releaseChannel === 'stable' ? '' : capitalizeFirstLetter(releaseChannel));
const APP_ID_BASE = 'xyz.ce1cecl';
export const APP_ID = `${APP_ID_BASE}.${APP_NAME}.${APP_NAME}`;

export const API_ENDPOINT = settings.get('API_ENDPOINT') || 'https://discord.com/api';
export const UPDATE_ENDPOINT = settings.get('UPDATE_ENDPOINT') || API_ENDPOINT;
export const mainAppDirname = path.join(__dirname, "..")

export const version:string = pak.version
export const packageJSON:any = pak