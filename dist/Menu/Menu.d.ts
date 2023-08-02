declare function Menu(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Menu {
    namespace propTypes {
        let open: PropTypes.Requireable<boolean>;
        let trigger: PropTypes.Requireable<string>;
        let icon: PropTypes.Requireable<string>;
        let label: PropTypes.Requireable<string>;
        let buttonVariant: PropTypes.Requireable<string>;
        let color: PropTypes.Requireable<string>;
        let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let sx: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        let trigger_1: string;
        export { trigger_1 as trigger };
        let label_1: string;
        export { label_1 as label };
        let buttonVariant_1: string;
        export { buttonVariant_1 as buttonVariant };
        let icon_1: string;
        export { icon_1 as icon };
    }
}
export default Menu;
import PropTypes from 'prop-types';
