# Chrome Multi-Clipboard Manager Extension

## Project Overview

This is a fully functional Chrome extension that allows users to save multiple text snippets to 5 different "slots" and paste them using customizable keyboard shortcuts.

## What's Included

### Core Extension Files
- **manifest.json** - Extension configuration and permissions
- **popup.html** - User interface for managing clipboard slots
- **popup.js** - Logic for the popup interface
- **background.js** - Service worker handling keyboard shortcuts
- **content.js** - Script that handles pasting into web pages
- **icons/** - Extension icons (16px, 48px, 128px)

### Documentation Files
- **README.md** - Comprehensive documentation
- **INSTALL.md** - Step-by-step installation guide
- **QUICK_START.txt** - Visual quick start guide
- **USAGE_GUIDE.md** - Detailed usage examples and workflows
- **TROUBLESHOOTING.md** - Common issues and solutions

## Key Features

✅ **5 Clipboard Slots** - Save up to 5 different text snippets
✅ **Custom Shortcuts** - Default: Ctrl+Shift+1 through Ctrl+Shift+5
✅ **Smart Pasting** - Works in input fields, textareas, and rich text editors
✅ **Visual Feedback** - Notifications when pasting/copying
✅ **Persistent Storage** - Slots saved across browser sessions
✅ **Easy Management** - Simple popup interface with Save/Copy/Clear buttons
✅ **Works Everywhere** - Compatible with most websites

## How to Install

1. Extract the `clipboard-manager` folder from the zip
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (top-right toggle)
4. Click "Load unpacked"
5. Select the `clipboard-manager` folder
6. Done!

## Default Keyboard Shortcuts

- **Ctrl+Shift+1** - Paste Slot 1
- **Ctrl+Shift+2** - Paste Slot 2
- **Ctrl+Shift+3** - Paste Slot 3
- **Ctrl+Shift+4** - Paste Slot 4
- **Ctrl+Shift+5** - Paste Slot 5

(Use Cmd instead of Ctrl on Mac)

## How to Use

1. **Save Text**: Click extension icon → Enter text → Click "Save"
2. **Paste Text**: Focus any text field → Press Ctrl+Shift+[1-5]
3. **Customize**: Click "Customize Shortcuts" in popup to change shortcuts

## Perfect For

- **Developers** - Code snippets, API keys, Git commands
- **Support Teams** - Template responses, troubleshooting steps
- **Writers** - Frequently used phrases, signatures
- **Everyone** - Email addresses, phone numbers, addresses, meeting links

## Technical Details

- **Manifest Version**: 3 (latest)
- **Permissions**: storage, clipboardWrite, clipboardRead
- **Compatible with**: All major websites
- **Storage**: Local browser storage (persistent)
- **Privacy**: All data stays on your device

## File Structure

```
clipboard-manager/
├── manifest.json          (Extension configuration)
├── popup.html            (UI interface)
├── popup.js              (UI logic)
├── background.js         (Shortcut handler)
├── content.js            (Paste functionality)
├── icons/                (Extension icons)
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── README.md             (Full documentation)
├── INSTALL.md            (Installation guide)
├── QUICK_START.txt       (Quick reference)
├── USAGE_GUIDE.md        (Usage examples)
└── TROUBLESHOOTING.md    (Problem solving)
```

## Customization Options

### Change Number of Slots
Edit `popup.js`:
```javascript
const SLOT_COUNT = 5; // Change to any number
```

Then add corresponding shortcuts in `manifest.json`

### Change Default Shortcuts
Edit `manifest.json` in the `commands` section

### Styling
Edit `popup.html` CSS to customize appearance

## Browser Compatibility

- ✅ Chrome (tested)
- ✅ Edge (Chromium-based)
- ✅ Brave
- ✅ Opera
- ⚠️ Firefox (requires manifest changes)
- ❌ Safari (not compatible)

## Limitations

- Maximum 5 slots by default (easily expandable)
- Plain text only (no rich formatting)
- Some websites may block pasting (banking, corporate sites)
- Does not sync across devices (local storage only)

## Future Enhancement Ideas

- [ ] Increase to 10+ slots
- [ ] Import/export functionality
- [ ] Cloud sync across devices
- [ ] Rich text support
- [ ] Search through saved clips
- [ ] Categories/tags
- [ ] History of pasted items
- [ ] Quick edit feature
- [ ] Template variables (e.g., {{date}}, {{name}})

## Security & Privacy

- ✅ No external API calls
- ✅ No data collection
- ✅ No tracking
- ✅ All data stored locally
- ✅ No network access needed
- ✅ Open source code

## Support

- Read `README.md` for full documentation
- Check `TROUBLESHOOTING.md` for common issues
- Review `USAGE_GUIDE.md` for examples
- Start with `QUICK_START.txt` for basics

## License

MIT License - Free to use, modify, and distribute

## Version

**v1.0** - Initial Release
- 5 clipboard slots
- Customizable shortcuts
- Smart pasting
- Visual notifications
- Comprehensive documentation

---

## Quick Tips

💡 **Tip 1**: Pin the extension icon for quick access
💡 **Tip 2**: Use Slot 1 for most frequent text (easiest shortcut)
💡 **Tip 3**: Add labels like "[EMAIL]" at the start of text for clarity
💡 **Tip 4**: Update slots regularly as your needs change
💡 **Tip 5**: Use the Copy button if pasting doesn't work on a site

---

**Ready to boost your productivity? Install the extension and start saving time!**
