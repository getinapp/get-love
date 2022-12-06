import type { PersonProps } from '@getlove/react';
import { Person } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type VersionVariants = PersonProps['version'];

const variants = {
  version: [
    'RedShirt',
    'RedDress',
    'WhiteDress',
    'BlueShirt',
    'YellowShirt',
  ] as VersionVariants[],
};

export default {
  title: 'Components/Illustrations/Person',
  component: Person,
  args: {
    version: 'RedShirt',
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
          'This is the Person component, it shows an illustration of a dress person or an illustration of a shirt person.',
      },
    },
  },
} as Meta<PersonProps>;

export const Primary: StoryObj<PersonProps> = {};
