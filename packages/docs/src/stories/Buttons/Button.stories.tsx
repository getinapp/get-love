import type { ButtonProps, ButtonVariants } from '@getlove/react';
import { Button, Symbol } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type SizeVariants = ButtonVariants['size'];
type StyleVariants = ButtonVariants['style'];
type OpacityOnHoverVariants = ButtonVariants['opacityOnHover'];

const variants = {
  size: ['large', 'regular', 'small', 'mini'] as SizeVariants[],
  style: [
    'primary',
    'secondary',
    'negative',
    'outline',
    'outline-negative',
  ] as StyleVariants[],
  opacityOnHover: [
    'intense',
    'medium',
    'light',
    'filter',
  ] as OpacityOnHoverVariants[],
};

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  args: {
    children: 'Olá, Get Love | Design System',
    size: 'regular',
    opacityOnHover: 'intense',
    disabled: false,
    isLoading: false,
    fullWidth: false,
  },
  argTypes: {
    children: {
      description: 'button content',
    },
    size: {
      options: variants.size,
      control: { type: 'inline-radio' },
    },
    opacityOnHover: {
      options: variants.opacityOnHover,
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'click',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the Button component, it shows an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology.',
      },
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    style: 'primary',
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    style: 'secondary',
  },
};

export const Negative: StoryObj<ButtonProps> = {
  args: {
    style: 'negative',
  },
};

export const Outline: StoryObj<ButtonProps> = {
  args: {
    style: 'outline',
  },
};

export const OutlineNegative: StoryObj<ButtonProps> = {
  args: {
    style: 'outline-negative',
  },
};

export const Loading: StoryObj<ButtonProps> = {
  args: {
    style: 'primary',
    isLoading: true,
  },
};
export const FullWidth: StoryObj<ButtonProps> = {
  args: {
    style: 'primary',
    fullWidth: true,
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    style: 'primary',
    children: (
      <>
        <Symbol version='neutral' />
        <span>Olá, Get Love | Design System</span>
      </>
    ),
  },
};
