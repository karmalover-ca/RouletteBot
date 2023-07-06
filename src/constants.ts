import { Client } from "discord.js";
import { ConsoleLogger, FileLogger, Logger } from "./logger";

export const CURRENT_VERSION = "0.0.1";

// do something about this if I ever need to shard
export const GUILD_COUNT = (client: Client): number => {
    return client.guilds.cache.size;
}

export const PRODUCTION: boolean = process.env.PRODUCTION != undefined;

export const APPLICATION_ID: string = process.env.APPLICATION_ID || "";

export const BOT_TOKEN: string = process.env.BOT_TOKEN || "";

export const DEV_SERVER = process.env.DEV_SERVER

export const DEV_ENVIRONMENT = DEV_SERVER != undefined;

export const LOGGER: Logger = PRODUCTION ? new FileLogger(process.env.LOG_FILE ?? "./tomesBot.log") : new ConsoleLogger();