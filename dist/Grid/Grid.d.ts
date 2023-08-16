import { GridProps } from '@mui/material/Grid';
type UxGridProps = {
    paddingTop: number;
    paddingBottom: number;
    paddingRight: number;
    paddingLeft: number;
} & GridProps;
/**
 * @uxpindocurl https://mui.com/api/grid/
 */
declare function Grid(props: UxGridProps): import("react/jsx-runtime").JSX.Element;
export default Grid;
