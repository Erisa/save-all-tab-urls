chrome.tabs.query({}, function (value) {
  var tabsArray = [];
  for (i = 0; i < value.length; i++) {
    console.log(value);
    if (!value[i].active) {
      tabsArray.push(value[i].url);
    }
  }
  var links = document.createElement('pre');
  document.body.appendChild(links);
  links.textContent = tabsArray.join("\n");
});
