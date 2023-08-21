import { StackProps as StackPropsM } from '@mui/material/Stack';
import { FlexboxProps } from '@mui/system';
export type StackProps = StackPropsM & {
    hasDivider?: boolean;
    wrap?: FlexboxProps['flexWrap'];
};
/**
 * @uxpindocurl https://mui.com/components/stack/#main-content
 */
declare function Stack(props: StackProps): import("react/jsx-runtime").JSX.Element;
export default Stack;
