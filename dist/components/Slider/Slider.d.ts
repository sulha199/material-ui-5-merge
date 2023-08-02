declare function Slider(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Slider {
    namespace propTypes {
        let size: PropTypes.Requireable<string>;
        let min: PropTypes.Requireable<number>;
        let max: PropTypes.Requireable<number>;
        let defaultValue: PropTypes.Requireable<number>;
        let valueLabelDisplay: PropTypes.Requireable<string>;
        let valueLabelFormat: number;
        let step: PropTypes.Requireable<number>;
        let marks: PropTypes.Requireable<boolean>;
        let color: PropTypes.Requireable<string>;
        let orientation: PropTypes.Requireable<string>;
        let track: PropTypes.Requireable<string | boolean>;
        let disabled: PropTypes.Requireable<boolean>;
        let components: PropTypes.Requireable<string>;
        let name: PropTypes.Requireable<string>;
        let disableSwap: PropTypes.Requireable<boolean>;
        let componentsProps: PropTypes.Requireable<object>;
        let getAriaLabel: PropTypes.Requireable<(...args: any[]) => any>;
        let getAriaValueText: PropTypes.Requireable<(...args: any[]) => any>;
        let scale: PropTypes.Requireable<(...args: any[]) => any>;
        let isRtl: PropTypes.Requireable<boolean>;
        let classes: PropTypes.Requireable<object>;
        let sx: PropTypes.Requireable<object>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
export default Slider;
import PropTypes from 'prop-types';
