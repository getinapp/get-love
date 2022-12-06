import type { SymbolProps } from '@getlove/react';
import { Symbol } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type VersionVariants = SymbolProps['version'];

const variants = {
  version: ['primary', 'secondary', 'neutral'] as VersionVariants[],
};

export default {
  title: 'Components/Branding/Symbol',
  component: Symbol,
  args: {
    version: 'primary',
  },
  argTypes: {
    version: {
      options: variants.version,
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is the Symbol component, it shows the Get In Symbol.',
      },
    },
  },
} as Meta<SymbolProps>;

export const Primary: StoryObj<SymbolProps> = {};
