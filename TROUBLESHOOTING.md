# Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: Extension Not Appearing in Toolbar

**Symptoms:**
- Extension is installed but icon doesn't show in toolbar

**Solutions:**
1. Click the puzzle piece icon (Extensions) in Chrome toolbar
2. Find "Multi-Clipboard Manager" in the list
3. Click the pin icon next to it
4. The extension icon should now appear in your toolbar

---

### Issue 2: Keyboard Shortcuts Not Working

**Symptoms:**
- Pressing Ctrl+Shift+[1-5] does nothing
- Text doesn't paste

**Solutions:**

**A. Check if shortcuts are enabled:**
1. Go to `chrome://extensions/shortcuts`
2. Find "Multi-Clipboard Manager"
3. Verify shortcuts are set
4. If empty, click the pencil icon and set them

**B. Check for conflicts:**
1. Other extensions might use the same shortcuts
2. Browser itself might use those shortcuts
3. Try different key combinations

**C. Reload the extension:**
1. Go to `chrome://extensions/`
2. Find "Multi-Clipboard Manager"
3. Click the reload icon (circular arrow)
4. Try shortcuts again

**D. Restart Chrome:**
1. Close all Chrome windows
2. Reopen Chrome
3. Try shortcuts again

---

### Issue 3: Text Not Pasting into Input Fields

**Symptoms:**
- Shortcut triggers but text doesn't appear
- Notification shows but no paste occurs

**Solutions:**

**A. Make sure field is focused:**
1. Click inside the text field
2. You should see a blinking cursor
3. Then press the shortcut

**B. Try the website-specific workaround:**
1. Some websites block extensions from pasting
2. Use the "Copy" button from the popup instead
3. Then manually paste with Ctrl+V

**C. Check website compatibility:**
- Gmail, Google Docs: ✓ Works
- Facebook: ✓ Works
- Twitter/X: ✓ Works
- Banking sites: ⚠️ May be blocked (security)
- Some corporate sites: ⚠️ May be blocked

**D. Alternative method:**
1. Use the extension popup
2. Click "Copy" button for the slot
3. Text is copied to system clipboard
4. Paste normally with Ctrl+V

---

### Issue 4: Slots Not Saving

**Symptoms:**
- Enter text and click "Save"
- Close popup and reopen
- Text is gone

**Solutions:**

**A. Check storage permissions:**
1. Go to `chrome://extensions/`
2. Find "Multi-Clipboard Manager"
3. Click "Details"
4. Verify "Storage" permission is enabled

**B. Clear extension storage and try again:**
1. Go to `chrome://extensions/`
2. Find "Multi-Clipboard Manager"
3. Click "Details"
4. Scroll down to "Inspect views"
5. Click "service worker"
6. In console, type: `chrome.storage.local.clear()`
7. Try saving again

**C. Reinstall extension:**
1. Remove the extension
2. Restart Chrome
3. Reinstall the extension
4. Try again

---

### Issue 5: Extension Not Loading

**Symptoms:**
- Error message when loading unpacked
- Extension appears but doesn't work

**Solutions:**

**A. Check file structure:**
Ensure you have all these files:
```
clipboard-manager/
├── manifest.json
├── popup.html
├── popup.js
├── background.js
├── content.js
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

**B. Check manifest.json:**
1. Open `manifest.json` in a text editor
2. Verify it's valid JSON (no syntax errors)
3. Check version numbers

**C. Check console for errors:**
1. Right-click extension icon
2. Select "Inspect popup"
3. Check Console tab for errors
4. Report any errors for help

---

### Issue 6: Shortcuts Working on Some Sites But Not Others

**Symptoms:**
- Works on Google.com
- Doesn't work on certain websites

**Solutions:**

**A. This is normal for some sites:**
- Banking websites often block extensions
- Corporate intranets may have restrictions
- Some sites use shadow DOM (harder to paste into)

**B. Workaround:**
1. Use the "Copy" button from popup
2. Paste manually with Ctrl+V
3. Or type/paste directly into the site

---

### Issue 7: Notification Not Showing

**Symptoms:**
- Text pastes correctly
- But no notification appears

**Solutions:**

**A. This is usually fine:**
- Notification is optional/cosmetic
- As long as pasting works, extension is functional

**B. If you want notifications:**
1. Check if site blocks custom overlays
2. Check browser's notification settings
3. Reload the page and try again

---

### Issue 8: Can't Customize Shortcuts

**Symptoms:**
- "Customize Shortcuts" link doesn't work
- Can't change default shortcuts

**Solutions:**

**A. Manual navigation:**
1. Open a new tab
2. Type: `chrome://extensions/shortcuts`
3. Press Enter
4. Find "Multi-Clipboard Manager"
5. Click pencil icons to edit

**B. Reset shortcuts:**
1. In shortcuts page, remove all custom shortcuts
2. Reload extension
3. Set shortcuts again

---

### Issue 9: Extension Slowing Down Browser

**Symptoms:**
- Chrome feels slower after installing
- High CPU usage

**Solutions:**

**A. This shouldn't happen, but if it does:**
1. Open Chrome Task Manager (Shift+Esc)
2. Find "Multi-Clipboard Manager"
3. If using lots of resources, reload extension
4. If problem persists, report as a bug

---

### Issue 10: Text Pasting in Wrong Location

**Symptoms:**
- Text appears somewhere unexpected
- Cursor position seems wrong

**Solutions:**

**A. Ensure correct focus:**
1. Click exactly where you want text
2. Wait for blinking cursor
3. Then press shortcut

**B. For contenteditable elements:**
1. Some rich text editors behave differently
2. Try clicking in the editor first
3. If issues persist, use Copy/Paste method

---

## Advanced Troubleshooting

### Checking Extension Logs

1. Open extension popup
2. Right-click anywhere in popup
3. Select "Inspect"
4. Go to Console tab
5. Look for error messages

### Checking Background Service Worker

1. Go to `chrome://extensions/`
2. Find "Multi-Clipboard Manager"
3. Click "Details"
4. Click "Inspect views: service worker"
5. Check Console for errors

### Testing in Incognito Mode

1. Go to `chrome://extensions/`
2. Find "Multi-Clipboard Manager"
3. Enable "Allow in Incognito"
4. Open Incognito window
5. Test if issues persist
6. This helps identify conflicts with other extensions

### Checking for Conflicts

**Extensions that might conflict:**
- Other clipboard managers
- Keyboard shortcut customizers
- Text expanders
- Password managers (sometimes)

**Solution:**
1. Disable other extensions temporarily
2. Test if issue is resolved
3. Re-enable one at a time to find conflict
4. Choose different shortcuts to avoid conflict

---

## Getting Help

If none of these solutions work:

1. **Check for Updates**
   - Ensure you have the latest version
   - Check the GitHub repository for updates

2. **Report a Bug**
   - Describe the issue clearly
   - Include Chrome version
   - Include steps to reproduce
   - Include any error messages from console

3. **Search Existing Issues**
   - Someone else might have had the same problem
   - Check closed issues for solutions

---

## Prevention Tips

### Best Practices

1. **Keep Chrome Updated**
   - Extension is built for latest Chrome version
   - Older versions may have issues

2. **Don't Edit Extension Files**
   - Unless you know what you're doing
   - Can break functionality

3. **Regular Backups**
   - Copy your slots text to a document
   - In case you need to reinstall

4. **Test After Updates**
   - When Chrome updates, test extension
   - Report issues immediately

5. **Use Reasonable Shortcuts**
   - Don't use single keys (will conflict)
   - Stick to Ctrl+Shift or similar combinations
   - Avoid shortcuts used by Chrome itself

---

## Quick Diagnostic Checklist

When something isn't working, check:

- [ ] Extension is installed and enabled
- [ ] Extension icon is visible in toolbar
- [ ] Shortcuts are set in chrome://extensions/shortcuts
- [ ] Text is saved in slots (check popup)
- [ ] Text field is focused (cursor blinking)
- [ ] No conflicting extensions
- [ ] Chrome is up to date
- [ ] No error messages in console

---

## Still Having Issues?

Remember:
1. The extension is open source - you can inspect the code
2. Most issues have simple solutions
3. Try the alternative "Copy" method if shortcuts fail
4. Restart Chrome as a last resort

**The extension should work reliably once properly configured!**
