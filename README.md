
# MUI + UXPin Merge with Theme creator

  

## Installation

The library was initially created with  [Yarn](https://yarnpkg.com/).  You could also install it with `NPM` as well, but it is recommended to use `Yarn`.

**Yarn Installation**
```bash
yarn
```
**NPM Installation**
```bash
npm install --force
```

## Run UXPin in local development
**Yarn**
```bash
yarn start
```
**NPM**
```bash
npm start
```
Then, browser will automatically open the related URL.

## Preview components in local
**Yarn**
```bash
yarn theme-creator
```
**NPM**
```bash
npm run theme-creator
```
Then open [http://localhost:8000/](http://localhost:8000/) in the browser.

## Modifying MUI Theme

To modify theme:
1. Do the [Preview components in local](#preview-components-in-local)
2. Then, edit file `src/components/UXPinWrapper/boilerplate-theme.ts`, and put the required changes into the `boilerplateTheme` variable.
3. The `Preview components in local` will automatically reloaded when the `src/components/UXPinWrapper/boilerplate-theme.ts` is saved with correct value.