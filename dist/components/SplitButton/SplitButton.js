import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Icon from '../Icon/Icon';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
export default function SplitButton(props) {
    const options = props.options;
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    React.useEffect(() => {
        setSelectedIndex(props.selected);
    }, [props.selected]);
    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    return (_jsxs(React.Fragment, { children: [_jsxs(ButtonGroup, { variant: props.variant, ref: anchorRef, "aria-label": "split button", children: [_jsx(Button, { onClick: handleClick, children: options[selectedIndex] }), _jsx(Button, { size: "small", "aria-controls": open ? 'split-button-menu' : undefined, "aria-expanded": open ? 'true' : undefined, "aria-label": "hello", "aria-haspopup": "menu", onClick: handleToggle, children: _jsx(Icon, { children: "arrow_drop_down" }) })] }), _jsx(Popper, { open: open, anchorEl: anchorRef.current, role: undefined, transition: true, disablePortal: true, children: ({ TransitionProps, placement }) => (_jsx(Grow, { ...TransitionProps, style: {
                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                    }, children: _jsx(Paper, { children: _jsx(ClickAwayListener, { onClickAway: handleClose, children: _jsx(MenuList, { id: "split-button-menu", children: options.map((option, index) => (_jsx(MenuItem, { 
                                    // disabled={index === 2}
                                    selected: index === selectedIndex, onClick: (event) => handleMenuItemClick(event, index), children: option }, option))) }) }) }) })) })] }));
}
SplitButton.propTypes = {
    options: PropTypes.array,
    selected: PropTypes.number,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
};
SplitButton.defaultProps = {
    options: ['Option 1', 'Option 2', 'Option 3'],
    selected: 0,
};
//# sourceMappingURL=SplitButton.js.map