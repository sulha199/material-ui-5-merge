import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import boilerplateTheme from './boilerplate-theme';
const theme = createTheme(boilerplateTheme);
const UXPinWrapper = ({ children }) => {
    const icons = document.createElement('link');
    icons.setAttribute('rel', 'stylesheet');
    icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    document.head.appendChild(icons);
    return _jsx(ThemeProvider, { theme: theme, children: children });
};
export default UXPinWrapper;
//# sourceMappingURL=UXPinWrapper.js.map