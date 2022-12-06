import type { CreditCardFlagProps } from '@getlove/react';
import { CreditCardFlag } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type FlagVariants = CreditCardFlagProps['flag'];

const variants = {
  flag: ['AmericanExpress', 'Visa', 'Mastercard'] as FlagVariants[],
};

export default {
  title: 'Components/General/CreditCardFlag',
  component: CreditCardFlag,

  args: {
    flag: 'AmericanExpress',
  },
  argTypes: {
    flag: {
      options: variants.flag,
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the CreditCardFlag component, it shows a logo of the credit card brands you selected.',
      },
    },
  },
} as Meta<CreditCardFlagProps>;

export const Primary: StoryObj<CreditCardFlagProps> = {};
