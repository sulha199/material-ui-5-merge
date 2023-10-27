import { TypographyProps } from '@mui/material/Typography';
import { OverridableStringUnion } from '@mui/types';
import { FC } from 'react';
export type TextColor = OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'error', {}> | TypographyProps['color'];
export declare const Typography: FC<TypographyProps & {
    color?: TextColor;
}>;
export default Typography;
