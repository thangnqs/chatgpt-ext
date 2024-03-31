function getOrCreateIconElement() {
  let iconElement = document.getElementById("selection-icon");
  if (!iconElement) {
    iconElement = document.createElement("img");
    iconElement.id = "selection-icon";
    iconElement.src = chrome.runtime.getURL("icon.png");
    iconElement.style.position = "absolute";
    iconElement.style.zIndex = "10000";
    iconElement.style.cursor = "pointer";
    iconElement.style.display = "none";
    document.body.appendChild(iconElement);

    iconElement.addEventListener("click", () => {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText) {
        alert(`Selected text: "${selectedText}"`);
      }
    });
  }
  return iconElement;
}

function checkSelectionIsEmpty() {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText.length === 0) {
    document.getElementById("selection-icon").style.display = "none";
  }
}

getOrCreateIconElement();

document.addEventListener("mouseup", function () {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    const iconElement = getOrCreateIconElement();
    const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
    iconElement.style.left = `${rect.right + window.scrollX}px`;
    iconElement.style.top = `${rect.bottom + window.scrollY}px`;
    document.getElementById("selection-icon").style.display = "block";
  }
});

document.addEventListener("mousedown", function (event) {
  checkSelectionIsEmpty();
});

document.addEventListener("click", function (event) {
  checkSelectionIsEmpty();
});
