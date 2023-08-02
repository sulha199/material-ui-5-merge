declare function CheckboxGroup(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace CheckboxGroup {
    namespace propTypes {
        let grouplabel: PropTypes.Requireable<string>;
        let labelPlacement: PropTypes.Requireable<string>;
        let value: PropTypes.Requireable<string>;
        let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let size: PropTypes.Requireable<string>;
        let color: PropTypes.Requireable<string>;
        let name: PropTypes.Requireable<string>;
        let onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        let row: PropTypes.Requireable<boolean>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let checked: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        export function onChange_1(): undefined;
        export { onChange_1 as onChange };
    }
}
export default CheckboxGroup;
import PropTypes from 'prop-types';
