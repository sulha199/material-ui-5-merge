import { jsx as _jsx } from "react/jsx-runtime";
function Image(props) {
    return (_jsx("img", { alt: props.alt, src: props.src, height: props.height, width: props.width, style: { objectFit: props.objectFit, height: props.height, width: props.width, ...props.style } }));
}
export default Image;
//# sourceMappingURL=Image.js.map