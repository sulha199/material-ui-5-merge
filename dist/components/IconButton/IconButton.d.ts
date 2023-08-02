import { IconButtonProps } from '@mui/material/IconButton';
interface UXPinIconButtonProps extends IconButtonProps {
    /**
     * The icon element.
     * @uxpinpropname  Icon
     */
    children: 'add' | 'camera' | 'face' | 'lock' | 'photo';
    size: 'small' | 'medium' | 'large';
}
/**
 * @uxpindocurl https://mui.com/api/icon-button/#main-content
 */
declare function IconButton(props: UXPinIconButtonProps): import("react/jsx-runtime").JSX.Element;
export default IconButton;
