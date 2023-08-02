import { jsx as _jsx } from "react/jsx-runtime";
import IconM from '@mui/material/Icon';
var iconOptions;
(function (iconOptions) {
    iconOptions["ADD"] = "add";
    iconOptions["CAMERA"] = "camera";
    iconOptions["FACE"] = "face";
    iconOptions["LOCK"] = "lock";
    iconOptions["PHOTO"] = "photo";
})(iconOptions || (iconOptions = {}));
/**
 * @uxpindocurl https://mui.com/api/icon/
 */
function Icon(props) {
    const { children, ...moreProps } = props;
    return _jsx(IconM, { ...moreProps, children: children });
}
export default Icon;
//# sourceMappingURL=Icon.js.map