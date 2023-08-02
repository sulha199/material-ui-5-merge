import * as React from 'react';
import { ToggleButtonProps } from '@mui/material/ToggleButton';
interface UXPinToggleButtonProps extends ToggleButtonProps {
    /**
     * @uxpinbind onChange 1
     */
    selected: boolean;
    onChange?: (event: React.MouseEvent<HTMLElement>, value: any) => void;
}
/**
 * @uxpindocurl https://mui.com/api/toggle-button/
 */
declare function ToggleButton(props: UXPinToggleButtonProps): import("react/jsx-runtime").JSX.Element;
export default ToggleButton;
