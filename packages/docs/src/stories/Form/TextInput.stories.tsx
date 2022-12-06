import type { TextInputProps } from '@getlove/react';
import { TextInput } from '@getlove/react';
import { colors } from '@getlove/tokens';
import type { Meta, StoryObj } from '@storybook/react';

const variants = {
  parentBgColor: [
    ...Object.keys(colors).map(colorKey => `$${colorKey}`),
    'transparent',
  ] as unknown as TextInputProps['parentBgColor'],
};

export default {
  title: 'Components/Form/TextInput',
  component: TextInput,
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
          'This is the TextInput component, it shows an element that represents a one-line plain-text editing control.',
      },
    },
  },
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {};

export const WithPlaceholder: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const WithHelper: StoryObj<TextInputProps> = {
  args: {
    label: 'Label',
    helper: 'Digite seu texto de ajuda aqui',
  },
};

export const CellPhone: StoryObj<TextInputProps> = {
  args: {
    mask: '(00) 0 0000-0000',
    label: 'Celular',
    helper: 'Digite seu celular',
    required: true,
  },
};

export const Error: StoryObj<TextInputProps> = {
  args: {
    required: true,
    error: true,
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};
