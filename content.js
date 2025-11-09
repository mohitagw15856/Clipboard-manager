// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'paste') {
    pasteText(request.text, request.slotNum);
    sendResponse({ success: true });
  }
  return true;
});

function pasteText(text, slotNum) {
  const activeElement = document.activeElement;
  
  // Check if the active element is an input field
  if (activeElement && (
    activeElement.tagName === 'TEXTAREA' ||
    activeElement.tagName === 'INPUT' ||
    activeElement.isContentEditable
  )) {
    
    if (activeElement.isContentEditable) {
      // Handle contenteditable elements (like Gmail compose, rich text editors)
      pasteIntoContentEditable(activeElement, text);
    } else {
      // Handle regular input and textarea elements
      pasteIntoInputField(activeElement, text);
    }
    
    // Show a brief notification
    showNotification(`Pasted from Slot ${slotNum}`);
  } else {
    // If no input field is focused, copy to clipboard
    copyToClipboard(text);
    showNotification(`Copied Slot ${slotNum} to clipboard`);
  }
}

function pasteIntoInputField(element, text) {
  const start = element.selectionStart;
  const end = element.selectionEnd;
  const currentValue = element.value;
  
  // Insert text at cursor position
  const newValue = currentValue.substring(0, start) + text + currentValue.substring(end);
  element.value = newValue;
  
  // Set cursor position after inserted text
  const newCursorPos = start + text.length;
  element.selectionStart = newCursorPos;
  element.selectionEnd = newCursorPos;
  
  // Trigger input event for frameworks like React
  element.dispatchEvent(new Event('input', { bubbles: true }));
  element.dispatchEvent(new Event('change', { bubbles: true }));
}

function pasteIntoContentEditable(element, text) {
  // Use execCommand for contenteditable elements
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  
  const range = selection.getRangeAt(0);
  range.deleteContents();
  
  const textNode = document.createTextNode(text);
  range.insertNode(textNode);
  
  // Move cursor to end of inserted text
  range.setStartAfter(textNode);
  range.setEndAfter(textNode);
  selection.removeAllRanges();
  selection.addRange(range);
  
  // Trigger input event
  element.dispatchEvent(new Event('input', { bubbles: true }));
}

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #323232;
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    z-index: 999999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: slideIn 0.3s ease-out;
  `;
  
  // Add animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  
  // Remove notification after 2 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
}
