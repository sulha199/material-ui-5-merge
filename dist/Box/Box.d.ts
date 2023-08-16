/// <reference types="react" />
import { BoxProps } from '@mui/material/Box';
type UxPinBoxProps<RefType> = BoxProps & {
    uxpinRef?: React.Ref<RefType>;
};
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
/**
 * @uxpindocurl https://mui.com/components/box/#main-content
 */
declare function Box<RefType>(props: UxPinBoxProps<RefType>): import("react/jsx-runtime").JSX.Element;
export default Box;
