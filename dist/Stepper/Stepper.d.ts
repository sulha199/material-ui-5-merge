export default Stepper;
/**
 * @uxpindocurl https://mui.com/components/steppers/#main-content
 */
declare function Stepper(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Stepper {
    namespace propTypes {
        let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let activeStep: PropTypes.Requireable<number>;
        let orientation: PropTypes.Requireable<string>;
        let alternativeLabel: PropTypes.Requireable<boolean>;
        let nonLinear: PropTypes.Requireable<boolean>;
        let classes: PropTypes.Requireable<object>;
        let connector: PropTypes.Requireable<PropTypes.ReactElementLike>;
        let sx: PropTypes.Requireable<object>;
    }
}
import PropTypes from 'prop-types';
