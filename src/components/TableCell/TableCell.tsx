import React from 'react';
import PropTypes from 'prop-types';
import TableCellM, {TableCellProps} from '@mui/material/TableCell';

/**
 * @uxpindocurl https://mui.com/api/table-cell/#main-content
 */
function TableCell(props: TableCellProps) {
  return <TableCellM {...props}>{props.children}</TableCellM>;
}
export default TableCell;
