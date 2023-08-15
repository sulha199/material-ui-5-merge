import TableRowM, { TableRowProps as TableRowPropsM } from '@mui/material/TableRow';

export type TableRowProps = TableRowPropsM;

/**
 * @uxpindocurl https://mui.com/api/table-row/#main-content
 */
function TableRow(props: TableRowProps) {
  return <TableRowM {...props}>{props.children}</TableRowM>;
}

export default TableRow;
