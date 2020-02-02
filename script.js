browser.tabs.query({active: false}, tabs => { // Don't save the tab that the user is currently on, which is this extension's tab.
  var tabURLs = [];

  tabs.forEach(tab => {
      tabURLs.push(tab.url);
  });

  var links = document.createElement('pre');
  document.body.appendChild(links);
  links.textContent = tabURLs.join("\n");
});
