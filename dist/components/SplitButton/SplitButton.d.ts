declare function SplitButton(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace SplitButton {
    namespace propTypes {
        let options: PropTypes.Requireable<any[]>;
        let selected: PropTypes.Requireable<number>;
        let variant: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        let options_1: string[];
        export { options_1 as options };
        let selected_1: number;
        export { selected_1 as selected };
    }
}
export default SplitButton;
import PropTypes from 'prop-types';
