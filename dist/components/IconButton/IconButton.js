import { jsx as _jsx } from "react/jsx-runtime";
import IconButtonM from '@mui/material/IconButton';
import IconTS from '@mui/material/Icon';
/**
 * @uxpindocurl https://mui.com/api/icon-button/#main-content
 */
function IconButton(props) {
    const { children, size, ...moreProps } = props;
    return (_jsx(IconButtonM, { ...moreProps, children: _jsx(IconTS, { fontSize: size, children: children }) }));
}
export default IconButton;
//# sourceMappingURL=IconButton.js.map