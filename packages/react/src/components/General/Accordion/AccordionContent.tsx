import { ComponentProps, forwardRef } from 'react';

import * as S from './styles';

export const AccordionContent = forwardRef<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  ComponentProps<typeof S.Content>
>(({ children, ...props }, forwardedRef) => (
  <S.Content {...props} ref={forwardedRef}>
    <S.ContentText>{children}</S.ContentText>
  </S.Content>
));
