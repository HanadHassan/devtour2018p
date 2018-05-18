import { readFileSync } from "fs";
import { resolve } from "path";
import logger from "./logger";

let fileConfig;

try {
  const buffer = readFileSync(resolve(__dirname, "../../../config.json"));
  fileConfig = JSON.parse(buffer.toString());
} catch (e) {
  logger.info(e);
  fileConfig = {};
}

const {
  TWITTER_SECRET,
  TWITTER_KEY,
  LOG_LEVEL,
  DB_COLLECTION,
  DB_NAME,
  DB_URL,
  DB_USER,
  DB_PASS,
  PORT,
  SESSION_SECRET,
  BLOB_URL,
  SESSION_URL,
  BLOB_IMAGE_PREFIX,
  ADMINS,
  APPINSIGHTS_INSTRUMENTATIONKEY
} = process.env;

export const twitterSecret: string =
  TWITTER_SECRET || fileConfig.twitterSecret || "";
export const twitterKey: string = TWITTER_KEY || fileConfig.twitterKey || "";
export const logLevel: string = LOG_LEVEL || fileConfig.logLevel || "debug";
export const dbCollection: string =
  DB_COLLECTION || fileConfig.dbCollection || "";
export const dbName: string = DB_NAME || fileConfig.dbName || "";
export const dbUrl: string = DB_URL || fileConfig.dbUrl || "";
export const dbUser: string = DB_USER || fileConfig.dbUser || "";
export const dbPass: string = DB_PASS || fileConfig.dbPass || "";
export const port: string = PORT || fileConfig.port || 3000;
export const sessionSecret: string =
  SESSION_SECRET ||
  fileConfig.sessionSecret ||
  "developers developers developers";
export const blobUrl: string = BLOB_URL || fileConfig.blobUrl || "";
export const sessionUrl: string = SESSION_URL || fileConfig.sessionUrl || "";
export const appInsightsIntrumentationKey: string =
  APPINSIGHTS_INSTRUMENTATIONKEY ||
  fileConfig.appInsightsIntrumentationKey ||
  "";
export const blobImagePrefix: string =
  BLOB_IMAGE_PREFIX || fileConfig.blobImagePrefix || "";
export const admins: string[] = ADMINS
  ? ADMINS.split(",")
  : fileConfig.admins || [];
