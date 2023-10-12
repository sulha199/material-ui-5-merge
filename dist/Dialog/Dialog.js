import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import DialogM from '@mui/material/Dialog';
/**
 * @uxpinuseportal
 * @uxpindocurl https://mui.com/api/dialog/#main-content
 */
function Dialog(props) {
    const [open, setOpen] = React.useState(props.open);
    const { children, onClose, disablePortal, TransitionProps, style } = props;
    React.useEffect(() => setOpen(props.open), [props]);
    return (_jsx(DialogM, { ...props, open: open, onClose: (e, reason) => {
            setOpen(false);
            onClose?.(e, reason);
        }, TransitionProps: { tabIndex: undefined, ...TransitionProps }, disablePortal: disablePortal ?? true, sx: { minWidth: '300px', minHeight: '300px', width: '100%', height: '100%', ...style }, children: children }));
}
export default Dialog;
//# sourceMappingURL=Dialog.js.map