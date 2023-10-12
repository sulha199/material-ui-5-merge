import TableBodyM, {TableBodyProps} from '@mui/material/TableBody';

/**
 * @uxpindocurl https://mui.com/api/table-body/#main-content
 */
function TableBody(props: TableBodyProps) {
  return <TableBodyM {...props}>{props.children}</TableBodyM>;
}

export default TableBody;
