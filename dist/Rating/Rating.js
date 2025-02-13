import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import PropTypes from 'prop-types';
import RatingM from '@mui/material/Rating';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants';
/**
 * @uxpindocurl https://mui.com/api/rating/#main-content
 */
function Rating(props) {
    return (_jsx(RatingM, { ...props, emptyIcon: props.emptyIcon && _jsx(Icon, { fontSize: "inherit", children: props.emptyIcon }), icon: props.icon && _jsx(Icon, { fontSize: "inherit", children: props.icon }) }));
}
Rating.propTypes = {
    /**
     * @uxpinignoreprop
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * The icon to display when empty.
     */
    emptyIcon: PropTypes.oneOf(iconVariants),
    /**
     * The icon to display.
     * @uxpinpropname Full Icon
     */
    icon: PropTypes.oneOf(iconVariants),
    /**
     * Maximum rating.
     * @uxpinpropname Max Rating
     */
    max: PropTypes.number,
    /**
     * The minimum increment value change allowed.
     */
    precision: PropTypes.string,
    /**
     * If true, the component is disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Removes all hover effects and pointer events.
     */
    readOnly: PropTypes.bool,
    /**
     * @uxpinignoreprop
     * Override or extend the styles applied to the component.
     * Don't need this with Merge if we have Rating prop
     */
    defaultValue: PropTypes.number,
    /**
     * @uxpinignoreprop
     * Override or extend the styles applied to the component.
     */
    emptyLabelText: PropTypes.node,
    /**
     * @uxpinignoreprop
     * Override or extend the styles applied to the component.
     */
    getLabelText: PropTypes.func,
    /**
     * If true, only the selected icon will be highlighted.
     */
    highlightSelectedOnly: PropTypes.bool,
    /**
     * The name attribute of the radio input elements.
     * This input name should be unique within the page.
     * Being unique within a form is insufficient since the name is used to generated IDs.
     */
    name: PropTypes.string,
    /**
     * The size of the component.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * The rating value.
     * @uxpinbind onChange 1
     */
    value: PropTypes.string,
    /**
     * On click event to use with UXPin interactions.
     */
    onChange: PropTypes.func,
    /**
     * Callback function that is fired when the hover state changes.
     */
    onChangeActive: PropTypes.func,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.object,
};
export default Rating;
//# sourceMappingURL=Rating.js.map