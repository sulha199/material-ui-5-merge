import React from 'react';
import PropTypes from 'prop-types';
import TextFieldM, { TextFieldProps as TextFieldMProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Icon from '../Icon/Icon';
import { IconVarian, iconVariants } from '../Icon/icon-variants';

export type TextFieldProps = TextFieldMProps & {
  startAdornment?: IconVarian, 
  endAdornment?: IconVarian, 
}

/**
 * @uxpindocurl https://mui.com/api/text-field/
 */
function TextField(props: TextFieldProps) {
  const { startAdornment, endAdornment, ...other } = props;

  return (
    <TextFieldM
      {...other}
      InputProps={{
        startAdornment: props.startAdornment && (
          <InputAdornment position="start">
            <Icon>{startAdornment as any}</Icon>
          </InputAdornment>
        ),
        endAdornment: props.endAdornment && (
          <InputAdornment position="end">
            <Icon>{endAdornment as any}</Icon>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default TextField;
