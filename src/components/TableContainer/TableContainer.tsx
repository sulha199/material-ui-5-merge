import TableContainerM, {TableContainerProps} from '@mui/material/TableContainer';

/**
 * @uxpindocurl https://mui.com/api/table-container/#main-content
 */
function TableContainer(props: TableContainerProps) {
  return <TableContainerM {...props}>{props.children}</TableContainerM>;
}

export default TableContainer;
