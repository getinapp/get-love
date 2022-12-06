/* eslint-disable no-alert */
import type { TagProps, TagVariants } from '@getlove/react';
import { Tag } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

const variants = {
  style: ['sm', 'pill'] as unknown as TagVariants['style'],
};

export default {
  title: 'Components/Buttons/Tag',
  component: Tag,
  args: {
    style: 'sm',
    label: 'Tag label',
    disabled: false,
    onClose: () =>
      alert(
        'The tag was removed! Use this function to remove the tag on the page, for example'
      ),
  },
  argTypes: {
    label: {
      description: 'Tag label',
    },
    style: {
      options: variants.style,
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
          'This is the Tag component, it shows an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology.',
      },
    },
  },
} as Meta<TagProps>;

export const Primary: StoryObj<TagProps> = {};

export const Disabled: StoryObj<TagProps> = {
  args: {
    disabled: true,
  },
};
