import type { SwitchProps } from '@getlove/react';
import { Switch } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type LabelDirectionVariants = SwitchProps['labelDirection'];

const variants = {
  labelDirection: ['left', 'right'] as LabelDirectionVariants[],
};

export default {
  title: 'Components/Form/Switch',
  component: Switch,
  args: {
    label: 'Label',
    labelDirection: 'right',
    small: false,
    checked: false,
    disabled: false,
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
    small: {
      control: 'boolean',
      description: 'Small text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled field',
    },
    onClick: {
      action: 'click',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the Switch component, it shows a control that allows the user to toggle between checked and not checked.',
      },
    },
  },
} as Meta<SwitchProps>;

export const Primary: StoryObj<SwitchProps> = {};

export const Small: StoryObj<SwitchProps> = {
  args: {
    small: true,
  },
};

export const Disabled: StoryObj<SwitchProps> = {
  args: {
    disabled: true,
  },
};
