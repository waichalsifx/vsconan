import * as vscode from "vscode";
import * as path from "path";
import * as os from "os";
import * as global from "../globals";
import * as fs from "fs";

export namespace conan {
    export function getConanCacheDir(): string {
        return path.join(os.homedir(), ".conan");
    }
}

export namespace vsconan {
    export function getVSConanHomeDir(): string {
        return path.join(os.homedir(), global.constant.VSCONAN_FOLDER);
    }

    export function getVSConanHomeDirTemp(): string {
        return path.join(getVSConanHomeDir(), global.constant.TEMP_FOLDER);
    }

    export function getGlobalConfigPath(): string {
        return path.join(getVSConanHomeDir(), global.constant.CONFIG_FILE);
    }
}

export namespace json {
    export function writeToJson(object: any, filename: string, indent: number = 4) {
        let jsonString = JSON.stringify(object, null, indent);
        fs.writeFile(filename, jsonString, "utf8", function (err) {
            if (err) throw err;
        });
    }

    export function readFromJSON(filename: string, object: any) {
        let configText = fs.readFileSync(filename, 'utf8');
        object = JSON.parse(configText);
        return object;
    }
}

