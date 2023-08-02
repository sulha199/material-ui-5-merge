export default Image;
declare function Image(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Image {
    namespace propTypes {
        let alt: PropTypes.Requireable<string>;
        let height: PropTypes.Requireable<string>;
        let width: PropTypes.Requireable<string>;
        let objectFit: PropTypes.Requireable<string>;
        let src: PropTypes.Requireable<string>;
        let style: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        let src_1: string;
        export { src_1 as src };
        let width_1: string;
        export { width_1 as width };
        let height_1: string;
        export { height_1 as height };
        let objectFit_1: string;
        export { objectFit_1 as objectFit };
    }
}
import PropTypes from 'prop-types';
