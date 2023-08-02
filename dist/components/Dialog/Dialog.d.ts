import { DialogProps } from '@mui/material/Dialog';
type UXPinDialogProps = Omit<DialogProps, 'onClose' | 'TransitionProps' | 'disablePortal' | 'style'>;
/**
 * @uxpinuseportal
 * @uxpindocurl https://mui.com/api/dialog/#main-content
 */
declare function Dialog(props: UXPinDialogProps): import("react/jsx-runtime").JSX.Element;
export default Dialog;
