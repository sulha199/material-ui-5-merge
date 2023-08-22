import * as React from 'react';
import Button from '@mui/material/Button';
import OriginalSnackbar, {SnackbarCloseReason, SnackbarProps as SnackbarPropsM} from '@mui/material/Snackbar';

import IconButton from '../IconButton/IconButton';

type SnackBarprops = SnackbarPropsM & {
  vertical?: 'top' | 'bottom',
  horizontal?: 'left' |  'center' | 'right',
  undo?: boolean,
  uxpinRef?: React.Ref<any>;
};

/**
 * @uxpindocurl https://mui.com/material-ui/react-snackbar/
 * @uxpinuseportal
 */
export default function Snackbar(props: SnackBarprops) {
  const { horizontal = 'left', open, sx, undo, uxpinRef, vertical = 'bottom', onClose, ...other } = props;

  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]); // Only re-run the effect if open prop changes

  const handleClose = (event: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      // prevents from closing in the UXPin Editor when switching props
      return;
    }

    onClose?.(event, reason);

    setIsOpen(false);
  };

  const anchorOrigin = { vertical, horizontal };
  
  const action = (
    <>
      {undo && (
        <Button color="primary" size="small" onClick={() => setIsOpen(false)}>
          Undo
        </Button>
      )}
      <IconButton size="small" aria-label="close" color="inherit" onClick={() => setIsOpen(false)} icon="close" />
    </>
  );

  return (
    <OriginalSnackbar
      {...other}
      onClose={handleClose}
      open={isOpen}
      anchorOrigin={anchorOrigin}
      action={action}
      ref={uxpinRef}
    />
  );
}
