# vite-plugin-open-in-editor

Vite plugin to open files directly in your code editor from frontend DevTools (Alt+Click).  
Fully compatible with Qwik, Vite, Astro, and similar frameworks that support `__open-in-editor` URLs.

## ⚠ Current supported editors

✅ [Cursor](https://www.cursor.com)  
✅ [VSCode](https://code.visualstudio.com/)  
❌ Other editors are not yet supported.

---

## 💻 Supported Operating Systems

✅ Windows 11 (fully tested)  
✅ MacOS  
✅ Linux

> The plugin uses simple CLI calls under the hood, so as long as your OS can launch your editor from terminal, it will work.

## 🔧 Installation

```bash
npm install vite-plugin-open-in-editor --save-dev
```

## 🚀 Usage

Inside your `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
// You can use either import syntax:
import openInEditor from "vite-plugin-open-in-editor";
// OR
import { openInEditor } from "vite-plugin-open-in-editor";

export default defineConfig({
  plugins: [
    openInEditor({
      editorBin: "cursor", // use 'code' for VSCode
      log: true, // optional: enable debug logs
    }),
  ],
});
```

- `editorBin`: command line binary to open your editor.
  - For Cursor → `'cursor'`
  - For VSCode → `'code'`
- `log`: (optional) prints debug logs in terminal.

## 📚 Documentation

- **[Release Notes](RELEASE_NOTES.md)** - Detailed information about releases, features, and roadmap
- **[Changelog](CHANGELOG.md)** - Version history and changes
- **[GitHub Repository](https://github.com/mikextch/vite-plugin-open-in-editor)** - Source code and issues

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
