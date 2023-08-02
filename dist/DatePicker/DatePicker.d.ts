export default DatePicker;
/**
 * @uxpindocurl https://mui.com/api/date-picker/
 */
declare function DatePicker(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace DatePicker {
    namespace propTypes {
        let label: PropTypes.Requireable<string>;
        let helperText: PropTypes.Requireable<string>;
        let value: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let showToolbar: PropTypes.Requireable<boolean>;
        let toolbarTitle: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let toolbarPlaceholder: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let views: PropTypes.Requireable<object>;
        let open: PropTypes.Requireable<boolean>;
        let orientation: PropTypes.Requireable<string>;
        let disabled: PropTypes.Requireable<boolean>;
        let readOnly: PropTypes.Requireable<boolean>;
        let renderInput: PropTypes.Requireable<(...args: any[]) => any>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let onAccept: PropTypes.Requireable<(...args: any[]) => any>;
        let onError: PropTypes.Requireable<(...args: any[]) => any>;
        let onOpen: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from 'prop-types';
