import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import PropTypes from 'prop-types';
import AlertTitleM from '@mui/material/AlertTitle';
/**
 * @uxpindocurl https://mui.com/api/alert-title/
 */
function AlertTitle(props) {
    return _jsx(AlertTitleM, { ...props, children: props.children });
}
AlertTitle.propTypes = {
    /**
     * The content of the component.
     * @uxpinpropname Text
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * @uxpinignoreprop
     */
    classes: PropTypes.object,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.object,
};
export default AlertTitle;
//# sourceMappingURL=AlertTitle.js.map