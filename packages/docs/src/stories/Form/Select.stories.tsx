import type { SelectProps } from '@getlove/react';
import { Select } from '@getlove/react';
import { colors } from '@getlove/tokens';
import type { Meta, StoryObj } from '@storybook/react';

const ungroupedItems: SelectProps['ungroupedItems'] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
];

const ungroupedItems2: SelectProps['ungroupedItems'] = [
  { label: 'Orange', value: 'orange' },
  { label: 'Lime', value: 'lime' },
];

const groupedItems: SelectProps['groupedItems'] = [
  {
    groupLabel: 'Frutas',
    items: ungroupedItems,
  },
  {
    groupLabel: 'Frutas 2',
    items: ungroupedItems2,
  },
];

const variants = {
  parentBgColor: [
    ...Object.keys(colors).map(colorKey => `$${colorKey}`),
    'transparent',
  ] as unknown as SelectProps['parentBgColor'],
};

export default {
  title: 'Components/Form/Select',
  component: Select,
  args: {
    label: 'Select a fruit',
    required: false,
    error: false,
    disabled: false,
    fullWidth: false,
    ungroupedItems,
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
          'This is the Select component, it shows a displays a list of options for the user to pick from—triggered by a button.',
      },
    },
  },
} as Meta<SelectProps>;

export const UngroupedItems: StoryObj<SelectProps> = {
  args: {
    ungroupedItems,
  },
};

export const GroupedItems: StoryObj<SelectProps> = {
  args: {
    groupedItems,
  },
};

export const WithHelper: StoryObj<SelectProps> = {
  args: {
    label: 'Label',
    helper: 'Digite seu texto de ajuda aqui',
  },
};

export const Error: StoryObj<SelectProps> = {
  args: {
    required: true,
    error: true,
  },
};

export const Disabled: StoryObj<SelectProps> = {
  args: {
    disabled: true,
  },
};
