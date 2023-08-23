import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Button from '@mui/material/Button';
import OriginalSnackbar from '@mui/material/Snackbar';
import IconButton from '../IconButton/IconButton';
/**
 * @uxpindocurl https://mui.com/material-ui/react-snackbar/
 * @uxpinuseportal
 */
export default function Snackbar(props) {
    const { horizontal = 'left', open, sx, undo, uxpinRef, vertical = 'bottom', onClose, ...other } = props;
    const [isOpen, setIsOpen] = React.useState(open);
    React.useEffect(() => {
        setIsOpen(open);
    }, [props]);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            // prevents from closing in the UXPin Editor when switching props
            return;
        }
        onClose?.(event, reason);
        setIsOpen(false);
    };
    const anchorOrigin = { vertical, horizontal };
    const action = (_jsxs(_Fragment, { children: [undo && (_jsx(Button, { color: "primary", size: "small", onClick: () => setIsOpen(false), children: "Undo" })), _jsx(IconButton, { size: "small", "aria-label": "close", color: "inherit", onClick: () => setIsOpen(false), icon: "close" })] }));
    return (_jsx(OriginalSnackbar, { ...other, onClose: handleClose, open: isOpen, anchorOrigin: anchorOrigin, action: action, ref: uxpinRef }));
}
//# sourceMappingURL=Snackbar.js.map