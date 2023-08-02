import React from 'react';
import IconButtonM, { IconButtonProps } from '@mui/material/IconButton';
import IconTS from '@mui/material/Icon';

interface UXPinIconButtonProps extends IconButtonProps {
  /**
   * The icon element.
   * @uxpinpropname  Icon
   */
  children: 'add' | 'camera' | 'face' | 'lock' | 'photo';

  size: 'small' | 'medium' | 'large';
}

/**
 * @uxpindocurl https://mui.com/api/icon-button/#main-content
 */
function IconButton(props: UXPinIconButtonProps) {
  const { children, size, ...moreProps } = props;
  return (
    <IconButtonM {...moreProps}>
      <IconTS fontSize={size}>{children}</IconTS>
    </IconButtonM>
  );
}

export default IconButton;
