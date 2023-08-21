import React from 'react';
import DialogM, { DialogProps as MDialogProps } from '@mui/material/Dialog';

export type DialogProps = MDialogProps;

/**
 * @uxpinuseportal
 * @uxpindocurl https://mui.com/api/dialog/#main-content
 */

function Dialog(props: DialogProps) {
  const [open, setOpen] = React.useState(props.open);
  const { children, onClose, disablePortal, TransitionProps, style } = props;

  React.useEffect(() => setOpen(props.open), [props]);

  return (
    <DialogM
      {...props}
      open={open}
      onClose={(e, reason) => {
        setOpen(false);
        onClose?.(e, reason);
      }}
      TransitionProps={{ tabIndex: undefined, ...TransitionProps }}
      disablePortal={disablePortal ?? true}
      style={{ minWidth: '300px', minHeight: '300px', width: '100%', height: '100%', ...style }}
    >
      {children}
    </DialogM>
  );
}

export default Dialog;
