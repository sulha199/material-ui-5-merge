/**
 * @uxpindocurl https://mui.com/components/chips/
 */
declare function Chip(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Chip {
    namespace propTypes {
        let label: PropTypes.Requireable<string>;
        let href: PropTypes.Requireable<string>;
        let disabled: PropTypes.Requireable<boolean>;
        let clickable: PropTypes.Requireable<boolean>;
        let deletable: PropTypes.Requireable<boolean>;
        let color: PropTypes.Requireable<string>;
        let size: PropTypes.Requireable<string>;
        let variant: PropTypes.Requireable<string>;
        let component: PropTypes.Requireable<string>;
        let deleteIcon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        let icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        let avatar: PropTypes.Requireable<PropTypes.ReactElementLike>;
        let onClick: PropTypes.Requireable<(...args: any[]) => any>;
        let onDelete: PropTypes.Requireable<(...args: any[]) => any>;
        let sx: PropTypes.Requireable<object>;
    }
}
export default Chip;
import PropTypes from 'prop-types';
