#! /bin/bash

clear

echo "Building dist ..."
ng build --prod --base-href "https://dwd-umd.github.io/comet-checker/"

echo "Deploying to github ..."
ngh --branch gh-pages

echo "Done."
