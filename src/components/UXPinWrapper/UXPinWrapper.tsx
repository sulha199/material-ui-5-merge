import { FC, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import boilerplateTheme from './boilerplate-theme';
import { DefaultTheme, ThemeProviderProps } from '@mui/system';

const defaultTheme = createTheme(boilerplateTheme);

type UxPinWrapperProps<T = DefaultTheme> = ThemeProviderProps<T>;

const UXPinWrapper: FC<UxPinWrapperProps> = (props) => {
  const { children, theme } = props;

  useEffect(() => {
    const icons = document.createElement('link') as HTMLLinkElement;
    icons.setAttribute('rel', 'stylesheet');
    icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    document.head.prepend(icons);
  }, [])

  return <ScopedCssBaseline>
    <ThemeProvider {...props} theme={theme ?? defaultTheme}>{children}</ThemeProvider>
  </ScopedCssBaseline>;
};

export default UXPinWrapper;
