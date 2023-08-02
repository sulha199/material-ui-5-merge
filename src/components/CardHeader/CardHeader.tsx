import React from 'react';
import CardHeaderM, { CardHeaderProps } from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButtonTS from '@mui/material/IconButton';

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
function CardHeader(props: UXPinCardHeaderProps) {
  const { action, avatar, color, children, iconOnClick, ...moreProps } = props;

  return (
    <CardHeaderM
      {...moreProps}
      avatar={avatar && <Avatar color={color}>{avatar}</Avatar>}
      action={action && <IconButtonTS onClick={iconOnClick}>{action}</IconButtonTS>}
    >
      {children}
    </CardHeaderM>
  );
}

export default CardHeader;
