/**
 * @uxpindocurl https://mui.com/material-ui/react-speed-dial/#api
 */
declare function SpeedDial(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace SpeedDial {
    namespace propTypes {
        let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let classes: PropTypes.Requireable<PropTypes.InferProps<{
            fab: PropTypes.Requireable<string>;
            fabClosed: PropTypes.Requireable<string>;
            fabOpen: PropTypes.Requireable<string>;
            actions: PropTypes.Requireable<string>;
            actionsClosed: PropTypes.Requireable<string>;
            actionsOpen: PropTypes.Requireable<string>;
            staticTooltip: PropTypes.Requireable<string>;
            tooltipPlacementLeft: PropTypes.Requireable<string>;
            tooltipPlacementRight: PropTypes.Requireable<string>;
            tooltipPlacementTop: PropTypes.Requireable<string>;
            tooltipPlacementBottom: PropTypes.Requireable<string>;
            speedDial: PropTypes.Requireable<string>;
        }>>;
        let ariaLabel: PropTypes.Validator<string>;
        let direction: PropTypes.Requireable<string>;
        let hidden: PropTypes.Requireable<boolean>;
        let FabProps: PropTypes.Requireable<object>;
        let icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let onClose: PropTypes.Requireable<(...args: any[]) => any>;
        let onOpen: PropTypes.Requireable<(...args: any[]) => any>;
        let open: PropTypes.Requireable<boolean>;
        let openIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let sx: PropTypes.Requireable<object>;
        let TransitionComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        let transitionDuration: PropTypes.Requireable<NonNullable<number | PropTypes.InferProps<{
            enter: PropTypes.Requireable<number>;
            exit: PropTypes.Requireable<number>;
        }> | null | undefined>>;
        let TransitionProps: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        let actions: {
            icon: import("react/jsx-runtime").JSX.Element;
            name: string;
        }[];
    }
}
export default SpeedDial;
import PropTypes from 'prop-types';
