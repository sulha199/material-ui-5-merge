import * as React from 'react';
import PropTypes from 'prop-types';
import ContainerM, { ContainerProps } from '@mui/material/Container';

/**
 * @uxpindocurl https://mui.com/api/container/
 */
export default function Container(props: ContainerProps) {
  return (
    <React.Fragment>
      <ContainerM {...props}>{props.children}</ContainerM>
    </React.Fragment>
  );
}
