import React from 'react';
import CardActionsM, { CardActionsProps } from '@mui/material/CardActions';

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
function CardActions(props: UXPinCardActionsprops) {
  const { children, ...moreProps } = props;

  return <CardActionsM {...moreProps}>{children}</CardActionsM>;
}

export default CardActions;
