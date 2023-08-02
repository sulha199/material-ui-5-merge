import { jsx as _jsx } from "react/jsx-runtime";
import CardM from '@mui/material/Card';
/**
 * @uxpindocurl https://mui.com/api/card/
 */
function Card(props) {
    const { children, ...moreProps } = props;
    return _jsx(CardM, { ...moreProps, children: children });
}
export default Card;
//# sourceMappingURL=Card.js.map