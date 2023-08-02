import React from 'react';
import CardContentM, { CardContentProps } from '@mui/material/CardContent';

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
function CardContent(props: UXPinCardContentProps) {
  const { children, ...moreProps } = props;

  return <CardContentM {...moreProps}>{children}</CardContentM>;
}

export default CardContent;
