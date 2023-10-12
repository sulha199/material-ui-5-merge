import React, { FC } from 'react';
import PropTypes from 'prop-types';
import CircularProgressM, {CircularProgressProps} from '@mui/material/CircularProgress';
import {makeStyles} from "@mui/styles"

const circularProgressStyle = makeStyles({
  circularProgress: {
    width: 'fit-content'
  }
})

/**
 * @uxpindocurl https://mui.com/api/circular-progress/#main-content
 */
export const CircularProgress: FC<CircularProgressProps> = (props) => {
  const style = circularProgressStyle();
  return (
    <div className={style.circularProgress}>
      <CircularProgressM {...props} />
    </div>
  );
}

export default CircularProgress;
