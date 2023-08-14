import { jsx as _jsx } from "react/jsx-runtime";
import TextFieldM from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Icon from '../Icon/Icon';
/**
 * @uxpindocurl https://mui.com/api/text-field/
 */
function TextField(props) {
    const { startAdornment, endAdornment, ...other } = props;
    return (_jsx(TextFieldM, { ...other, InputProps: {
            startAdornment: props.startAdornment && (_jsx(InputAdornment, { position: "start", children: _jsx(Icon, { children: startAdornment }) })),
            endAdornment: props.endAdornment && (_jsx(InputAdornment, { position: "end", children: _jsx(Icon, { children: endAdornment }) })),
        } }));
}
export default TextField;
//# sourceMappingURL=TextField.js.map