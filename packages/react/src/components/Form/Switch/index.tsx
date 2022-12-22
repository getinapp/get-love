import type { ComponentProps, MouseEvent } from 'react';
import { useEffect, useState } from 'react';

import * as S from './styles';

export interface SwitchProps extends ComponentProps<typeof S.Switch> {
  label?: string;
  labelDirection?: 'left' | 'right';
  small?: boolean;
}

export const Switch = ({
  label,
  labelDirection = 'right',
  small = false,
  ...props
}: SwitchProps) => {
  const [checked, setChecked] = useState<boolean>(
    !!props.checked || !!props.defaultChecked
  );

  const id = label ? label.toLowerCase().replaceAll(' ', '-') : '';
  const labelElement = (
    <S.Label
      as='label'
      htmlFor={id}
      style={small ? 'base-small-default' : 'base-paragraph-default'}
      disabled={!!props.disabled}
    >
      {label}
    </S.Label>
  );

  const handleChecked = (e: MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) props.onClick(e);
    setChecked(state => !state);
  };

  useEffect(() => {
    setChecked(!!props.checked);
  }, [props.checked]);

  return (
    <S.Wrapper disabled={!!props.disabled}>
      {!!label && labelDirection === 'left' && labelElement}

      <S.Switch
        {...props}
        small={small}
        id={id}
        checked={checked}
        onClick={handleChecked}
      >
        <S.Thumb small={small} />
      </S.Switch>

      {!!label && labelDirection === 'right' && labelElement}
    </S.Wrapper>
  );
};

Switch.displayName = 'Switch';
