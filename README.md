# Multi-Clipboard Manager Chrome Extension

A powerful Chrome extension that allows you to save multiple text snippets and paste them using custom keyboard shortcuts.

## Features

- **5 Clipboard Slots**: Save up to 5 different text snippets
- **Custom Keyboard Shortcuts**: Default shortcuts are Ctrl+Shift+1 through Ctrl+Shift+5
- **Smart Pasting**: Automatically pastes into focused input fields, textareas, and contenteditable elements
- **Easy Management**: Simple popup interface to save, copy, and clear clipboard slots
- **Visual Notifications**: Get instant feedback when pasting or copying
- **Persistent Storage**: Your clipboard slots are saved and persist across browser sessions

## Installation

### Method 1: Load as Unpacked Extension (For Development/Testing)

1. Download or clone this extension folder
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top-right corner
4. Click "Load unpacked" button
5. Select the `clipboard-manager` folder
6. The extension should now appear in your extensions list and toolbar

### Method 2: Install from Chrome Web Store (Coming Soon)
_This extension will be available on the Chrome Web Store soon_

## How to Use

### Saving Text to Slots

1. Click the extension icon in your Chrome toolbar
2. Type or paste your text into any of the 5 slots
3. Click the "Save" button for that slot
4. Your text is now saved and ready to be pasted with a keyboard shortcut

### Pasting with Keyboard Shortcuts

**Default Shortcuts:**
- **Ctrl+Shift+1**: Paste Slot 1
- **Ctrl+Shift+2**: Paste Slot 2
- **Ctrl+Shift+3**: Paste Slot 3
- **Ctrl+Shift+4**: Paste Slot 4
- **Ctrl+Shift+5**: Paste Slot 5

**On Mac:**
- Use **Cmd+Shift+1** through **Cmd+Shift+5**

### How Pasting Works

- **Focused input field**: Text is inserted at the cursor position
- **No focused field**: Text is copied to your system clipboard
- You'll see a notification showing which slot was pasted

### Customizing Keyboard Shortcuts

1. Open the extension popup
2. Click "Customize Shortcuts" at the bottom
3. You'll be taken to `chrome://extensions/shortcuts`
4. Find "Multi-Clipboard Manager" and click the pencil icon next to each shortcut
5. Press your desired key combination
6. Click "OK" to save

## Use Cases

### For Developers
- Store frequently used code snippets
- Save API keys, tokens, or test credentials
- Quick access to common Git commands

### For Customer Support
- Save template responses for common questions
- Store troubleshooting steps
- Quick access to company information

### For Writers
- Save frequently used phrases or signatures
- Store research notes or quotes
- Quick access to formatting codes

### For General Productivity
- Save email addresses or phone numbers
- Store meeting links or addresses
- Quick access to commonly typed text

## Tips

1. **Use descriptive text**: Add a note at the beginning of each slot so you remember what it contains
2. **Organize by frequency**: Put your most-used text in Slot 1 for the easiest shortcut
3. **Update regularly**: Don't hesitate to update slots as your needs change
4. **Test shortcuts**: Make sure your custom shortcuts don't conflict with other extensions or browser features

## Troubleshooting

### Shortcuts not working?
- Check if the shortcuts are enabled in `chrome://extensions/shortcuts`
- Make sure the shortcuts don't conflict with other extensions
- Try reloading the extension

### Text not pasting?
- Make sure the input field is focused (click on it first)
- Some websites may prevent extensions from pasting (security feature)
- Try the "Copy" button from the popup as an alternative

### Slots not saving?
- Check if you clicked the "Save" button
- Try closing and reopening the popup
- Check Chrome's extension permissions

## Privacy & Security

- All data is stored locally in Chrome's storage
- No data is sent to external servers
- No tracking or analytics
- Open source - you can review the code

## Technical Details

- **Manifest Version**: 3
- **Permissions**: storage, clipboardWrite, clipboardRead
- **Supported Sites**: All websites (content script runs on `<all_urls>`)

## Permissions Explained

- **storage**: To save your clipboard slots persistently
- **clipboardWrite**: To paste text into web pages
- **clipboardRead**: To copy text to your system clipboard

## Known Limitations

- Maximum 5 slots (can be increased by modifying the code)
- Some websites with strict Content Security Policies may prevent pasting
- Does not support rich text formatting (plain text only)

## Future Enhancements

- [ ] Support for more than 5 slots
- [ ] Import/export clipboard slots
- [ ] Sync across devices
- [ ] Rich text formatting support
- [ ] Search through saved clips
- [ ] Categories/tags for organization

## Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## License

MIT License - Feel free to use and modify as needed.

## Version History

### v1.0 (Current)
- Initial release
- 5 clipboard slots
- Customizable keyboard shortcuts
- Smart pasting functionality
- Visual notifications

---

**Need help?** Open an issue or contact the developer.

**Enjoy your enhanced clipboard experience! 📋✨**
