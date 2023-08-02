export default TablePagination;
declare function TablePagination(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace TablePagination {
    namespace propTypes {
        let labelRowsPerPage: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let showFirstButton: PropTypes.Requireable<boolean>;
        let showLastButton: PropTypes.Requireable<boolean>;
        let count: PropTypes.Requireable<number>;
        let page: PropTypes.Requireable<number>;
        let rowsPerPage: PropTypes.Requireable<number>;
        let ActionsComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        let component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        let backIconButtonProps: PropTypes.Requireable<object>;
        let classes: PropTypes.Requireable<object>;
        let nextIconButtonProps: PropTypes.Requireable<object>;
        let SelectProps: PropTypes.Requireable<object>;
        let onPageChange: PropTypes.Requireable<(...args: any[]) => any>;
        let labelDisplayedRows: PropTypes.Requireable<(...args: any[]) => any>;
        let onRowsPerPageChange: PropTypes.Requireable<(...args: any[]) => any>;
        let rowsPerPageOptions: PropTypes.Requireable<(number | null | undefined)[]>;
        let sx: PropTypes.Requireable<object>;
    }
}
import PropTypes from 'prop-types';
