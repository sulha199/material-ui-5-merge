/// <reference types="react" />
import { BoxProps as MBoxProps } from '@mui/material/Box';
export type BoxProps<RefType> = MBoxProps & {
    uxpinRef?: React.Ref<RefType>;
};
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
/**
 * @uxpindocurl https://mui.com/components/box/#main-content
 */
declare function Box<RefType>(props: BoxProps<RefType>): import("react/jsx-runtime").JSX.Element;
export default Box;
