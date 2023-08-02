export default Accordion;
/**
 * @upxindocurl https://mui.com/api/accordion/
 */
declare function Accordion(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Accordion {
    namespace propTypes {
        let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let classes: PropTypes.Requireable<object>;
        let defaultExpanded: PropTypes.Requireable<boolean>;
        let disabled: PropTypes.Requireable<boolean>;
        let disableGutters: PropTypes.Requireable<boolean>;
        let expanded: PropTypes.Requireable<boolean>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let square: PropTypes.Requireable<boolean>;
        let TransitionComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        let TransitionProps: PropTypes.Requireable<object>;
        let sx: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        let expanded_1: boolean;
        export { expanded_1 as expanded };
    }
}
import PropTypes from 'prop-types';
