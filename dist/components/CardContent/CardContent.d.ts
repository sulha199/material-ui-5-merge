import React from 'react';
import { CardContentProps } from '@mui/material/CardContent';
interface UXPinCardContentProps extends CardContentProps {
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
 * @uxpindocurl https://mui.com/api/card-content/
 */
declare function CardContent(props: UXPinCardContentProps): import("react/jsx-runtime").JSX.Element;
export default CardContent;
