import type { Plugin } from "vite";
import { parseFileParam } from "./parser";
import { openFile } from "./opener";

export interface OpenInEditorOptions {
  editorBin?: string;
  log?: boolean;
}

function vitePluginOpenInEditor(options: OpenInEditorOptions = {}): Plugin {
  const { editorBin = "cursor", log = false } = options;

  return {
    name: "vite-plugin-open-in-editor",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.startsWith("/__open-in-editor")) {
          const url = new URL(req.url, "http://localhost");
          const fileParam = url.searchParams.get("file");

          if (!fileParam) {
            res.writeHead(400);
            res.end("Missing file parameter");
            return;
          }

          try {
            const parsedFile = parseFileParam(fileParam);
            await openFile({ parsedFile, editorBin, log });

            res.writeHead(200);
            res.end("Opened successfully");
          } catch (err: any) {
            console.error(err);
            res.writeHead(500);
            res.end(err.message);
          }

          return;
        }

        next();
      });
    },
  };
}

// Export both as default and named export for flexibility
export default vitePluginOpenInEditor;
export { vitePluginOpenInEditor as openInEditor };
