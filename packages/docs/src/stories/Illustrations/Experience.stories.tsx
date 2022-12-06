import type { ExperienceProps } from '@getlove/react';
import { Experience } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type VersionVariants = ExperienceProps['version'];

const variants = {
  version: [
    'EatingPrimary',
    'EatingSecondary',
    'EatingWhite',
    'LovingPrimary',
    'LovingSecondary',
    'LovingNeutral',
  ] as VersionVariants[],
};

export default {
  title: 'Components/Illustrations/Experience',
  component: Experience,
  args: {
    version: 'EatingPrimary',
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
          'This is the Experience component, it shows an illustration of a chef rating a meal or an illustration of a person holding your cell phone.',
      },
    },
  },
} as Meta<ExperienceProps>;

export const Primary: StoryObj<ExperienceProps> = {};
