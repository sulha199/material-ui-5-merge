import { IconButtonProps } from '@mui/material/IconButton';
import { IconVarian } from '../Icon/icon-variants';
interface UXPinIconButtonProps extends IconButtonProps {
    /**
     * The icon element.
     * @uxpinpropname  Icon
     */
    icon: IconVarian;
    children?: never;
}
/**
 * @uxpindocurl https://mui.com/api/icon-button/#main-content
 */
declare function IconButton(props: UXPinIconButtonProps): import("react/jsx-runtime").JSX.Element;
export default IconButton;
