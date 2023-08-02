/**
 * @uxpindocurl https://mui.com/api/radio-group/
 */
declare function RadioGroup(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace RadioGroup {
    namespace propTypes {
        let checked: PropTypes.Requireable<boolean>;
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
    }
    namespace defaultProps {
        export function onChange_1(): undefined;
        export { onChange_1 as onChange };
    }
}
export default RadioGroup;
import PropTypes from 'prop-types';
