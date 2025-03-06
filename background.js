chrome.action.onClicked.addListener(onClick);

function onClick(tab) {  
  chrome.tabs.create({
    url: "tabs.html"
  })
}
