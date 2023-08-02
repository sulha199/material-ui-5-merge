import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DialogTitleM from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
/**
 * @uxpindocurl https://mui.com/api/dialog-title/
 */
function DialogTitle(props) {
    const { children, hasClose, onClick } = props;
    return (_jsxs(DialogTitleM, { ...props, children: [children, hasClose ? (_jsx(IconButton, { "aria-label": "close", onClick: onClick, sx: {
                    position: 'absolute',
                    right: 8,
                    top: 8,
                }, children: "close" })) : null] }));
}
export default DialogTitle;
//# sourceMappingURL=DialogTitle.js.map