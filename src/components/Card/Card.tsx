import React from 'react';
import CardM, { CardProps } from '@mui/material/Card';

interface UXPinCardProps extends CardProps {
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

  /**
   * If true, the card will use raised styling.
   * @uxpinignoreprop
   */
  raised: boolean;
}

/**
 * @uxpindocurl https://mui.com/api/card/
 */
function Card(props: UXPinCardProps) {
  const { children, ...moreProps } = props;
  return <CardM {...moreProps}>{children}</CardM>;
}

export default Card;
