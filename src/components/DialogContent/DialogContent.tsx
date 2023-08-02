import React from 'react';
import DialogContentM, { DialogContentProps } from '@mui/material/DialogContent';

/**
 * @uxpindocurl https://mui.com/api/dialog-content/
 */
function DialogContent(props: DialogContentProps) {
  const { children } = props;

  return <DialogContentM {...props}>{children}</DialogContentM>;
}

export default DialogContent;
