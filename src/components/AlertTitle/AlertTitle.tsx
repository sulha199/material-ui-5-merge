import AlertTitleM, { AlertTitleProps } from '@mui/material/AlertTitle';

/**
 * @uxpindocurl https://mui.com/api/alert-title/
 */
function AlertTitle(props: AlertTitleProps) {
  return <AlertTitleM {...props}>{props.children}</AlertTitleM>;
}

export default AlertTitle;
