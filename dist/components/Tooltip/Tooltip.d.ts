export default Tooltip;
/**
 * @uxpindocurl https://mui.com/api/tooltip/
 * @uxpinwrappers
 * SkipContainerWrapper
 */
declare function Tooltip(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Tooltip {
    namespace propTypes {
        let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let title: PropTypes.Requireable<string>;
        let classes: PropTypes.Requireable<object>;
        let PopperProps: PropTypes.Requireable<object>;
        let arrow: PropTypes.Requireable<boolean>;
        let open: PropTypes.Requireable<boolean>;
        let disableFocusListener: PropTypes.Requireable<boolean>;
        let disableHoverListener: PropTypes.Requireable<boolean>;
        let disableInteractive: PropTypes.Requireable<boolean>;
        let disableTouchListener: PropTypes.Requireable<boolean>;
        let placement: PropTypes.Requireable<string>;
        let onClose: PropTypes.Requireable<(...args: any[]) => any>;
        let onOpen: PropTypes.Requireable<(...args: any[]) => any>;
        let sx: PropTypes.Requireable<object>;
    }
}
import PropTypes from 'prop-types';
