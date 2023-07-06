import chalk from "chalk";
import { openSync, writeFileSync, closeSync } from "fs";
import { PRODUCTION } from "./constants";

type Severity = "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";

export abstract class Logger {
    public abstract log: (severity: Severity, message: any) => void;

    public info = (message: any) => {
        this.log("INFO", message);
    }

    public debug = (message: any) => {
        this.log("DEBUG", message);
    }

    public warn = (message: any) => {
        this.log("WARN", message);
    }

    public error = (message: any) => {
        this.log("ERROR", message);
    }

    public fatal = (message: any) => {
        this.log("FATAL", message);
    }
}

export class FileLogger extends Logger {
    private fileHandle;
    constructor(filePath: string) {
        super();

        this.fileHandle = openSync(filePath, "a");
    }

    public log = (severity: Severity, message: any) => {
        writeFileSync(this.fileHandle, `[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] [${severity}] ` + String(message) + "\n");
    }

    public close = () => {
        closeSync(this.fileHandle);
    }
}

export class ConsoleLogger extends Logger {
    public log = (severity: Severity, message: any) => {
        if(severity == "DEBUG" && PRODUCTION) return;
        let r: chalk.Chalk = chalk;
        switch(severity) {
            case "DEBUG": {
                r = r.blueBright;
                break;
            }
            case "INFO": {
                r = r.greenBright;
                break;
            }
            case "WARN": {
                r = r.yellow;
                break;
            }
            case "ERROR": {
                r = r.redBright;
                break;
            }
            case "FATAL": {
                r = r.red;
                break;
            }
        }

        const u = r(`[${new Date().toLocaleTimeString()}] [${severity}] ` + String(message));

        if(severity == "FATAL") {
            console.error(u);
        } else console.log(u);
    };
}