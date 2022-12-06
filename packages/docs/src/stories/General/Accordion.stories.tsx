import type { AccordionItem, AccordionProps } from '@getlove/react';
import { Accordion } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

const lorem =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore omnis animi exercitationem, rem vel ea consectetur corporis obcaecati quo iure odit. Optio officia voluptatem unde fuga perspiciatis corrupti autem recusandae?';

const items: AccordionItem[] = [
  {
    label: 'Title 1',
    texts: [lorem, lorem],
  },
  {
    label: 'Title 2',
    texts: [lorem, lorem],
  },
];

export default {
  title: 'Components/General/Accordion',
  component: Accordion,
  args: {
    items,
    fullWidth: false,
    type: 'single',
    collapsible: true,
  },
  argTypes: {
    fullWidth: {
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
          'This is the Accordion component, it shows a vertically stacked set of interactive headings that each reveal an associated section of content.',
      },
    },
  },
} as Meta<AccordionProps>;

export const Primary: StoryObj<AccordionProps> = {};

export const Disabled: StoryObj<AccordionProps> = {
  args: {
    disabled: true,
  },
};

export const FullWidth: StoryObj<AccordionProps> = {
  args: {
    fullWidth: true,
  },
};
