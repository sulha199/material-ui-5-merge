import React from 'react';
import DialogM, { DialogProps } from '@mui/material/Dialog';

type UXPinDialogProps = Omit<DialogProps, 'onClose' | 'TransitionProps' | 'disablePortal' | 'style'>;

/**
 * @uxpinuseportal
 * @uxpindocurl https://mui.com/api/dialog/#main-content
 */

function Dialog(props: UXPinDialogProps) {
  const [open, setOpen] = React.useState(props.open);
  const { children } = props;

  React.useEffect(() => setOpen(props.open), [props]);

  return (
    <DialogM
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      TransitionProps={{ tabIndex: undefined }}
      disablePortal={true}
      style={{ minWidth: '300px', minHeight: '300px', width: '100%', height: '100%' }}
    >
      {children}
    </DialogM>
  );
}

export default Dialog;
