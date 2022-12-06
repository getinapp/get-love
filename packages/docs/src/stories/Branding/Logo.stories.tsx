import type { LogoProps } from '@getlove/react';
import { Logo } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type VersionVariants = LogoProps['version'];
type ContrastVariants = LogoProps['contrast'];

const variants = {
  version: ['primary', 'secondary', 'neutral'] as VersionVariants[],
  contrast: ['positive', 'negative'] as ContrastVariants[],
};

export default {
  title: 'Components/Branding/Logo',
  component: Logo,
  args: {
    version: 'primary',
    contrast: 'positive',
  },
  argTypes: {
    version: {
      options: variants.version,
      control: { type: 'inline-radio' },
    },
    contrast: {
      options: variants.contrast,
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the Logo component, it shows a Get In logo you selected.',
      },
    },
  },
} as Meta<LogoProps>;

export const Primary: StoryObj<LogoProps> = {};
