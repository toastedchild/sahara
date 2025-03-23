// This file no longer needs to extract Robux, RAP, or limited data
function initializeExtension() {
    // Initialize the extension without data collection
    chrome.runtime.sendMessage({
        initialized: true
    });
}

setTimeout(initializeExtension, 2000);
