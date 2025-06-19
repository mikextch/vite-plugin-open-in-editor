import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "node16",
  splitting: false,
  treeshake: true,
  external: ["vite"],
  noExternal: [],
  esbuildOptions(options) {
    options.platform = "node";
  },
});
