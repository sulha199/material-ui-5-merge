import { StackProps } from '@mui/material/Stack';
import { FlexboxProps } from '@mui/system';
type UxPinStackProps = StackProps & {
    hasDivider?: boolean;
    wrap?: FlexboxProps['flexWrap'];
};
/**
 * @uxpindocurl https://mui.com/components/stack/#main-content
 */
declare function Stack(props: UxPinStackProps): import("react/jsx-runtime").JSX.Element;
export default Stack;
