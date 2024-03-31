chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed or updated.");
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "logSelectedText") {
    console.log("Selected text from content script:", request.text);
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("chrome.runtime.onMessage.addListener");
  if (request.action === "logSelectedText") {
    console.log("Selected text from content script:", request.text);
    sendResponse({ message: "Selected text logged successfully!" });
  }
});
