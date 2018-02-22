browser.browserAction.onClicked.addListener(onClick);

function onClick(tab) {  
  browser.tabs.create({
    url: "tabs.html"
  })
}
