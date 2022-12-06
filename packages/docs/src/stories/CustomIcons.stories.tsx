import type { CustomIconProps } from '@getlove/react';
import { CustomIcon } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type VersionVariants = CustomIconProps['icon'];

const variants = {
  icon: [
    'DiaryFree',
    'GlutenFree',
    'Kosher',
    'MilkFree',
    'Vegan',
    'Vegetarian',
    'Walking',
  ] as VersionVariants[],
};

export default {
  title: 'Components/CustomIcons',
  component: CustomIcon,
  args: {
    icon: 'DiaryFree',
  },
  argTypes: {
    icon: {
      options: variants.icon,
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the CustomIcons component, it shows a custom icon you selected.',
      },
    },
  },
} as Meta<CustomIconProps>;

export const Primary: StoryObj<CustomIconProps> = {};
