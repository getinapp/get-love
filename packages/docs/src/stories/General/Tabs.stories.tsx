import type { TabItem, TabsProps } from '@getlove/react';
import { Tabs } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

const items: TabItem[] = [
  {
    label: 'Tab 01',
    content: <p>Hello tab 1</p>,
  },
  {
    label: 'Tab 02',
    content: <p>Hello tab 2</p>,
  },
];

export default {
  title: 'Components/General/Tabs',
  component: Tabs,
  args: {
    items,
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the Tabs component, it shows a set of layered sections of content—known as tab panels—that are displayed one at a time.',
      },
    },
  },
} as Meta<TabsProps>;

export const Primary: StoryObj<TabsProps> = {};

export const Tab02Disabled: StoryObj<TabsProps> = {
  args: {
    items: [
      {
        label: 'Tab 01',
        content: <p>Hello tab 1</p>,
      },
      {
        label: 'Tab 02 (Soon)',
        disabled: true,
        content: <p>Hello tab 2</p>,
      },
    ],
  },
};
