import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import AlertM, { AlertProps as MAlertProps } from '@mui/material/Alert';
import IconButton from '../IconButton/IconButton';
import Icon from '../Icon/Icon';
import { IconVarian, iconVariants } from '../Icon/icon-variants';
import Collapse from '@mui/material/Collapse';
import AlertTitle from '../AlertTitle/AlertTitle';

export type AlertProps = Omit<MAlertProps, 'action'> & {
  isOpen?: boolean;
  icon?: IconVarian;
  hasClose?: boolean;
  /** Icon for action button */
  action?: IconVarian;
};

/**
 * @uxpindocurl https://mui.com/api/alert/
 */
function Alert(props: AlertProps) {
  const [open, setOpen] = React.useState(props.isOpen ?? true);

  React.useEffect(() => {
    setOpen(props.isOpen ?? true);
  }, [props.isOpen]); // Only re-run the effect if value prop changes

  const { icon, title, ...otherProps } = props;
  return (
    <Collapse in={open}>
      <AlertM
        {...otherProps}
        icon={icon ? <Icon fontSize="inherit">{icon}</Icon> : false}
        action={
          (props.hasClose ?? true) && (
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
              icon={props.action || 'close'}
            />
          )
        }
        sx={{ mb: 2 }}
      >
        {title ? <AlertTitle>{title}</AlertTitle> : null}
        {props.children}
      </AlertM>
    </Collapse>
  );
}

export default Alert;
