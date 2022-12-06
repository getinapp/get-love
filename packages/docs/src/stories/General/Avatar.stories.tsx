import type { AvatarProps, AvatarVariants } from '@getlove/react';
import { Avatar } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

import getInLogo from '../../assets/logos/getin.png';

type SizeVariants = AvatarVariants['size'];

const variants = {
  size: ['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'] as SizeVariants[],
};

export default {
  title: 'Components/General/Avatar',
  component: Avatar,
  args: {
    size: 'xxl',
    src: getInLogo,
    alt: 'Maganez Filho',
  },
  argTypes: {
    size: {
      options: variants.size,
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the Avatar component, it shows a fallback image when the image is not found.',
      },
    },
  },
} as Meta<AvatarProps>;

export const WithContent: StoryObj<AvatarProps> = {};

export const FallbackImage: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: undefined,
  },
};
