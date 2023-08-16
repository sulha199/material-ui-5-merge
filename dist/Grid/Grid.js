import { jsx as _jsx } from "react/jsx-runtime";
import GridM from '@mui/material/Grid';
/**
 * @uxpindocurl https://mui.com/api/grid/
 */
function Grid(props) {
    // const space = Number(props.spacing);
    return (_jsx(GridM, { ...props, spacing: props.spacing, sx: {
            paddingTop: props.paddingTop + 'px',
            paddingBottom: props.paddingBottom + 'px',
            paddingRight: props.paddingRight + 'px',
            paddingLeft: props.paddingLeft + 'px',
        }, children: props.children }));
}
export default Grid;
//# sourceMappingURL=Grid.js.map