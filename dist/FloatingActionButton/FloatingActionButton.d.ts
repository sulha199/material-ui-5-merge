import { FabProps as FabPropsM } from '@mui/material/Fab';
import { IconVarian } from '../Icon/icon-variants';
export type FabProps = {
    icon?: IconVarian;
    label?: string;
} & Omit<FabPropsM, 'children'>;
/**
 * @uxpindocurl https://mui.com/api/fab/
 */
declare function FloatingActionButton(props: FabProps): import("react/jsx-runtime").JSX.Element;
export default FloatingActionButton;
