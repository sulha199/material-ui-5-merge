import PropTypes from 'prop-types';
import PaginationM, { PaginationProps } from '@mui/material/Pagination';

/**
 * @uxpindocurl https://mui.com/api/pagination/
 */
function Pagination(props: PaginationProps) {
  return <PaginationM {...props} />;
}

export default Pagination;
