import InputLabelM, { InputLabelProps } from '@mui/material/InputLabel';

/**
 * @uxpindocurl https://mui.com/api/input-label/#main-content
 */
function InputLabel(props: InputLabelProps) {
  return <InputLabelM {...props}>{props.children}</InputLabelM>;
}

export default InputLabel;
