# Release Notes

## Latest Release: v0.0.3

### 🎉 What's New

This is the initial release of `vite-plugin-open-in-editor`, a powerful Vite plugin that enables seamless integration between your browser DevTools and your preferred code editor.

### ✨ Key Features

- **🔗 Direct Editor Integration**: Open files directly in Cursor or VSCode from browser DevTools
- **🖱️ Alt+Click Support**: Simply hold Alt and click on any file reference in DevTools
- **⚡ Qwik Ready**: Full compatibility with Qwik framework DevTools
- **🌍 Cross-Platform**: Works seamlessly on Windows, MacOS, and Linux
- **📝 TypeScript Support**: Complete type definitions for better development experience

### 🚀 Quick Start

1. **Install the plugin:**

   ```bash
   npm install vite-plugin-open-in-editor --save-dev
   ```

2. **Configure in your Vite config:**

   ```typescript
   import { defineConfig } from "vite";
   // You can use either import syntax:
   import openInEditor from "vite-plugin-open-in-editor";
   // OR
   import { openInEditor } from "vite-plugin-open-in-editor";

   export default defineConfig({
     plugins: [
       openInEditor({
         editorBin: "cursor", // Use 'code' for VSCode
         log: true, // Enable debug logs
       }),
     ],
   });
   ```

3. **Start your dev server and use Alt+Click in DevTools!**

### 🛠️ Configuration Options

| Option      | Type      | Default    | Description                                 |
| ----------- | --------- | ---------- | ------------------------------------------- |
| `editorBin` | `string`  | `"cursor"` | Editor binary name (`"cursor"` or `"code"`) |
| `log`       | `boolean` | `false`    | Enable debug logging                        |

### 📋 Supported Editors

| Editor           | Binary     | Status       | Notes        |
| ---------------- | ---------- | ------------ | ------------ |
| **Cursor**       | `cursor`   | ✅ Supported | Fully tested |
| **VSCode**       | `code`     | ✅ Supported | Fully tested |
| **WebStorm**     | `webstorm` | ❌ Not yet   | Coming soon  |
| **Sublime Text** | `subl`     | ❌ Not yet   | Coming soon  |

### 🔧 Technical Requirements

- **Vite**: ^5.0.0 (peer dependency)
- **Node.js**: 16+ (for TypeScript compilation)
- **Editor**: Must be available as CLI command

### 🐛 Known Issues

- **Editor CLI Required**: Your editor must be available as a command-line tool
- **Path Resolution**: Some complex file paths might not resolve correctly
- **Windows**: May require running as administrator for some editor configurations

### 🔮 Roadmap

#### v0.1.0 (Planned)

- [ ] Support for WebStorm editor
- [ ] Support for Sublime Text
- [ ] Custom editor path configuration
- [ ] Better error handling and user feedback

#### v0.2.0 (Future)

- [ ] Support for multiple editors simultaneously
- [ ] Editor auto-detection
- [ ] Integration with more frameworks (Next.js, Nuxt, etc.)
- [ ] Advanced configuration options

### 📝 Migration Guide

This is the initial release, so no migration is needed. Future releases will include migration guides here.

### 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for more information.

### 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## Previous Releases

### v0.0.2

- Beta release with basic functionality
- Initial Cursor support

### v0.0.1

- Alpha release
- Proof of concept implementation

---

## Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/mikextch/vite-plugin-open-in-editor/issues)
- **Documentation**: See [README.md](README.md) for detailed usage instructions
- **Examples**: Check the repository for usage examples

## Acknowledgments

Thanks to the Vite team for the excellent plugin system and to the Qwik team for the DevTools integration that made this plugin possible.
