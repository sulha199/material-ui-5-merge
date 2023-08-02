/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
declare function Drawer(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Drawer {
    namespace propTypes {
        let open: PropTypes.Requireable<boolean>;
        let variant: PropTypes.Requireable<string>;
        let anchor: PropTypes.Requireable<string>;
        let width: PropTypes.Requireable<number>;
        let onClose: PropTypes.Requireable<(...args: any[]) => any>;
        let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
    namespace defaultProps {
        let open_1: boolean;
        export { open_1 as open };
    }
}
export default Drawer;
import PropTypes from 'prop-types';
