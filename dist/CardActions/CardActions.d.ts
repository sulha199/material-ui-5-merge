import React from 'react';
import { CardActionsProps } from '@mui/material/CardActions';
interface UXPinCardActionsprops extends CardActionsProps {
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
 * @uxpindocurl https://mui.com/api/card-actions/
 */
declare function CardActions(props: UXPinCardActionsprops): import("react/jsx-runtime").JSX.Element;
export default CardActions;
