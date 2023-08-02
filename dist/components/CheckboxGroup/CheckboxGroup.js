import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import FormGroup from '../FormGroup/FormGroup';
import FormControlLabel from '../FormControlLabel/FormControlLabel';
import FormControl from '../FormControl/FormControl';
import FormLabel from '../FormLabel/FormLabel';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
export default function CheckboxGroup(props) {
    let id = uuidv4();
    const [state, setState] = React.useState(props.checked);
    const handleChange = (e) => {
        setState(e.target.checked);
    };
    return (_jsxs(FormControl, { component: "fieldset", children: [_jsx(FormLabel, { component: "legend", children: props.grouplabel }), _jsx(FormGroup, { ...props, children: React.Children.map(props.children, (child) => {
                    return (_jsx(FormControlLabel, { value: child.props.value, control: _jsx(Checkbox, { id: id, color: props.color, size: props.size, checked: props.checked ? props.checked : state, onChange: handleChange }), label: child.props.label, labelPlacement: props.labelPlacement, disabled: child.props.disabled }));
                }) })] }));
}
CheckboxGroup.propTypes = {
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
    /**
     * If `true`, the checkbox is checked.
     * @uxpinbind onChange 1
     */
    checked: PropTypes.bool,
};
CheckboxGroup.defaultProps = {
    onChange: () => undefined,
};
//# sourceMappingURL=CheckboxGroup.js.map