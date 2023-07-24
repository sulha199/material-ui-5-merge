import { Box, SxProps, Theme } from "@mui/system";
import React from "react";
import { FC, ReactNode } from "react";

export interface DivProps {
  sx?:  SxProps<Theme>,
  children?: ReactNode;
  className?: string
}

export const Div:FC<DivProps> = ({ sx, children, className }) => {
  return <Box className={className} sx={sx}>
      {children}
    </Box>
}

export default Div;
