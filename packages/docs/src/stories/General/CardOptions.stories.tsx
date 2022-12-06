import type { CardItem, CardOptionsProps, SelectProps } from '@getlove/react';
import { CardOptions } from '@getlove/react';
import { colors } from '@getlove/tokens';
import type { Meta, StoryObj } from '@storybook/react';

const items: CardItem[] = [
  {
    title: 'First Option',
    description: 'firstOption desc',
  },
  {
    title: 'Second Option',
    description: 'secondOption desc',
  },
];

const variants = {
  parentBgColor: [
    ...Object.keys(colors).map(colorKey => `$${colorKey}`),
    'transparent',
  ] as unknown as SelectProps['parentBgColor'],
};

export default {
  title: 'Components/General/CardOptions',
  component: CardOptions,
  args: {
    items,
    disabled: false,
  },
  argTypes: {
    parentBgColor: {
      options: variants.parentBgColor,
      defaultValue: '$mono-high-lightest',
      control: { type: 'inline-radio' },
      description: 'Parent background color',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled fields',
    },
    onClick: {
      action: 'click',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the CardOptions component, it shows a set of checkable buttons—known as radio buttons—where only one of the buttons can be checked at a time.',
      },
    },
  },
} as Meta<CardOptionsProps>;

export const Primary: StoryObj<CardOptionsProps> = {};

export const Disabled: StoryObj<CardOptionsProps> = {
  args: {
    items,
    disabled: true,
  },
};
