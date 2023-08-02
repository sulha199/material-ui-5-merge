import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import PropTypes from 'prop-types';
import CheckboxM from '@mui/material/Checkbox';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants';
import { v4 as uuidv4 } from 'uuid';
/**
 * @uxpindocurl https://mui.com/api/checkbox/
 */
function Checkbox(props) {
    // Unique Id
    const id = uuidv4();
    return (_jsx(CheckboxM, { ...props, icon: props.icon ? _jsx(Icon, { children: props.icon }) : _jsx(Icon, { children: "check_box_outline_blank " }), checkedIcon: props.checkedIcon ? _jsx(Icon, { children: props.checkedIcon }) : _jsx(Icon, { children: "check_box" }) }, id));
}
Checkbox.propTypes = {
    /**
     * If `true`, the component is checked.
     * @uxpinbind onChange 1
     */
    checked: PropTypes.bool,
    /**
     * The icon to display when the component is unchecked.
     */
    icon: PropTypes.oneOf(iconVariants),
    /**
     * The icon to display when the component is checked.
     */
    checkedIcon: PropTypes.oneOf(iconVariants),
    /**
     * @uxpinignoreprop
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning']),
    /**
     * If `true`, the switch will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Callback fired when the state is changed.
     */
    onChange: PropTypes.func,
    /**
     * If true, the input element is required.
     */
    required: PropTypes.bool,
    /**
     * The size of the component. small is equivalent to the dense checkbox styling.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * The value of the component.
     */
    value: PropTypes.string,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.object,
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map