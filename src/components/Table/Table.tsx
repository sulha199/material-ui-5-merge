import TableM, {TableProps} from '@mui/material/Table';

/**
 * @uxpindocurl https://mui.com/components/tables/#main-content
 */
function Table(props: TableProps) {
  return (
      <TableM {...props}>{props.children}</TableM>
  );
}

export default Table;
