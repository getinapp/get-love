import type { OnThePhoneProps } from '@getlove/react';
import { OnThePhone } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type VersionVariants = OnThePhoneProps['version'];

const variants = {
  version: [
    'GroundSittingPrimary',
    'GroundSittingSecondary',
    'GroundSittingNeutral',
    'WithDogSittingPrimary',
    'WithDogSittingSecondary',
    'WithDogSittingNeutral',
    'TalkingPrimary',
    'TalkingSecondary',
    'TalkingWhite',
    'CelebratingPrimary',
    'CelebratingSecondary',
    'CelebratingNeutral',
  ] as VersionVariants[],
};

export default {
  title: 'Components/Illustrations/OnThePhone',
  component: OnThePhone,
  args: {
    version: 'GroundSittingPrimary',
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
          'This is the OnThePhone component, it shows an illustration of a person holding your cell phone, an illustration of a happy person dressed holding your cell phone to the top, an illustration of a person dressed, talking and holding your cell phone or an illustration of a person sitting on a chair and holding your cell phone.',
      },
    },
  },
} as Meta<OnThePhoneProps>;

export const Primary: StoryObj<OnThePhoneProps> = {};
