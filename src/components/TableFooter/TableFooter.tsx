import React from 'react';
import PropTypes from 'prop-types';
import TableFooterM, {TableFooterProps} from '@mui/material/TableFooter';

/**
 * @uxpindocurl https://mui.com/api/table-footer/
 */
function TableFooter(props: TableFooterProps) {
  return <TableFooterM {...props}>{props.children}</TableFooterM>;
}

export default TableFooter;
