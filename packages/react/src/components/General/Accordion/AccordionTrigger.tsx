import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import type { ComponentProps } from 'react';
import React, { forwardRef } from 'react';

import * as S from './styles';

export const AccordionTrigger = forwardRef<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  ComponentProps<typeof S.Trigger>
>(({ children, ...props }, forwardedRef) => (
  <S.Header>
    <S.Trigger {...props} ref={forwardedRef}>
      {children}
      <ArrowDropDownOutlinedIcon aria-hidden />
    </S.Trigger>
  </S.Header>
));
