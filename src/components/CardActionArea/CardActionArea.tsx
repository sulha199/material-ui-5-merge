import React from 'react';
import CardActionAreaM, { CardActionAreaProps } from '@mui/material/CardActionArea';

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
function CardActionArea(props: UXPinCardActionProps) {
  const { children, ...moreProps } = props;
  return <CardActionAreaM {...moreProps}>{children}</CardActionAreaM>;
}

export default CardActionArea;
