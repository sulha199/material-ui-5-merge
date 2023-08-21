import React from 'react';
import PropTypes from 'prop-types';
import GridM, { GridProps as GridPropsM } from '@mui/material/Grid';

export type GridProps = {
  paddingTop: number;
  paddingBottom: number;
  paddingRight: number;
  paddingLeft: number;
} & GridPropsM;

/**
 * @uxpindocurl https://mui.com/api/grid/
 */
function Grid(props: GridProps) {
  // const space = Number(props.spacing);
  return (
    <GridM
      {...props}
      spacing={props.spacing}
      sx={{
        paddingTop: props.paddingTop + 'px',
        paddingBottom: props.paddingBottom + 'px',
        paddingRight: props.paddingRight + 'px',
        paddingLeft: props.paddingLeft + 'px',
      }}
    >
      {props.children}
    </GridM>
  );
}

export default Grid;
