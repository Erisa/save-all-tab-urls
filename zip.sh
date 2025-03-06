#!/bin/bash
rm -rfv build save-all-tab-urls.zip save-all-tab-urls-firefox.zip save-all-tab-urls-chrome.zip
mkdir -p build/chrome build/firefox

cp -r * build/chrome
cp -r * build/firefox

cat manifest.json | jq 'del(.background.service_worker, .background.type)' > build/firefox/manifest.json
cat manifest.json | jq 'del(.background.scripts)' > build/chrome/manifest.json

cd build/firefox && zip -r ../../save-all-tab-urls-firefox.zip . -x '*.git*' -x '*.github-resources*' -x '*save-all-tab-urls.zip*' -x '*zip.sh*' -x '*zip-win.bat*'
cd ../../build/chrome && zip -r ../../save-all-tab-urls-chrome.zip . -x '*.git*' -x '*.github-resources*' -x '*save-all-tab-urls.zip*' -x '*zip.sh*' -x '*zip-win.bat*'