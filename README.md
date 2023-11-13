
# MUI + UXPin Merge with Theme creator

## Steps

1. [Install](#installation)
2. Open [Theme-Creator](#preview-components-in-theme-creator)
3. [Modify MUI Theme](#modifying-mui-theme)
4. [Run UXPin in local development](#run-uxpin-in-local-development)
5. [Push to your specific UXPin library](#push-uxpin)


## Installation

The library was initially created with  [Yarn](https://yarnpkg.com/) by the UXPin team. So, it is recommended to use `Yarn`.  

But, You could also install it with `NPM` as well without any major effect.

**Yarn Installation**
```bash
yarn
```
**NPM Installation**
```bash
npm install --force
```

## Preview components in Theme-Creator
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

**Note:** 

`src/components/UXPinWrapper/boilerplate-theme.ts` uses React CSS, a bit different to the HTML CSS.
- You could utilize the Visual Studio Code's intellisense to help you assign the React CSS.
- Or, you could use tool https://staxmanade.com/CssToReact/ that is able to convert HTML CSS into React CSS

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

## Push UXPin
1. Get the token from UXPin
    1. Go to your UXPin account
    2. Enter the UXPin Editor
    3. Create a new library, or open existing one that you are targeting
    4. Select the option import React components
    5. Copy the Auth token (don’t share it with anyone and do not place it in any files checked into git repository. This token provides direct access to the library on your account.) The process looks like this:
    ![](https://images.prismic.io/uxpincommunity%2F0b17168b-023d-44b7-8351-6e79b6e17b9b_merge_ci_2.gif)
2. Push the library via the uxpin-merge CLI
    ```bash
    npm run uxpin push -- --token [YOUR-TOKEN]
    ```