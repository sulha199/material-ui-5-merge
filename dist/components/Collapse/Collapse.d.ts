export default Collapse;
/**
 * @uxpindocurl https://mui.com/api/collapse/#main-content
 */
declare function Collapse(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Collapse {
    namespace propTypes {
        export let addEndListener: PropTypes.Requireable<(...args: any[]) => any>;
        export let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export let classes: PropTypes.Requireable<object>;
        export let className: PropTypes.Requireable<string>;
        export let collapsedSize: PropTypes.Requireable<string>;
        export let component: PropTypes.Requireable<string>;
        let _in: PropTypes.Requireable<boolean>;
        export { _in as in };
        export let orientation: PropTypes.Requireable<string>;
        export let timeout: number;
        export let sx: PropTypes.Requireable<object>;
    }
}
import PropTypes from 'prop-types';
