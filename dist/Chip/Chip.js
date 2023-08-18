import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import ChipM from '@mui/material/Chip';
import Icon from '../Icon/Icon';
/**
 * @uxpindocurl https://mui.com/components/chips/
 */
export default function Chip(props) {
    const [chipDeleted, setChipDeleted] = React.useState(false);
    const { ...other } = props;
    const onDelete = (e) => {
        if (props.deletable) {
            props.onDelete?.(e);
            setChipDeleted(true);
        }
    };
    return (_jsx(_Fragment, { children: !chipDeleted ? (_jsx(ChipM, { ...other, onDelete: onDelete, avatar: props.avatar, icon: props.icon && _jsx(Icon, { children: props.icon }), deleteIcon: props.deleteIcon && _jsx(Icon, { children: props.deleteIcon }) })) : null }));
}
//# sourceMappingURL=Chip.js.map