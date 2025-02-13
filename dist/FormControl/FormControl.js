import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import PropTypes from 'prop-types';
import FormControlM from '@mui/material/FormControl';
/**
 * @uxpindocurl https://mui.com/api/form-control/#main-content
 */
function FormControl(props) {
    return _jsx(FormControlM, { ...props, children: props.children });
}
FormControl.propTypes = {
    /**
     * The content of the component.
     */
    /** @uxpinignoreprop */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * See CSS API https://mui.com/api/form-label/#css for more details.
     */
    /** @uxpinignoreprop */
    classes: PropTypes.object,
    /**
     * The color of the component.
     * It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['error', 'info', 'primary', 'secondary', 'success', 'warning']),
    /**
     * The component used for the root node. Either a string to use a HTML element or a component.
     */
    /** @uxpinignoreprop */
    component: PropTypes.elementType,
    /**
     * The size of the component
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * If dense or normal, will adjust vertical spacing of this and contained components.
     */
    margin: PropTypes.oneOf(['dense', 'none', 'normal']),
    /**
     * 	If true, the component will take up the full width of its container.
     */
    fullWidth: PropTypes.bool,
    /**
     * If 'true', the label should be displayed in a disabled state.
     */
    disabled: PropTypes.bool,
    /**
     * If 'true', the label is displayed in an error state.
     */
    error: PropTypes.bool,
    /**
     * If 'true', the label should use filled classes key.
     */
    /** @uxpinignoreprop */
    filled: PropTypes.bool,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
    /**
     * If 'true', the input of this label is focused (used by FormGroup components).
     */
    focused: PropTypes.bool,
    /**
     * If 'true', the label will indicate that the input is required.
     */
    required: PropTypes.bool,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     * See the `sx` page for more details https://mui.com/system/the-sx-prop/.
     */
    /** */
    sx: PropTypes.object,
};
export default FormControl;
//# sourceMappingURL=FormControl.js.map