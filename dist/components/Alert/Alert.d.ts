export default Alert;
/**
 * @uxpindocurl https://mui.com/api/alert/
 */
declare function Alert(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Alert {
    namespace propTypes {
        let title: PropTypes.Requireable<string>;
        let icon: PropTypes.Requireable<string>;
        let children: PropTypes.Requireable<string>;
        let action: PropTypes.Requireable<string>;
        let isOpen: PropTypes.Requireable<boolean>;
        let hasClose: PropTypes.Requireable<boolean>;
        let iconMapping: PropTypes.Requireable<object>;
        let classes: PropTypes.Requireable<object>;
        let closeText: PropTypes.Requireable<string>;
        let color: PropTypes.Requireable<string>;
        let severity: PropTypes.Requireable<string>;
        let variant: PropTypes.Requireable<string>;
        let role: PropTypes.Requireable<string>;
        let onClose: PropTypes.Requireable<(...args: any[]) => any>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let sx: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        let isOpen_1: boolean;
        export { isOpen_1 as isOpen };
        export function onChange_1(): undefined;
        export { onChange_1 as onChange };
        let action_1: string;
        export { action_1 as action };
        let hasClose_1: boolean;
        export { hasClose_1 as hasClose };
        let title_1: string;
        export { title_1 as title };
        let children_1: string;
        export { children_1 as children };
    }
}
import PropTypes from 'prop-types';
