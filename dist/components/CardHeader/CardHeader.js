import { jsx as _jsx } from "react/jsx-runtime";
import CardHeaderM from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButtonTS from '@mui/material/IconButton';
/**
 * @uxpindocurl https://mui.com/api/card-header/
 */
function CardHeader(props) {
    const { action, avatar, color, children, iconOnClick, ...moreProps } = props;
    return (_jsx(CardHeaderM, { ...moreProps, avatar: avatar && _jsx(Avatar, { color: color, children: avatar }), action: action && _jsx(IconButtonTS, { onClick: iconOnClick, children: action }), children: children }));
}
export default CardHeader;
//# sourceMappingURL=CardHeader.js.map