export { Backdrop as default };
/**
 * @uxpindocurl https://mui.com/api/backdrop/
 */
declare function Backdrop(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Backdrop {
    namespace propTypes {
        let open: PropTypes.Requireable<boolean>;
        let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let classes: PropTypes.Requireable<object>;
        let component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        let components: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        let componentsProps: PropTypes.Requireable<object>;
        let invisible: PropTypes.Requireable<boolean>;
        let sx: PropTypes.Requireable<object>;
        let transitionDuration: PropTypes.Requireable<number>;
        let onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        let open_1: boolean;
        export { open_1 as open };
    }
}
import PropTypes from 'prop-types';
