// Store the latest Robux amount
let robuxAmount = "0";

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Update our stored robux amount if new data is received
    if (message.robux) {
        robuxAmount = message.robux;
        console.log("Background script received updated Robux amount:", robuxAmount);
    }
    
    // If the popup is requesting data
    if (message.action === "getRobux") {
        sendResponse({ robux: robuxAmount });
    }
    
    return true; // Keep the message channel open for async responses
});
