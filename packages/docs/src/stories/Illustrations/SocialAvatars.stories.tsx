import type { SocialAvatarProps } from '@getlove/react';
import { SocialAvatar } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type VersionVariants = SocialAvatarProps['version'];

const variants = {
  version: [
    'FemaleBlondeHair',
    'FemaleBlueShirt',
    'MaleBlackHair',
    'FemaleYellowShirt',
    'FemaleBlackHair',
    'MaleWhiteGlasses',
    'MaleBlueHat',
    'FemaleRedHair',
    'MaleBlackShirt',
    'MaleBlueShirt',
  ] as VersionVariants[],
};

export default {
  title: 'Components/Illustrations/SocialAvatars',
  component: SocialAvatar,
  args: {
    version: 'FemaleBlondeHair',
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
          'This is the SocialAvatars component, it shows an illustration of a person with a hat, an illustration of a person with a shirt, an illustration of a person with glasses, or an illustration of a person with beautiful hairs.',
      },
    },
  },
} as Meta<SocialAvatarProps>;

export const Primary: StoryObj<SocialAvatarProps> = {};
