import type { ButtonsGroupItem, ButtonsGroupProps } from '@getlove/react';
import { ButtonsGroup } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

const items: ButtonsGroupItem[] = [
  {
    label: 'zero',
    value: 0,
  },
  {
    label: 'one',
    value: 1,
  },
  {
    label: 'two',
    value: 2,
  },
  {
    label: 'three',
    value: 3,
  },
  {
    label: 'four',
    value: 4,
  },
  {
    label: 'five',
    value: 5,
  },
  {
    label: 'six',
    value: 6,
  },
  {
    label: 'seven',
    value: 7,
  },
  {
    label: 'eight',
    value: 8,
  },
  {
    label: 'nine',
    value: 9,
  },
  {
    label: 'ten',
    value: 10,
  },
];

export default {
  title: 'Components/Form/ButtonsGroup',
  component: ButtonsGroup,
  args: {
    type: 'single',
    items,
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the ButtonsGroup component, it shows a set of two-state buttons that can be toggled on or off.',
      },
    },
  },
} as Meta<ButtonsGroupProps>;

export const Primary: StoryObj<ButtonsGroupProps> = {};

export const SecondValueDisabled: StoryObj<ButtonsGroupProps> = {
  args: {
    items: [
      {
        label: 'one',
        value: 1,
      },
      {
        label: 'two',
        value: 2,
        disabled: true,
      },
    ],
  },
};
