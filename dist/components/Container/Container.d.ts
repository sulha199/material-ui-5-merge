/**
 * @uxpindocurl https://mui.com/api/container/
 */
declare function Container(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Container {
    namespace propTypes {
        let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let fixed: PropTypes.Requireable<boolean>;
        let disableGutters: PropTypes.Requireable<boolean>;
        let maxWidth: PropTypes.Requireable<string>;
        let component: PropTypes.Requireable<string>;
        let classes: PropTypes.Requireable<object>;
        let sx: PropTypes.Requireable<object>;
    }
}
export default Container;
import PropTypes from 'prop-types';
