import type { ButtonSelectProps } from '@getlove/react';
import { ButtonSelect } from '@getlove/react';
import { colors } from '@getlove/tokens';
import type { Meta, StoryObj } from '@storybook/react';

const items: ButtonSelectProps['items'] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
];

const variants = {
  parentBgColor: [
    ...Object.keys(colors).map(colorKey => `$${colorKey}`),
    'transparent',
  ] as unknown as ButtonSelectProps['parentBgColor'],
};

export default {
  title: 'Components/Buttons/ButtonSelect',
  component: ButtonSelect,
  args: {
    label: 'Select a fruit',
    required: false,
    error: false,
    disabled: false,
    fullWidth: false,
    items,
  },
  argTypes: {
    parentBgColor: {
      options: variants.parentBgColor,
      defaultValue: '$mono-high-lightest',
      control: { type: 'inline-radio' },
      description: 'Parent background color',
    },
    required: {
      control: 'boolean',
      description: 'Required field',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder value',
    },
    error: {
      control: 'boolean',
      description: 'Show error when a required field is empty',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled field',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Field with full width',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the ButtonSelect component, it shows a displays a list of options for the user to pick from—triggered by a button.',
      },
    },
  },
} as Meta<ButtonSelectProps>;

export const Primary: StoryObj<ButtonSelectProps> = {};

export const Error: StoryObj<ButtonSelectProps> = {
  args: {
    required: true,
    error: true,
  },
};

export const Disabled: StoryObj<ButtonSelectProps> = {
  args: {
    disabled: true,
  },
};
