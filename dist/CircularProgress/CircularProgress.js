import { jsx as _jsx } from "react/jsx-runtime";
import CircularProgressM from '@mui/material/CircularProgress';
import { makeStyles } from "@mui/styles";
const circularProgressStyle = makeStyles({
    circularProgress: {
        width: 'fit-content'
    }
});
/**
 * @uxpindocurl https://mui.com/api/circular-progress/#main-content
 */
export const CircularProgress = (props) => {
    const style = circularProgressStyle();
    return (_jsx("div", { className: style.circularProgress, children: _jsx(CircularProgressM, { ...props }) }));
};
export default CircularProgress;
//# sourceMappingURL=CircularProgress.js.map