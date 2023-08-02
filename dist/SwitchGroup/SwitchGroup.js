import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Switch from '../Switch/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '../FormControlLabel/FormControlLabel';
import FormControl from '../FormControl/FormControl';
import FormLabel from '../FormLabel/FormLabel';
import PropTypes from 'prop-types';
export default function SwitchGroup(props) {
    return (_jsxs(FormControl, { component: "fieldset", children: [_jsx(FormLabel, { component: "legend", children: props.grouplabel }), _jsx(FormGroup, { ...props, children: React.Children.map(props.children, (child) => {
                    return (_jsx(FormControlLabel, { value: child.props.value, checked: child.props.checked, control: _jsx(Switch, { id: "switch-group", color: props.color, size: props.size, 
                            // checked={false}
                            inputProps: {
                                role: 'switch',
                                'aria-checked': props.checked,
                            } }), htmlFor: "switch-group", label: child.props.label, labelPlacement: props.labelPlacement, disabled: child.props.disabled }));
                }) })] }));
}
SwitchGroup.propTypes = {
    checked: PropTypes.bool,
    /**
     * Display text over the radio group.
     */
    grouplabel: PropTypes.string,
    /**
     * The position of the label.
     */
    labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),
    /**
     * The value of the initially selected radio button.
     * @uxpinbind onChange 1
     * @uxpinpropname  Selected Value
     */
    value: PropTypes.string,
    /**
     * The content of the component.
     * @uxpinignoreprop
     */
    children: PropTypes.node,
    /**
     * The size of the component. small is equivalent to the dense checkbox styling.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning']),
    /**
     * The name used to reference the value of the control.
     * @uxpinignoreprop
     */
    name: PropTypes.string,
    /**
     * @uxpinignoreprop
     */
    onKeyDown: PropTypes.func,
    /**
     * display selection controls in a single row.
     */
    row: PropTypes.bool,
    /**
     * Change event to use with UXPin interactions.
     */
    onChange: PropTypes.func,
};
SwitchGroup.defaultProps = {
    onChange: () => undefined,
};
//# sourceMappingURL=SwitchGroup.js.map