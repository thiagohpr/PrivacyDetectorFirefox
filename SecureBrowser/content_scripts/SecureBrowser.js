chrome.runtime.onMessage.addListener(beastify);

function SecureBrowser(request, sender, sendResponse) {
//   insertBeast(beastNameToURL(request.beast));
//   chrome.runtime.onMessage.removeListener(beastify);
    console.log(request.button)
}