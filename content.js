function getRobloxData() {
    let robux = document.querySelector("#nav-robux-amount")?.textContent || "0";
    let rap = "0";
    let limiteds = [];

    let inventory = document.querySelectorAll(".text-lead");
    inventory.forEach(item => {
        let text = item.textContent.trim();
        if (text.includes("RAP:")) {
            rap = text.replace("RAP:", "").trim();
        } else {
            limiteds.push(text);
        }
    });

    chrome.runtime.sendMessage({
        robux: robux,
        rap: rap,
        limiteds: limiteds
    });
}

setTimeout(getRobloxData, 2000);
