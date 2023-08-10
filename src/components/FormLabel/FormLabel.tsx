import React from 'react';
import PropTypes from 'prop-types';
import FormLabelM, {FormLabelProps} from '@mui/material/FormLabel';

/**
 * @uxpindocurl https://mui.com/api/form-label/
 */
function FormLabel(props: FormLabelProps) {
  return <FormLabelM {...props}>{props.children}</FormLabelM>;
}

export default FormLabel;
