import type { CheckboxProps } from '@getlove/react';
import { Checkbox } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type LabelDirectionVariants = CheckboxProps['labelDirection'];

const variants = {
  labelDirection: ['left', 'right'] as LabelDirectionVariants[],
};

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  args: {
    label: 'Label',
    checked: false,
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    labelDirection: {
      options: variants.labelDirection,
      control: { type: 'inline-radio' },
      defaultValue: 'right',
      description: 'Label direction (left or right)',
    },
    checked: {
      control: 'boolean',
      description: 'Checked field',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled field',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Field with full width',
    },
    onClick: {
      action: 'click',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the Checkbox component, it shows a control that allows the user to toggle between checked and not checked.',
      },
    },
  },
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
