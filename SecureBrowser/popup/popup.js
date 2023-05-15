document.addEventListener("click", function(e) {
    if (!e.target.classList.contains("button")) {
      return;
    }
  
    var chosenButton = e.target.textContent;
  
    chrome.tabs.executeScript(null, {
      file: "/content_scripts/SecureBrowser.js"
    });
  
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {button: chosenButton});
    });
  
  });