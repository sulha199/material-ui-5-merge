import { IconProps } from '@mui/material/Icon';
declare enum iconOptions {
    ADD = "add",
    CAMERA = "camera",
    FACE = "face",
    LOCK = "lock",
    PHOTO = "photo"
}
interface UXPinIconProps extends IconProps {
    /**
     * The icon to display.
     * Use the name of the icon from https://material.io/tools/icons.
     * @uxpinpropname  Icon
     **/
    children: iconOptions;
    /**
     * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
     * @uxpinpropname Size
     */
    fontSize?: 'large' | 'medium' | 'small' | 'inherit';
}
/**
 * @uxpindocurl https://mui.com/api/icon/
 */
declare function Icon(props: UXPinIconProps): import("react/jsx-runtime").JSX.Element;
export default Icon;
