import React from 'react';
import DialogContentTextM, { DialogContentTextProps } from '@mui/material/DialogContentText';

/**
 * @uxpindocurl https://mui.com/api/dialog-content-text/
 */
function DialogContentText(props: DialogContentTextProps) {
  const { children } = props;

  return <DialogContentTextM {...props}>{children}</DialogContentTextM>;
}

export default DialogContentText;
