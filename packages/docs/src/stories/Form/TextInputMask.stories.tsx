import type { TextInputMaskProps } from '@getlove/react';
import { TextInputMask } from '@getlove/react';
import { colors } from '@getlove/tokens';
import type { Meta, StoryObj } from '@storybook/react';

const variants = {
  parentBgColor: [
    ...Object.keys(colors).map(colorKey => `$${colorKey}`),
    'transparent',
  ] as unknown as TextInputMaskProps['parentBgColor'],
};

export default {
  title: 'Components/Form/TextInputMask',
  component: TextInputMask,
  args: {
    label: 'Label',
    required: false,
    error: false,
    disabled: false,
    fullWidth: false,
    mask: '',
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
          'This is the TextInputMask component, it shows an element that represents a one-line plain-text editing control.',
      },
    },
  },
} as Meta<TextInputMaskProps>;

export const CellPhone: StoryObj<TextInputMaskProps> = {
  args: {
    mask: '(00) 0 0000-0000',
    label: 'Celular',
    helper: 'Digite seu celular',
    required: true,
  },
};

export const Birthday: StoryObj<TextInputMaskProps> = {
  args: {
    mask: '00/00/0000',
    label: 'Data de nascimento',
    helper: 'Digite sua data de nascimento',
    required: true,
  },
};

export const CPF: StoryObj<TextInputMaskProps> = {
  args: {
    mask: '000.000.000-00',
    label: 'CPF',
    helper: 'Digite seu CPF',
    required: true,
  },
};

export const Error: StoryObj<TextInputMaskProps> = {
  args: {
    required: true,
    error: true,
  },
};

export const Disabled: StoryObj<TextInputMaskProps> = {
  args: {
    disabled: true,
  },
};
