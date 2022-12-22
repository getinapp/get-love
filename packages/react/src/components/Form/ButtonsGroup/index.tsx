import type { ComponentProps } from 'react';

import * as S from './styles';

export type ButtonsGroupItem = {
  label: string;
  value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  disabled?: boolean;
};

export type ButtonsGroupProps = ComponentProps<typeof S.Root> & {
  items: ButtonsGroupItem[];
};

export const ButtonsGroup = ({ items, ...props }: ButtonsGroupProps) => {
  const widthLevel =
    (items.length >= 11 && 11) ||
    (items.length === 10 && 10) ||
    (items.length === 9 && 9) ||
    (items.length === 8 && 8) ||
    (items.length === 7 && 7) ||
    (items.length === 6 && 6) ||
    (items.length === 5 && 5) ||
    (items.length === 4 && 4) ||
    (items.length === 3 && 3) ||
    (items.length === 2 && 2) ||
    2;

  return (
    <S.Root aria-label='buttons-group' {...props}>
      {items.map(item => (
        <S.Item
          key={item.label}
          value={String(item.value)}
          aria-label={item.label}
          widthLevel={widthLevel}
          disabled={!!item.disabled}
        >
          {item.value}
        </S.Item>
      ))}
    </S.Root>
  );
};

ButtonsGroup.displayName = 'ButtonsGroup';
