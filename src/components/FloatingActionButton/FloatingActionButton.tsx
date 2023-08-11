import PropTypes from 'prop-types';
import FabM, { FabProps as FabPropsM } from '@mui/material/Fab';
import Icon from '../Icon/Icon';
import { IconVarian, iconVariants } from '../Icon/icon-variants';

export type FabProps = {
  icon?: IconVarian,
  label?: string,
} & Omit<FabPropsM, 'children'>;

/**
 * @uxpindocurl https://mui.com/api/fab/
 */
function FloatingActionButton(props: FabProps) {
  let hasIcon = null;

  if (props.icon) {
    if (props.label) {
      hasIcon = <Icon sx={{ mr: 1 }}>{props.icon}</Icon>;
    } else {
      hasIcon = <Icon>{props.icon}</Icon>;
    }
  }

  return (
    <FabM {...props}>
      {hasIcon}
      {props.label}
    </FabM>
  );
}

export default FloatingActionButton;
