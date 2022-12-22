import type { ComponentProps } from 'react';
import React from 'react';

import * as S from './styles';

export interface CheckboxProps extends ComponentProps<typeof S.Root> {
  label: string;
  labelDirection?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Checkbox = ({
  label,
  labelDirection = 'right',
  fullWidth = false,
  ...props
}: CheckboxProps) => {
  const labelElement = (
    <S.Label
      as='label'
      htmlFor={label}
      style='base-paragraph-default'
      disabled={props.disabled}
    >
      {label}
    </S.Label>
  );

  return (
    <S.Wrapper fullWidth={fullWidth} disabled={props.disabled}>
      {labelDirection === 'left' && labelElement}
      <S.Root id={label} {...props}>
        <S.Indicator asChild>
          <S.Checked disabled={!!props.disabled} />
        </S.Indicator>
      </S.Root>
      {labelDirection === 'right' && labelElement}
    </S.Wrapper>
  );
};

Checkbox.displayName = 'Checkbox';
