import * as React from 'react';
import { SnackbarProps as SnackbarPropsM } from '@mui/material/Snackbar';
type SnackBarprops = SnackbarPropsM & {
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'center' | 'right';
    undo?: boolean;
    uxpinRef?: React.Ref<any>;
};
/**
 * @uxpindocurl https://mui.com/material-ui/react-snackbar/
 * @uxpinuseportal
 */
export default function Snackbar(props: SnackBarprops): import("react/jsx-runtime").JSX.Element;
export {};
