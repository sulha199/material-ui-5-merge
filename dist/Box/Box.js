import { jsx as _jsx } from "react/jsx-runtime";
import BoxM from '@mui/material/Box';
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
/**
 * @uxpindocurl https://mui.com/components/box/#main-content
 */
function Box(props) {
    const { uxpinRef, ...other } = props;
    return (_jsx(BoxM, { ref: uxpinRef, height: "100%", ...other, children: !props.children ? (_jsx("span", { children: _jsx("center", { children: _jsx("p", { children: "Drag components into this wrapper" }) }) })) : (props.children) }));
}
export default Box;
//# sourceMappingURL=Box.js.map