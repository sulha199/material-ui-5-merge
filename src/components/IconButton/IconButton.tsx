import React from 'react';
import IconButtonM, { IconButtonProps } from '@mui/material/IconButton';
import IconTS from '@mui/material/Icon';
import { IconVarian } from '../Icon/icon-variants';

interface UXPinIconButtonProps extends IconButtonProps {
  /**
   * The icon element.
   * @uxpinpropname  Icon
   */
  icon: IconVarian;
  children?: never;
}

/**
 * @uxpindocurl https://mui.com/api/icon-button/#main-content
 */
function IconButton(props: UXPinIconButtonProps) {
  const { icon, size, ...moreProps } = props;
  return (
    <IconButtonM {...moreProps}>
      <IconTS fontSize={size}>{icon}</IconTS>
    </IconButtonM>
  );
}

export default IconButton;
