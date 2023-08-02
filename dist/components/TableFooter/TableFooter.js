import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import PropTypes from 'prop-types';
import TableFooterM from '@mui/material/TableFooter';
/**
 * @uxpindocurl https://mui.com/api/table-footer/
 */
function TableFooter(props) {
    return _jsx(TableFooterM, { ...props, children: props.children });
}
TableFooter.propTypes = {
    /**
     * The content of the TableFooter, normally TableFooterFooter and TableFooterFooter.
     * @uxpinignoreprop
     * */
    children: PropTypes.node,
    classes: PropTypes.object,
    component: PropTypes.elementType,
    sx: PropTypes.object,
};
export default TableFooter;
//# sourceMappingURL=TableFooter.js.map