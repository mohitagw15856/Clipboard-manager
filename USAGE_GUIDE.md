# Visual Usage Guide

## Extension Interface

```
┌─────────────────────────────────────────────┐
│  📋 Multi-Clipboard Manager                 │
├─────────────────────────────────────────────┤
│  💡 Save text to slots and paste using     │
│     shortcuts. Click "Customize Shortcuts"  │
│     below to change keyboard shortcuts.     │
├─────────────────────────────────────────────┤
│                                             │
│  ┌──────────────────────────────────────┐  │
│  │  Slot 1              [Ctrl+Shift+1]  │  │
│  │  ┌────────────────────────┐          │  │
│  │  │                        │  [Save]  │  │
│  │  │  Your text here...     │  [Copy]  │  │
│  │  │                        │  [Clear] │  │
│  │  └────────────────────────┘          │  │
│  └──────────────────────────────────────┘  │
│                                             │
│  ┌──────────────────────────────────────┐  │
│  │  Slot 2              [Ctrl+Shift+2]  │  │
│  │  ┌────────────────────────┐          │  │
│  │  │                        │  [Save]  │  │
│  │  │  Your text here...     │  [Copy]  │  │
│  │  │                        │  [Clear] │  │
│  │  └────────────────────────┘          │  │
│  └──────────────────────────────────────┘  │
│                                             │
│  ... (Slots 3, 4, 5)                        │
│                                             │
├─────────────────────────────────────────────┤
│          [Customize Shortcuts]              │
└─────────────────────────────────────────────┘
```

## Workflow Examples

### Example 1: Developer Workflow

**Setup:**
```
Slot 1: console.log()
Slot 2: import React from 'react';
Slot 3: const [state, setState] = useState();
Slot 4: // TODO: 
Slot 5: git commit -m "
```

**Usage:**
1. Working in your code editor in Chrome DevTools or a web IDE
2. Need to add a console.log? Press `Ctrl+Shift+1`
3. Need React import? Press `Ctrl+Shift+2`
4. Instant code insertion!

### Example 2: Customer Support Workflow

**Setup:**
```
Slot 1: Thank you for contacting us! How can I help you today?
Slot 2: I've escalated your issue to our technical team.
Slot 3: Your ticket number is #
Slot 4: Is there anything else I can help you with?
Slot 5: [Your email signature]
```

**Usage:**
1. Customer sends a message
2. Click in reply field
3. Press `Ctrl+Shift+1` for greeting
4. Type custom response
5. Press `Ctrl+Shift+4` for closing
6. Press `Ctrl+Shift+5` for signature

### Example 3: General Productivity

**Setup:**
```
Slot 1: yourname@email.com
Slot 2: https://meet.google.com/your-meeting-link
Slot 3: 123 Main Street, City, State 12345
Slot 4: (555) 123-4567
Slot 5: Best regards,
       [Your Name]
```

**Usage:**
- Filling forms? `Ctrl+Shift+1` for email, `Ctrl+Shift+4` for phone
- Scheduling meetings? `Ctrl+Shift+2` for your meeting link
- Quick sign-offs? `Ctrl+Shift+5`

## Keyboard Shortcut Flow

```
┌─────────────────────────────────────┐
│  You're typing in any text field   │
└──────────────┬──────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│  Press Ctrl+Shift+[1-5]              │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│  Extension checks which slot         │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│  Retrieves saved text from storage   │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│  Pastes text at cursor position      │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│  Shows notification: "Pasted Slot X" │
└──────────────────────────────────────┘
```

## Button Functions

### Save Button
- **Function**: Saves the current text in the slot to storage
- **When to use**: After typing or pasting text into a slot
- **Feedback**: Button briefly changes to "Saved!"

### Copy Button
- **Function**: Copies the slot's text to your system clipboard
- **When to use**: When you want to paste using Ctrl+V instead of shortcuts
- **Feedback**: Button briefly changes to "Copied!"

### Clear Button
- **Function**: Deletes all text from the slot
- **When to use**: When you want to remove a saved snippet
- **Feedback**: Button briefly changes to "Cleared!"

## Pro Tips

### Tip 1: Organize by Frequency
```
Slot 1: Most frequently used (easiest to type: Ctrl+Shift+1)
Slot 2: Second most frequent
Slot 3: Medium frequency
Slot 4: Occasional use
Slot 5: Rarely used
```

### Tip 2: Add Labels
```
Slot 1: [EMAIL] yourname@email.com
Slot 2: [PHONE] (555) 123-4567
Slot 3: [ADDRESS] 123 Main St...
```

### Tip 3: Template Variables
```
Slot 1: Hello [NAME], thank you for your message...
        (Then edit [NAME] after pasting)
```

### Tip 4: Multi-line Text
```
Slot 1: Line 1 of text
        Line 2 of text
        Line 3 of text
        (All lines will be pasted together)
```

## Notifications

When you use a keyboard shortcut, you'll see a notification in the top-right:

```
┌──────────────────────────┐
│  Pasted from Slot 3      │
└──────────────────────────┘
```

This confirms which slot was used and that the action was successful.

## Common Scenarios

### Scenario 1: Form Filling
1. Open the form
2. Click in first field
3. Press appropriate shortcut
4. Tab to next field
5. Press next shortcut
6. Repeat until form is complete

### Scenario 2: Email Responses
1. Read email
2. Click Reply
3. Use shortcuts to build your response
4. Add any custom text between snippets
5. Send

### Scenario 3: Code Snippets
1. Position cursor where code should go
2. Press shortcut for the snippet
3. Code is instantly inserted
4. Continue coding

## Troubleshooting Visual Guide

### Problem: Text not pasting
```
❌ Shortcut pressed → Nothing happens
                      ↓
✓ Check: Is text field focused? (Click in it)
✓ Check: Is slot saved? (Open popup to verify)
✓ Check: Are shortcuts enabled? (Check chrome://extensions/shortcuts)
```

### Problem: Wrong text pasting
```
❌ Expected Slot 2 → Got Slot 3 instead
                      ↓
✓ Check: Which keys did you press?
✓ Solution: Try again, make sure to press Ctrl+Shift+[correct number]
```

---

**Remember**: The extension works on ANY website with text input fields!
