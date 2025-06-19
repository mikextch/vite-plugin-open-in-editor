# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial project setup
- Support for Cursor and VSCode editors
- Alt+Click functionality for opening files in editor
- Qwik DevTools integration
- Cross-platform support (Windows, MacOS, Linux)

## [0.0.3] - 2024-01-XX

### Added

- Initial release of vite-plugin-open-in-editor
- Support for Cursor editor (`cursor` binary)
- Support for VSCode editor (`code` binary)
- Alt+Click functionality to open files directly in editor
- Integration with Qwik DevTools
- Debug logging option
- TypeScript support with full type definitions

### Features

- Plugin configuration with `editorBin` and `log` options
- Automatic editor detection and file opening
- Cross-platform compatibility
- Vite 5.x compatibility

### Technical Details

- Built with TypeScript and tsup
- MIT licensed
- Peer dependency on Vite ^5.0.0
- Minimal bundle size with only essential dependencies

---

## Release Notes

### Version 0.0.3

This is the initial release of the vite-plugin-open-in-editor plugin. The plugin provides seamless integration between your Vite-based development environment and your preferred code editor.

**Key Features:**

- **Editor Integration**: Direct file opening in Cursor or VSCode from browser DevTools
- **Alt+Click Support**: Click with Alt key to open files directly in your editor
- **Qwik Compatibility**: Full support for Qwik framework DevTools
- **Cross-Platform**: Works on Windows, MacOS, and Linux
- **TypeScript Ready**: Full TypeScript support with type definitions

**Getting Started:**

1. Install the plugin: `npm install vite-plugin-open-in-editor --save-dev`
2. Configure in your `vite.config.ts`:

   ```typescript
   import openInEditor from "vite-plugin-open-in-editor";

   export default defineConfig({
     plugins: [
       openInEditor({
         editorBin: "cursor", // or "code" for VSCode
         log: true,
       }),
     ],
   });
   ```

3. Use Alt+Click in your browser DevTools to open files in your editor

**Supported Editors:**

- ✅ Cursor (`cursor` binary)
- ✅ VSCode (`code` binary)
- ❌ Other editors (coming soon)

**Known Limitations:**

- Currently only supports Cursor and VSCode
- Requires editor to be available as CLI command
- Debug logging may show verbose output when enabled
