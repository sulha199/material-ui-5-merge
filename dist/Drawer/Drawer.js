import { jsx as _jsx } from "react/jsx-runtime";
import DrawerM from '@mui/material/Drawer';
import React from 'react';
import Box from '../Box/Box';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core';
const drawerStyle = makeStyles({
    root: {
        minWidth: '200px',
        minHeight: '300px',
        height: '100%'
    },
    divChildren: { width: props => props.width, minHeight: '200px' }
});
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function Drawer(props) {
    const [open, setOpen] = React.useState(props.open);
    const style = drawerStyle(props);
    React.useEffect(() => setOpen(props.open), [props]);
    // Unique Id
    const id = uuidv4();
    return (_jsx(Box, { className: style.root, id: id, children: _jsx(DrawerM, { open: open, onClose: () => {
                setOpen(false);
            }, container: document.querySelector("[id='" + id + "']"), disableEnforceFocus: true, disablePortal: true, ...props, children: _jsx("div", { className: style.divChildren, children: props.children }) }) }));
}
//# sourceMappingURL=Drawer.js.map