import React from 'react';
import DialogTitleM, { DialogTitleProps } from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

interface UXPinDialogTitleProps extends DialogTitleProps {
  hasClose: boolean;
}

/**
 * @uxpindocurl https://mui.com/api/dialog-title/
 */
function DialogTitle(props: UXPinDialogTitleProps) {
  const { children, hasClose, onClick } = props;

  return (
    <DialogTitleM {...props}>
      {children}
      {hasClose ? (
        <IconButton
          aria-label="close"
          onClick={onClick}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          close
        </IconButton>
      ) : null}
    </DialogTitleM>
  );
}

export default DialogTitle;
