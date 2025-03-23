// Import or include any additional script
importScripts('scripts/log.js');

// Original background script functionality
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Handle messages from content script
  console.log("Message received in background script:", message);
});

// Any other background functionality
console.log("Background script initialized");
