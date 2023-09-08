import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import boilerplateTheme from './boilerplate-theme';
const defaultTheme = createTheme(boilerplateTheme);
const UXPinWrapper = (props) => {
    const { children, theme } = props;
    useEffect(() => {
        const icons = document.createElement('link');
        icons.setAttribute('rel', 'stylesheet');
        icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
        document.head.prepend(icons);
    }, []);
    return _jsx(ThemeProvider, { ...props, theme: theme ?? defaultTheme, children: children });
};
export default UXPinWrapper;
//# sourceMappingURL=UXPinWrapper.js.map