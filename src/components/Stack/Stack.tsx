import * as React from 'react';
import PropTypes from 'prop-types';
import StackM, {StackProps} from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { DividerProps } from '@material-ui/core';
import { FlexboxProps } from '@mui/system';

type UxPinStackProps = StackProps & {
  hasDivider?: boolean;
  wrap?: FlexboxProps['flexWrap'];
};

/**
 * @uxpindocurl https://mui.com/components/stack/#main-content
 */
function Stack(props: UxPinStackProps) {
  let dividerOrientation: DividerProps['orientation'];

  if (props.direction === 'row' || props.direction === 'row-reverse') {
    dividerOrientation = 'vertical';
  } else {
    dividerOrientation = 'horizontal';
  }

  const { hasDivider, ...otherProps } = props;

  return (
    <StackM
      {...otherProps}
      divider={hasDivider && <Divider orientation={dividerOrientation} flexItem />}
      sx={{
        paddingTop: props.paddingTop + 'px',
        paddingBottom: props.paddingBottom + 'px',
        paddingRight: props.paddingRight + 'px',
        paddingLeft: props.paddingLeft + 'px',
        flexWrap: props.wrap,
      }}
    >
      {props.children}
    </StackM>
  );
}

export default Stack;
