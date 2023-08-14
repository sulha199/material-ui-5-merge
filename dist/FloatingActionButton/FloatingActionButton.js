import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FabM from '@mui/material/Fab';
import Icon from '../Icon/Icon';
/**
 * @uxpindocurl https://mui.com/api/fab/
 */
function FloatingActionButton(props) {
    let hasIcon = null;
    if (props.icon) {
        if (props.label) {
            hasIcon = _jsx(Icon, { sx: { mr: 1 }, children: props.icon });
        }
        else {
            hasIcon = _jsx(Icon, { children: props.icon });
        }
    }
    return (_jsxs(FabM, { ...props, children: [hasIcon, props.label] }));
}
export default FloatingActionButton;
//# sourceMappingURL=FloatingActionButton.js.map