# linter\_info

Code Contributor Style Guide

We’re following airbnb’s javascript style guidelines, modified for TypeScript.

Airbnb Guidelines can be found here: [https://airbnb.io/javascript/react/](https://airbnb.io/javascript/react/)

The npm package to install can be found here: [https://www.npmjs.com/package/eslint-config-airbnb-typescript-prettier](https://www.npmjs.com/package/eslint-config-airbnb-typescript-prettier)

Installing this package allows for easy access to airbnb guidelines and prettier support for TypeScript.

Basic Rules

* 3 Space indentation
* Single quotes for .ts, double quotes for .tsx files
* One React component per file
* Use PascalCase for filenames
* camelCase for prop names
* When using multiple selectors in a rule declaration, write each on its own line
* Omit the value of a prop when it is explicitly true

Setup for Visual Studio Code

Install this extension: [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Once installed, click on the settings icon on the bottom left of Visual Studio Code and click on Settings. Search for "Code Actions on Save" within Settings and pick "Edit in settings.json".

Add the following: { "editor.codeActionsOnSave": { "source.fixAll.eslint": true }, "eslint.validate": \["typescript", "typescriptreact"\] }

Now everytime you save a TypeScript file, VS Code will attempt to automatically fix ESLint errors.

