import type { StellaCartoucheProps } from '@getlove/react';
import { StellaCartouche } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type VersionVariants = StellaCartoucheProps['version'];
type SmallUseVariants = StellaCartoucheProps['smallUse'];

const variants = {
  version: ['FullColor', 'SingleColor', 'Outlined'] as VersionVariants[],
  smallUse: ['on', 'off'] as SmallUseVariants[],
};

export default {
  title: 'Components/StellaArtoisBranding/Cartouche',
  component: StellaCartouche,
  args: {
    version: 'FullColor',
    smallUse: 'off',
  },
  argTypes: {
    version: {
      options: variants.version,
      control: { type: 'inline-radio' },
    },
    smallUse: {
      options: variants.smallUse,
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the StellaCartouche component, it shows a Stella Cartouche logo that you selected.',
      },
    },
  },
} as Meta<StellaCartoucheProps>;

export const Primary: StoryObj<StellaCartoucheProps> = {};
