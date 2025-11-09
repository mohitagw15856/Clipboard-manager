// Number of clipboard slots
const SLOT_COUNT = 5;

// Load and display all slots
async function loadSlots() {
  const container = document.getElementById('slots-container');
  container.innerHTML = '';
  
  const data = await chrome.storage.local.get(null);
  
  for (let i = 1; i <= SLOT_COUNT; i++) {
    const slotKey = `slot-${i}`;
    const slotValue = data[slotKey] || '';
    
    const slotDiv = document.createElement('div');
    slotDiv.className = 'slot';
    slotDiv.innerHTML = `
      <div class="slot-header">
        <div class="slot-title">Slot ${i}</div>
        <div class="slot-shortcut">Ctrl+Shift+${i}</div>
      </div>
      <div class="slot-content">
        <textarea class="slot-text" id="text-${i}" placeholder="Enter text or paste content here...">${slotValue}</textarea>
        <div class="button-group">
          <button class="save-btn" data-slot="${i}">Save</button>
          <button class="copy-btn" data-slot="${i}">Copy</button>
          <button class="clear-btn" data-slot="${i}">Clear</button>
        </div>
      </div>
    `;
    
    container.appendChild(slotDiv);
  }
  
  // Add event listeners
  document.querySelectorAll('.save-btn').forEach(btn => {
    btn.addEventListener('click', saveSlot);
  });
  
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', copyToClipboard);
  });
  
  document.querySelectorAll('.clear-btn').forEach(btn => {
    btn.addEventListener('click', clearSlot);
  });
}

// Save a slot
async function saveSlot(e) {
  const slotNum = e.target.dataset.slot;
  const text = document.getElementById(`text-${slotNum}`).value;
  
  await chrome.storage.local.set({ [`slot-${slotNum}`]: text });
  
  // Visual feedback
  e.target.textContent = 'Saved!';
  setTimeout(() => {
    e.target.textContent = 'Save';
  }, 1000);
}

// Copy to system clipboard
async function copyToClipboard(e) {
  const slotNum = e.target.dataset.slot;
  const text = document.getElementById(`text-${slotNum}`).value;
  
  if (!text) {
    alert('Slot is empty!');
    return;
  }
  
  try {
    await navigator.clipboard.writeText(text);
    
    // Visual feedback
    e.target.textContent = 'Copied!';
    setTimeout(() => {
      e.target.textContent = 'Copy';
    }, 1000);
  } catch (err) {
    console.error('Failed to copy:', err);
    alert('Failed to copy to clipboard');
  }
}

// Clear a slot
async function clearSlot(e) {
  const slotNum = e.target.dataset.slot;
  
  document.getElementById(`text-${slotNum}`).value = '';
  await chrome.storage.local.set({ [`slot-${slotNum}`]: '' });
  
  // Visual feedback
  e.target.textContent = 'Cleared!';
  setTimeout(() => {
    e.target.textContent = 'Clear';
  }, 1000);
}

// Open Chrome's shortcuts page
document.getElementById('customize-shortcuts').addEventListener('click', (e) => {
  e.preventDefault();
  chrome.tabs.create({ url: 'chrome://extensions/shortcuts' });
});

// Initialize
loadSlots();
