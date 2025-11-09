// Listen for keyboard shortcut commands
chrome.commands.onCommand.addListener(async (command) => {
  console.log('Command received:', command);
  
  // Extract slot number from command (e.g., "paste-slot-1" -> "1")
  const match = command.match(/paste-slot-(\d+)/);
  if (!match) return;
  
  const slotNum = match[1];
  const slotKey = `slot-${slotNum}`;
  
  // Get the text from storage
  const data = await chrome.storage.local.get(slotKey);
  const text = data[slotKey];
  
  if (!text) {
    console.log(`Slot ${slotNum} is empty`);
    return;
  }
  
  // Get the active tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  if (!tab) {
    console.log('No active tab found');
    return;
  }
  
  // Send message to content script to paste the text
  try {
    await chrome.tabs.sendMessage(tab.id, {
      action: 'paste',
      text: text,
      slotNum: slotNum
    });
  } catch (error) {
    console.error('Error sending message to content script:', error);
  }
});

// Handle installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('Multi-Clipboard Manager installed');
});
