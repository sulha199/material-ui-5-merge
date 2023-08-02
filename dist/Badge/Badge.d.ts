export default Badge;
/**
 * @uxpindocurl https://mui.com/api/badge/
 */
declare function Badge(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Badge {
    namespace propTypes {
        let vertical: PropTypes.Requireable<string>;
        let horizontal: PropTypes.Requireable<string>;
        let badgeContent: PropTypes.Requireable<number>;
        let max: PropTypes.Requireable<number>;
        let color: PropTypes.Requireable<string>;
        let variant: PropTypes.Requireable<string>;
        let overlap: PropTypes.Requireable<string>;
        let invisible: PropTypes.Requireable<boolean>;
        let showZero: PropTypes.Requireable<boolean>;
        let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let classes: PropTypes.Requireable<object>;
        let sx: PropTypes.Requireable<object>;
    }
}
import PropTypes from 'prop-types';
