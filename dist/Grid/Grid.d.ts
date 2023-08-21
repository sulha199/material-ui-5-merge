import { GridProps as GridPropsM } from '@mui/material/Grid';
export type GridProps = {
    paddingTop: number;
    paddingBottom: number;
    paddingRight: number;
    paddingLeft: number;
} & GridPropsM;
/**
 * @uxpindocurl https://mui.com/api/grid/
 */
declare function Grid(props: GridProps): import("react/jsx-runtime").JSX.Element;
export default Grid;
