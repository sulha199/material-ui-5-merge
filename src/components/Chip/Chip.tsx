import React from 'react';
import ChipM, {ChipProps as MChipProps} from '@mui/material/Chip';
import Icon from '../Icon/Icon';
import { IconVarian } from '../Icon/icon-variants';

export type ChipProps = MChipProps & {
  deletable?: boolean;
  deleteIcon?: IconVarian;
  icon?: IconVarian;
};

/**
 * @uxpindocurl https://mui.com/components/chips/
 */
export default function Chip(props: ChipProps) {
  const [chipDeleted, setChipDeleted] = React.useState(false);
  const { ...other } = props;

  const onDelete: ChipProps['onDelete'] = props.onDelete && ((e) => {
    if (props.deletable) {
      props.onDelete?.(e);
      setChipDeleted(true);
    }
  });
  return (
    <>
      {!chipDeleted ? (
        <ChipM
          {...other}
          onDelete={onDelete}
          avatar={props.avatar}
          icon={props.icon && <Icon>{props.icon}</Icon>}
          deleteIcon={props.deleteIcon && <Icon>{props.deleteIcon}</Icon>}
        />
      ) : null}
    </>
  );
}