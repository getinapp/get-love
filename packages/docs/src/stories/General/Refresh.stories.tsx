import type { RefreshProps, RefreshState } from '@getlove/react';
import { Refresh } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

const variants = {
  state: ['not-loaded', 'loading', 'loaded'] as RefreshState[],
};

export default {
  title: 'Components/General/Refresh',
  component: Refresh,
  args: {
    state: 'not-loaded',
  },
  argTypes: {
    state: {
      options: variants.state,
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the Refresh component, it shows the loader state about one action.',
      },
    },
  },
} as Meta<RefreshProps>;

export const Primary: StoryObj<RefreshProps> = {};

export const Loading: StoryObj<RefreshProps> = {
  args: {
    state: 'loading',
  },
};

export const Loaded: StoryObj<RefreshProps> = {
  args: {
    state: 'loaded',
  },
};
