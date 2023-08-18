import { ChipProps as MChipProps } from '@mui/material/Chip';
import { IconVarian } from '../Icon/icon-variants';
type ChipProps = MChipProps & {
    deletable?: boolean;
    deleteIcon?: IconVarian;
    icon?: IconVarian;
};
/**
 * @uxpindocurl https://mui.com/components/chips/
 */
export default function Chip(props: ChipProps): import("react/jsx-runtime").JSX.Element;
export {};
