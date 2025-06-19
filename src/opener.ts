import { exec } from "child_process";
import fs from "fs";
import type { ParsedFile } from "./parser";

export interface OpenFileOptions {
  parsedFile: ParsedFile;
  editorBin?: string;
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

    // Handle different editor commands
    let command: string;

    if (editorBin === "code" || editorBin === "vscode") {
      // VSCode uses -g flag for goto
      command = `code -g "${normalizedPath}:${line}:${column}"`;
    } else {
      // Cursor and other editors use --goto
      command = `${editorBin} --goto "${normalizedPath}:${line}:${column}"`;
    }

    if (log) console.log("Executing:", command);

    exec(command, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}
