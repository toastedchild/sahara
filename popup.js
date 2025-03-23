document.getElementById("project-item").addEventListener("click", function () {
    document.getElementById("sub-frame").classList.toggle("hidden");
});

document.getElementById("item-link").addEventListener("input", function () {
    const link = this.value;
    const isValidRobloxLink = /^https?:\/\/www\.roblox\.com\/.+$/.test(link);
    document.getElementById("valid-check").classList.toggle("hidden", !isValidRobloxLink);
});

// Add animation and toggle functionality for action buttons
const actionButtons = [
    document.getElementById("limited-sniper"),
    document.getElementById("auto-trader"),
    document.getElementById("low-ball")
];

actionButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Check if button is already active
        const isActive = this.classList.contains("active");
        
        // Create status indicator if it doesn't exist
        if (!this.querySelector(".status-indicator")) {
            const statusIndicator = document.createElement("span");
            statusIndicator.className = "status-indicator";
            this.appendChild(statusIndicator);
        }
        
        const statusIndicator = this.querySelector(".status-indicator");
        
        if (!isActive) {
            // Activate the button
            this.classList.add("animating");
            statusIndicator.textContent = "...";
            
            setTimeout(() => {
                this.classList.remove("animating");
                this.classList.add("active");
                statusIndicator.textContent = "✅";
            }, 800);
        } else {
            // Deactivate the button
            this.classList.add("animating");
            statusIndicator.textContent = "...";
            
            setTimeout(() => {
                this.classList.remove("animating");
                this.classList.remove("active");
                statusIndicator.textContent = "❌";
                
                // Final animation step - remove X mark after delay
                setTimeout(() => {
                    statusIndicator.textContent = "";
                }, 500);
            }, 800);
        }
    });
});

// Receive initialization message from content script
chrome.runtime.onMessage.addListener((message) => {
    if (message.initialized) {
        console.log("Sahara's Trade Tool initialized");
    }
});
