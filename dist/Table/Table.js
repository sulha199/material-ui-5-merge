import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import PropTypes from 'prop-types';
import TableM from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
/**
 * @uxpindocurl https://mui.com/components/tables/#main-content
 */
function Table(props) {
    return (_jsx(TableContainer, { children: _jsx(TableM, { ...props, children: props.children }) }));
}
Table.propTypes = {
    /**
     * The content of the component, normally TableRow.
     * @uxpinignoreprop
     * */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * See CSS API below for more details.
     * @uxpinignoreprop
     */
    classes: PropTypes.object,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * Allows TableCells to inherit padding of the Table.
     */
    padding: PropTypes.oneOf(['checkbox', 'none', 'normal']),
    /**
     * Allows TableCells to inherit size of the Table.
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Set the header sticky.
     * ⚠️ It doesn't work with IE11.
     */
    stickyHeader: PropTypes.bool,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     * See the `sx` page for more details.
     */
    sx: PropTypes.object,
};
export default Table;
//# sourceMappingURL=Table.js.map