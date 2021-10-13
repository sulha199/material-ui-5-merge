import React from "react";
import PropTypes from "prop-types";
import AccordionM from '@mui/material/Accordion';

function Accordion(props) {
    return (
        <AccordionM {...props}>{props.children}</AccordionM>
    )
} 

Accordion.propTypes = {
  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * If true, expands the accordion by default.
   * @uxpinignoreprop
   */
  defaultExpanded: PropTypes.bool,

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If true, it removes the margin between two expanded accordion items and the increase of height.
   */
  disableGutters: PropTypes.bool,

  /**
   * If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion.
   */
  expanded: PropTypes.bool,

  /**
   * Callback fired when the expand/collapse state is changed.
   */
  onChange: PropTypes.func,

  /**
   * If true, rounded corners are disabled.
   */
  square: PropTypes.bool,

  /**
   * The component used for the transition. Follow this guide to learn more about the requirements for this component.
   */
  TransitionComponent: PropTypes.elementType,

  /**
   * Props applied to the transition element. By default, the element is based on this Transition component.
   */
  TransitionProps: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * @uxpinignoreprop
   */
  sx: PropTypes.object
}

export default Accordion;