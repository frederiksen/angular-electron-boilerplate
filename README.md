# angular-electron-boilerplate

This template provides a starting point of a modern Electron app.

## Project gloals

Use [Angular](https://angular.io/) for the Electron renderer, ....

Use [TypeScript](https://www.typescriptlang.org/) ...

Use [webpack](https://webpack.js.org/) to pack *main* and *preload* to produce small fast build output. Everything is packed, so no need to include the *node_modules* folder, in order to remove unnessesary files and to produce small and fast builds.

## Getting started

`git clone https://github.com/frederiksen/angular-electron-boilerplate`

`cd angular-electron-boilerplate`

`npm install`

`npm run build:dev:all`

`npm start`

## NPM scripts

### Builds

| Command | Description |
| --- | --- |
| `npm run build:dev:all` | Developer builds of all projects |
| `npm run build:prod:all` | Production builds of all projects |
| `npm run build:dev:main` | Developer build of the *Electron main* project |
| `npm run build:prod:main` | Production build of the *Electron main* project |
| `npm run build:dev:renderer` | Developer build of the *Electron renderer* project |
| `npm run build:prod:renderer` | Production build of the *Electron renderer* project |
| `npm run build:dev:preload` | Developer build of the *Electron preload* project |
| `npm run build:prod:preload` | Production build of the *Electronpreload* project |

### Tests

TODO

### Updates

| Command | Description |
| --- | --- |
| `npm run update:angular` | Easy update to latest stable Angular |
| `npm run update:electron` | Easy update to latest stable Electron |
| `npm run update:webpack` | Easy update to latest stable WebPack |

## Debugging

Use [Code](https://code.visualstudio.com/) to get a super debug environment.

First be sure to have build everything:

`npm run build:dev:all`

Now set some breakpoints both in the main source code and in the renderer source code.

From Code press Ctrl+Shift+D and select **Main + Renderer** and press F5


