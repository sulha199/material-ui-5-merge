import TypographyM, { TypographyProps } from '@mui/material/Typography'
import { OverridableStringUnion } from '@mui/types'
import { FC } from 'react'

export type TextColor = OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'error', {}> | TypographyProps['color']

export const Typography: FC<TypographyProps & {
  color?: TextColor
}> = (props) => <TypographyM {...props} >{props.children}</TypographyM>

export default Typography;