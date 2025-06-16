import path from "path";

export interface ParsedFile {
  normalizedPath: string;
  line: string;
  column: string;
}

export function parseFileParam(fileParam: string): ParsedFile {
  fileParam = decodeURIComponent(fileParam);

  // Buscar los dos últimos ':'
  const lastColon = fileParam.lastIndexOf(":");
  const secondLastColon = fileParam.lastIndexOf(":", lastColon - 1);

  let column = "1";
  let line = "1";
  let rawPath = fileParam;

  if (secondLastColon !== -1) {
    column = fileParam.substring(lastColon + 1);
    line = fileParam.substring(secondLastColon + 1, lastColon);
    rawPath = fileParam.substring(0, secondLastColon);
  }

  // Limpiar dobles slashes
  rawPath = rawPath.replace(/\/+/g, "/");

  // Quitar src/src redundante (ajustable según el proyecto)
  rawPath = rawPath.replace(/\/src\/src\//, "/src/");

  // Reparar el caso Windows /c:/ -> c:/
  rawPath = rawPath.replace(/^\/?([a-zA-Z]):/, "$1:");

  const normalizedPath = path.normalize(rawPath);
  return { normalizedPath, line, column };
}
