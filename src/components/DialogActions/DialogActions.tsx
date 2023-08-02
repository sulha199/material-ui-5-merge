import React from 'react';
import DialogActionsM, { DialogActionsProps } from '@mui/material/DialogActions';

/**
 * @uxpindocurl https://mui.com/api/dialog-actions/
 */
function DialogActions(props: DialogActionsProps) {
  const { children } = props;

  return <DialogActionsM {...props}>{children}</DialogActionsM>;
}

export default DialogActions;
