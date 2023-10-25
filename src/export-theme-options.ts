import themeOptions from './components/UXPinWrapper/boilerplate-theme';
import { writeFileSync } from 'fs';

(async() => {
  const fileJson = './mui-theme-creator/src/theme.json';
  await writeFileSync(fileJson, JSON.stringify(themeOptions, undefined, 2));
})()

