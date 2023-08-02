/**
 * @uxpindocurl https://mui.com/material-ui/react-snackbar/
 * @uxpinuseportal
 */
declare function Snackbar(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Snackbar {
    namespace propTypes {
        let message: PropTypes.Requireable<string>;
        let open: PropTypes.Requireable<boolean>;
        let undo: PropTypes.Requireable<boolean>;
        let action: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let actionOrigin: PropTypes.Requireable<object>;
        let autoHideDuration: PropTypes.Requireable<number>;
        let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let classes: PropTypes.Requireable<object>;
        let ClickAwayListenerProps: PropTypes.Requireable<object>;
        let ContentProps: PropTypes.Requireable<object>;
        let disableWindowBlurListener: PropTypes.Requireable<boolean>;
        let key: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let onClose: PropTypes.Requireable<(...args: any[]) => any>;
        let resumeHideDuration: PropTypes.Requireable<number>;
        let TransitionComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        let TransitionProps: PropTypes.Requireable<object>;
        let sx: PropTypes.Requireable<object>;
        let vertical: PropTypes.Requireable<string>;
        let horizontal: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        let vertical_1: string;
        export { vertical_1 as vertical };
        let horizontal_1: string;
        export { horizontal_1 as horizontal };
    }
}
export default Snackbar;
import PropTypes from 'prop-types';
