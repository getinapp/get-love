import type { FeedbackProps } from '@getlove/react';
import { Feedback } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type VersionVariants = FeedbackProps['version'];

const variants = {
  version: ['Success', 'Error', 'Warning'] as VersionVariants[],
};

export default {
  title: 'Components/Illustrations/Feedbacks',
  component: Feedback,
  args: {
    version: 'Success',
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
        component:
          'This is the Feedbacks component, it shows an illustration of a cell phone showing a success, error or warning feedback for the user.',
      },
    },
  },
} as Meta<FeedbackProps>;

export const Primary: StoryObj<FeedbackProps> = {};
