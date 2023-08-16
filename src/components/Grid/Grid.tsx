import React from 'react';
import PropTypes from 'prop-types';
import GridM, { GridProps } from '@mui/material/Grid';

type UxGridProps = {
  paddingTop: number;
  paddingBottom: number;
  paddingRight: number;
  paddingLeft: number;
} & GridProps;

/**
 * @uxpindocurl https://mui.com/api/grid/
 */
function Grid(props: UxGridProps) {
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
