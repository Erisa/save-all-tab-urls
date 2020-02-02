var mainTextarea = document.getElementById("main-textarea");
var downloadLink = document.getElementById("download-link");
var tabURLs = []; // Need to refactor to not have this in public scope.

function updateTabURLs() {
  browser.tabs.query({active: false}, tabs => { // Don't save the tab that the user is currently on, which is this extension's tab.
    tabs.forEach(tab => {
        tabURLs.push(tab.url);
    });

    mainTextarea.value = tabURLs.join("\n");
  });
}

downloadLink.addEventListener("click", () => {
  var data = mainTextarea.value; // Can't re-run updateTabURLs() as user may have edited the text.
  var filename = "saved-tabs_" + new Date().toISOString().replace(/:/g, "-").replace("T", "_").slice(0, 19); // Regex replaces all occurences.
  
  createDownloadFile(data, filename, "text/plain");
});

function createDownloadFile(data, filename, type) {
  var file = new Blob([data], {type: type});
  
  downloadLink.href = URL.createObjectURL(file);
  downloadLink.download = filename;
}

updateTabURLs();
createDownloadFile();