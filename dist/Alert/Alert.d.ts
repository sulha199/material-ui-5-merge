import { AlertProps as MAlertProps } from '@mui/material/Alert';
import { IconVarian } from '../Icon/icon-variants';
export type AlertProps = Omit<MAlertProps, 'action'> & {
    isOpen?: boolean;
    icon?: IconVarian;
    hasClose?: boolean;
    /** Icon for action button */
    action?: IconVarian;
};
/**
 * @uxpindocurl https://mui.com/api/alert/
 */
declare function Alert(props: AlertProps): import("react/jsx-runtime").JSX.Element;
export default Alert;
