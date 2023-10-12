import React from 'react';
import TypographyM, { TypographyProps } from '@mui/material/Typography';

/**
 * @uxpindocurl https://mui.com/api/typography/
 */
function Typography(props: TypographyProps) {
  const { children, ...moreProps } = props;

  return (
    <TypographyM {...moreProps}>
      {children}
    </TypographyM>
  );
}

export default Typography;
