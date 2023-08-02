export default Pagination;
/**
 * @uxpindocurl https://mui.com/api/pagination/
 */
declare function Pagination(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Pagination {
    namespace propTypes {
        let count: PropTypes.Requireable<number>;
        let boundaryCount: PropTypes.Requireable<number>;
        let siblingCount: PropTypes.Requireable<number>;
        let defaultPage: PropTypes.Requireable<number>;
        let page: PropTypes.Requireable<number>;
        let hideNextButton: PropTypes.Requireable<boolean>;
        let hidePrevButton: PropTypes.Requireable<boolean>;
        let showFirstButton: PropTypes.Requireable<boolean>;
        let showLastButton: PropTypes.Requireable<boolean>;
        let color: PropTypes.Requireable<string>;
        let variant: PropTypes.Requireable<string>;
        let shape: PropTypes.Requireable<string>;
        let size: PropTypes.Requireable<string>;
        let disabled: PropTypes.Requireable<boolean>;
        let classes: PropTypes.Requireable<object>;
        let sx: PropTypes.Requireable<object>;
        let renderItem: PropTypes.Requireable<(...args: any[]) => any>;
        let getItemAriaLabel: PropTypes.Requireable<(...args: any[]) => any>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from 'prop-types';
