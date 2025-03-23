document.getElementById("project-item").addEventListener("click", function () {
    document.getElementById("sub-frame").classList.toggle("hidden");
});

document.getElementById("item-link").addEventListener("input", function () {
    const link = this.value;
    const isValidRobloxLink = /^https?:\/\/www\.roblox\.com\/.+$/.test(link);
    document.getElementById("valid-check").classList.toggle("hidden", !isValidRobloxLink);
});

// Receive data from content script
chrome.runtime.onMessage.addListener((message) => {
    if (message.robux) document.getElementById("robux").textContent = message.robux;
    if (message.rap) document.getElementById("rap").textContent = message.rap;
    if (message.limiteds) {
        let limitedList = document.getElementById("limiteds");
        limitedList.innerHTML = "";
        message.limiteds.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            limitedList.appendChild(li);
        });
    }
});
