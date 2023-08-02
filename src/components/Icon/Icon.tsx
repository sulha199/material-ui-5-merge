import React from 'react';
import IconM, { IconProps } from '@mui/material/Icon';
import { IconVarian } from './icon-variants';

interface UXPinIconProps extends IconProps {
  /**
   * The icon to display.
   * Use the name of the icon from https://material.io/tools/icons.
   * @uxpinpropname  Icon
   **/
  children: IconVarian;

  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @uxpinpropname Size
   */
  fontSize?: 'large' | 'medium' | 'small' | 'inherit';
}

/**
 * @uxpindocurl https://mui.com/api/icon/
 */
function Icon(props: UXPinIconProps) {
  const { children, ...moreProps } = props;
  return <IconM {...moreProps}>{children}</IconM>;
}

export default Icon;
