import { jsx as _jsx } from "react/jsx-runtime";
import StackM from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
/**
 * @uxpindocurl https://mui.com/components/stack/#main-content
 */
function Stack(props) {
    let dividerOrientation;
    if (props.direction === 'row' || props.direction === 'row-reverse') {
        dividerOrientation = 'vertical';
    }
    else {
        dividerOrientation = 'horizontal';
    }
    const { hasDivider, ...otherProps } = props;
    return (_jsx(StackM, { ...otherProps, divider: hasDivider && _jsx(Divider, { orientation: dividerOrientation, flexItem: true }), children: props.children }));
}
export default Stack;
//# sourceMappingURL=Stack.js.map