import type { TextareaProps } from '@getlove/react';
import { Textarea } from '@getlove/react';
import { colors } from '@getlove/tokens';
import type { Meta, StoryObj } from '@storybook/react';

const variants = {
  parentBgColor: [
    ...Object.keys(colors).map(colorKey => `$${colorKey}`),
    'transparent',
  ] as unknown as TextareaProps['parentBgColor'],
};

export default {
  title: 'Components/Form/Textarea',
  component: Textarea,
  args: {
    label: 'Label',
    required: false,
    error: false,
    disabled: false,
    fullWidth: false,
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
          'This is the Textarea component, it shows an element that represents a multi-line plain-text editing control.',
      },
    },
  },
} as Meta<TextareaProps>;

export const Primary: StoryObj<TextareaProps> = {};

export const WithPlaceholder: StoryObj<TextareaProps> = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const Error: StoryObj<TextareaProps> = {
  args: {
    required: true,
    error: true,
  },
};

export const Disabled: StoryObj<TextareaProps> = {
  args: {
    disabled: true,
  },
};
