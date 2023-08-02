import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import PropTypes from 'prop-types';
import ListItemIconM from '@mui/material/ListItemIcon';
import Icon from '../Icon/Icon';
/**
 * @uxpindocurl https://mui.com/api/list-item-icon/
 */
function ListItemIcon(props) {
    return (_jsx(ListItemIconM, { ...props, children: _jsx(Icon, { color: props.color, children: props.children }) }));
}
ListItemIcon.propTypes = {
    /**
     * The content of the component, normally `Icon`, `SvgIcon`,
     * @uxpinpropname  Icon
     * Use the name of the icon from https://material.io/tools/icons.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     * @uxpinignoreprop
     */
    classes: PropTypes.object,
    /**
     * @ignore
     * @uxpinignoreprop
     */
    className: PropTypes.string,
    /**
     * The color of the icon.
     */
    color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.object,
};
export default ListItemIcon;
//# sourceMappingURL=ListItemIcon.js.map