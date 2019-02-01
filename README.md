# SBN Cross-Catalog Comet Checker

This site is in development.

## Running in Development

### Quick Start

This is an angular 7 front-end application derived from [Angular Ngrx Material Starter](https://github.com/tomastrajan/angular-ngrx-material-starter). It runs on the usual angular-7 CLI commands. To get going locally:

1. Make sure you have node installed. This app has been developed with Node v10. If your default node install is not v10, then it's recommend that you [install nvm]() and then switch to v10 by the command `nvm use 10`.

2. Once node is installed, run:

```bash
npm i
ng serve --port=4200
```

### Code Formatting

#### Setup Overview

This code base has built-in autoformatting via [husky](https://www.npmjs.com/package/husky), [prettier](), [tslint]() and [tslint-prettierconfig](). When you attempt to make git commits, a pre-commit hook will first attempt to auto-format the code (according to configurations in tslint.json) and, if this fails, then the commit will be rejected. If you run into trouble with a particular line of code (e.g. your editor autoformats it in a manner incompatible with tslint-prettier), then add this comment on the line before: `// prettier-ignore`.

Autoformatting on commit helps keep the code base neat and consistent between developers, and it simplifies git-commit histories.

#### Editor Autoformatting

It is highly recommended that you use an editor that reads the autoformat configuration files and lets you thereby autoformat on each save so that, in theory, the code will not be altered by husky on commits. Visual Studio Code settings are included in `.vscode`.

## Production Build

To test a production build locally, run `npm run build` to clear out and reinstall the build assets in `dist`, then test that build locally by running `node server.js` and checking the product out at `http://localhost:4000`.

## Application Structure

...
