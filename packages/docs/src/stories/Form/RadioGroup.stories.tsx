import type { RadioGroupProps, RadioItem } from '@getlove/react';
import { RadioGroup } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type LabelDirectionVariants = RadioGroupProps['labelDirection'];

const items: RadioItem[] = [
  {
    label: 'First Option',
    value: 'firstOption',
  },
  {
    label: 'Second Option',
    value: 'secondOption',
  },
];

const variants = {
  labelDirection: ['left', 'right'] as LabelDirectionVariants[],
};

export default {
  title: 'Components/Form/RadioGroup',
  component: RadioGroup,
  args: {
    items,
    disabled: false,
  },
  argTypes: {
    labelDirection: {
      options: variants.labelDirection,
      control: { type: 'inline-radio' },
      defaultValue: 'right',
      description: 'Label direction (left or right)',
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
          'This is the RadioGroup component, it shows a set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
      },
    },
  },
} as Meta<RadioGroupProps>;

export const Primary: StoryObj<RadioGroupProps> = {};

export const Disabled: StoryObj<RadioGroupProps> = {
  args: {
    items,
    disabled: true,
  },
};
