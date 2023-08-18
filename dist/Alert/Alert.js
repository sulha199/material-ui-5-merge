import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import AlertM from '@mui/material/Alert';
import IconButton from '../IconButton/IconButton';
import Icon from '../Icon/Icon';
import Collapse from '@mui/material/Collapse';
import AlertTitle from '../AlertTitle/AlertTitle';
/**
 * @uxpindocurl https://mui.com/api/alert/
 */
function Alert(props) {
    const [open, setOpen] = React.useState(props.isOpen ?? true);
    React.useEffect(() => {
        setOpen(props.isOpen ?? true);
    }, [props.isOpen]); // Only re-run the effect if value prop changes
    const { icon, title, ...otherProps } = props;
    return (_jsx(Collapse, { in: open, children: _jsxs(AlertM, { ...otherProps, icon: icon ? _jsx(Icon, { fontSize: "inherit", children: icon }) : false, action: (props.hasClose ?? true) && (_jsx(IconButton, { "aria-label": "close", color: "inherit", size: "small", onClick: () => {
                    setOpen(false);
                }, icon: props.action || 'close' })), sx: { mb: 2 }, children: [title ? _jsx(AlertTitle, { children: title }) : null, props.children] }) }));
}
export default Alert;
//# sourceMappingURL=Alert.js.map