import { CardHeaderProps } from '@mui/material/CardHeader';
interface UXPinCardHeaderProps extends CardHeaderProps {
    /**
     * @uxpinpropname Icon Action
     */
    action: 'add' | 'camera' | 'face' | 'lock' | 'photo';
    /**
     * Override or extend the styles applied to the component.
     * @uxpinignoreprop
     */
    classes: object;
    /**
     * These props will be forwarded to the title (as long as disableTypography is not true).
     * @uxpinignoreprop
     */
    titleTypographyProps: object;
    /**
     * These props will be forwarded to the subheader (as long as disableTypography is not true).
     * @uxpinignoreprop
     */
    subheaderTypograhyProps: object;
    iconOnClick(): any;
}
/**
 * @uxpindocurl https://mui.com/api/card-header/
 */
declare function CardHeader(props: UXPinCardHeaderProps): import("react/jsx-runtime").JSX.Element;
export default CardHeader;
