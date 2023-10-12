import React from 'react';
import PropTypes from 'prop-types';
import TableHeadM, {TableHeadProps} from '@mui/material/TableHead';

/**
 * @uxpindocurl https://mui.com/api/table-head/#main-content
 */
function TableHead(props: TableHeadProps) {
  return <TableHeadM {...props}>{props.children}</TableHeadM>;
}

export default TableHead;
