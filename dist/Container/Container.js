import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import ContainerM from '@mui/material/Container';
/**
 * @uxpindocurl https://mui.com/api/container/
 */
export default function Container(props) {
    return (_jsx(React.Fragment, { children: _jsx(ContainerM, { ...props, children: props.children }) }));
}
//# sourceMappingURL=Container.js.map