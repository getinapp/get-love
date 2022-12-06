import { colors } from '@getlove/tokens';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { ComponentProps, useEffect, useState } from 'react';

import * as S from './styles';

export interface ButtonRoundCheckProps extends ComponentProps<typeof S.Root> {
  label: string;
  labelDirection?: 'left' | 'right';
  fullWidth?: boolean;
}

export const ButtonRoundCheck = ({
  label,
  labelDirection = 'right',
  fullWidth = false,
  ...props
}: ButtonRoundCheckProps) => {
  const [checked, setChecked] = useState(!!props.checked);

  const labelElement = (
    <S.Label
      as='label'
      htmlFor={label}
      style='base-small-default'
      disabled={props.disabled}
    >
      {label}
    </S.Label>
  );

  useEffect(() => {
    setChecked(!!props.checked);
  }, [props.checked]);

  return (
    <S.Wrapper fullWidth={fullWidth} disabled={props.disabled}>
      {labelDirection === 'left' && labelElement}
      <S.Root
        id={label}
        {...props}
        checked={checked}
        onCheckedChange={() => setChecked(value => !value)}
      >
        {checked ? (
          <S.Indicator asChild>
            <CheckCircleIcon
              htmlColor={
                props.disabled
                  ? colors['mono-low-light']
                  : colors['brand-primary-pure']
              }
            />
          </S.Indicator>
        ) : (
          <CheckCircleOutlineOutlinedIcon htmlColor={colors['neutral-pure']} />
        )}
      </S.Root>
      {labelDirection === 'right' && labelElement}
    </S.Wrapper>
  );
};

ButtonRoundCheck.displayName = 'ButtonRoundCheck';
