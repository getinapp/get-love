import type { ComponentProps, ReactNode } from 'react';

import * as S from './styles';

export type TabItem = {
  label: string;
  disabled?: boolean;
  content: ReactNode;
};

export interface TabsProps extends ComponentProps<typeof S.Root> {
  items: TabItem[];
}

export const Tabs = ({ items, ...props }: TabsProps) => {
  const widthLevel =
    (items.length >= 5 && 5) ||
    (items.length === 4 && 4) ||
    (items.length === 3 && 3) ||
    (items.length === 2 && 2) ||
    (items.length === 1 && 1) ||
    1;

  return (
    <S.Root
      defaultValue={items[0].label.toLowerCase().replaceAll(' ', '-')}
      {...props}
    >
      <S.List aria-label='Tab content list'>
        {items.map(item => (
          <S.Trigger
            key={item.label}
            disabled={!!item.disabled}
            value={item.label.toLowerCase().replaceAll(' ', '-')}
            widthLevel={widthLevel}
          >
            {item.label}
          </S.Trigger>
        ))}
      </S.List>

      {items.map(item => (
        <S.Content
          key={item.label}
          value={item.label.toLowerCase().replaceAll(' ', '-')}
        >
          {item.content}
        </S.Content>
      ))}
    </S.Root>
  );
};

Tabs.displayName = 'Tabs';
