import { exec } from "child_process";
import fs from "fs";
import type { ParsedFile } from "./parser";

export interface OpenFileOptions {
  parsedFile: ParsedFile;
  editorBin?: "cursor" | "vscode";
  log?: boolean;
}

export function openFile({
  parsedFile,
  editorBin = "cursor",
  log = false,
}: OpenFileOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    const { normalizedPath, line, column } = parsedFile;

    if (!fs.existsSync(normalizedPath)) {
      return reject(new Error(`File not found: ${normalizedPath}`));
    }

    const command = `${editorBin} --goto "${normalizedPath}:${line}:${column}"`;
    if (log) console.log("Executing:", command);

    exec(command, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}
