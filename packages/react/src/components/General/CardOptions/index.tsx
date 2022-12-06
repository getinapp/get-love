import { ComponentProps, useState } from 'react';

import type { Colors } from '../../../@types';
import * as S from './styles';

export type CardItem = {
  title: string;
  description: string;
};

export interface CardOptionsProps extends ComponentProps<typeof S.Wrapper> {
  parentBgColor?: Colors | 'transparent';
  items: CardItem[];
}

export const CardOptions = ({
  parentBgColor = '$mono-high-lightest',
  items,
  ...props
}: CardOptionsProps) => {
  const [value, setValue] = useState<string | undefined>(
    props.defaultValue || props.value
  );

  const handleSelectedValue = (newValue: string) => {
    if (!props.disabled && newValue !== value) setValue(newValue);
  };

  return (
    <S.Wrapper {...props} value={value}>
      {items.map(item => (
        <S.ItemWrapper
          key={item.title}
          checked={item.title === value}
          disabled={!!props.disabled}
          onClick={() => handleSelectedValue(item.title)}
          css={{ backgroundColor: parentBgColor }}
        >
          <S.Item
            id={item.title}
            value={item.title}
            checked={item.title === value}
            disabled={!!props.disabled}
          >
            <S.Indicator checked={item.title === value} />
          </S.Item>

          <S.InfoWrapper disabled={!!props.disabled}>
            <S.Title as='label' style='base-paragraph-bold'>
              {item.title}
            </S.Title>

            <S.Description
              as='p'
              style='base-small-default'
              checked={item.title === value}
            >
              {item.description}
            </S.Description>
          </S.InfoWrapper>
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
};

CardOptions.displayName = 'CardOptions';
