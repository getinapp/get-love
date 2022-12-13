import { ComponentProps, useState } from 'react';

import * as S from './styles';

export type RadioItem = {
  label: string;
  value: string;
};

export interface RadioGroupProps extends ComponentProps<typeof S.Wrapper> {
  labelDirection?: 'left' | 'right';
  items: RadioItem[];
}

export const RadioGroup = ({
  items,
  labelDirection = 'right',
  ...props
}: RadioGroupProps) => {
  const [value, setValue] = useState<string | undefined>(
    props.defaultValue || props.value
  );

  const handleSelectedValue = (newValue: string) => {
    if (!props.disabled && newValue !== value) setValue(newValue);
  };

  return (
    <S.Wrapper {...props} value={value}>
      {items.map(item => (
        <S.ItemWrapper key={item.value} disabled={!!props.disabled}>
          {labelDirection === 'left' && (
            <S.Label
              style='base-paragraph-default'
              as='label'
              htmlFor={item.label}
              disabled={!!props.disabled}
            >
              {item.label}
            </S.Label>
          )}

          <S.Item
            id={item.label}
            value={item.value}
            checked={item.value === value}
            disabled={!!props.disabled}
            onClick={() => handleSelectedValue(item.value)}
          >
            <S.Indicator
              checked={item.value === value}
              disabled={!!props.disabled}
            />
          </S.Item>

          {labelDirection === 'right' && (
            <S.Label
              style='base-paragraph-default'
              as='label'
              htmlFor={item.label}
              disabled={!!props.disabled}
            >
              {item.label}
            </S.Label>
          )}
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
};

RadioGroup.displayName = 'RadioGroup';
