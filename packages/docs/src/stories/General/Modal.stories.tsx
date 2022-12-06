import type { ModalProps } from '@getlove/react';
import { Modal } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/General/Modal',
  component: Modal,
  args: {
    heading: 'Modal Title',
    description: undefined,
    children: <p>Modal content</p>,
  },
} as Meta<ModalProps>;

export const Primary: StoryObj<ModalProps> = {};

export const WithDescription: StoryObj<ModalProps> = {
  args: {
    heading: 'Modal with description',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti! Vero officia, ipsa animi cupiditate amet perspiciatis perferendis unde error itaque, ratione sapiente earum omnis inventore officiis ullam aspernatur deleniti!',
    children: <p>Modal content</p>,
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the Modal component, it shows a window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
      },
    },
  },
};
