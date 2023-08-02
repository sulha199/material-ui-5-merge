import React from 'react';
import { CardActionAreaProps } from '@mui/material/CardActionArea';
interface UXPinCardActionProps extends CardActionAreaProps {
    /**
     * The content of the component.
     * @uxpinignoreprop
     */
    children: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     * @uxpinignoreprop
     */
    classes: object;
}
/**
 * @uxpindocurl https://mui.com/api/card-action-area/
 */
declare function CardActionArea(props: UXPinCardActionProps): import("react/jsx-runtime").JSX.Element;
export default CardActionArea;
