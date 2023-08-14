import { TextFieldProps as TextFieldMProps } from '@mui/material/TextField';
import { IconVarian } from '../Icon/icon-variants';
export type TextFieldProps = TextFieldMProps & {
    startAdornment?: IconVarian;
    endAdornment?: IconVarian;
};
/**
 * @uxpindocurl https://mui.com/api/text-field/
 */
declare function TextField(props: TextFieldProps): import("react/jsx-runtime").JSX.Element;
export default TextField;
