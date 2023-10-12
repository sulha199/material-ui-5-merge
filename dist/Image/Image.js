import { jsx as _jsx } from "react/jsx-runtime";
import { makeStyles } from "@mui/styles";
const imageClasses = makeStyles({ root: {
        objectFit: props => props.objectFit,
        height: props => props.height,
        width: props => props.width,
    } });
function Image(props) {
    const classes = imageClasses(props);
    return (_jsx("img", { alt: props.alt, src: props.src, height: props.height, width: props.width, className: classes.root, style: { ...props.style } }));
}
export default Image;
//# sourceMappingURL=Image.js.map