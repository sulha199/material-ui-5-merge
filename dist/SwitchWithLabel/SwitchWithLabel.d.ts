export { SwitchWithLabel as default };
declare function SwitchWithLabel(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace SwitchWithLabel {
    namespace propTypes {
        let checked: PropTypes.Requireable<boolean>;
        let disabled: PropTypes.Requireable<boolean>;
        let label: PropTypes.Requireable<string>;
        let value: PropTypes.Requireable<string>;
        let size: PropTypes.Requireable<string>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let labelPlacement: PropTypes.Requireable<string>;
        let control: PropTypes.Requireable<PropTypes.ReactElementLike>;
        let color: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        let checked_1: boolean;
        export { checked_1 as checked };
        export function onChange_1(): undefined;
        export { onChange_1 as onChange };
    }
}
import PropTypes from 'prop-types';
