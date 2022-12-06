import type { TextProps, TextVariants } from '@getlove/react';
import { Text } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type StyleVariants = TextVariants['style'];

const variants = {
  style: [
    'base-micro-default',
    'base-mini-default',
    'base-small-default',
    'base-paragraph-default',
    'base-lead-default',
    'base-micro-bold',
    'base-mini-bold',
    'base-small-bold',
    'base-paragraph-bold',
    'base-lead-bold',
    'highlight-small',
    'highlight-paragraph',
    'highlight-lead',
  ] as StyleVariants[],
};

export default {
  title: 'Components/Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab minus sed repudiandae explicabo necessitatibus laboriosam accusantium.',
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the Text component, it shows an element that represents a plain-text.',
      },
    },
  },
} as Meta<TextProps>;

export const BaseMicroDefault: StoryObj<TextProps> = {
  args: {
    style: 'base-micro-default',
  },
  argTypes: {
    style: {
      options: ['base-micro-default'],
      control: { type: 'inline-radio' },
    },
  },
};

export const BaseMiniDefault: StoryObj<TextProps> = {
  args: {
    style: 'base-mini-default',
  },
  argTypes: {
    style: {
      options: ['base-mini-default'],
      control: { type: 'inline-radio' },
    },
  },
};

export const BaseSmallDefault: StoryObj<TextProps> = {
  args: {
    style: 'base-small-default',
  },
  argTypes: {
    style: {
      options: ['base-small-default'],
      control: { type: 'inline-radio' },
    },
  },
};

export const BaseParagraphDefault: StoryObj<TextProps> = {
  args: {
    style: 'base-paragraph-default',
  },
  argTypes: {
    style: {
      options: ['base-paragraph-default'],
      control: { type: 'inline-radio' },
    },
  },
};

export const BaseLeadDefault: StoryObj<TextProps> = {
  args: {
    style: 'base-lead-default',
  },
  argTypes: {
    style: {
      options: ['base-lead-default'],
      control: { type: 'inline-radio' },
    },
  },
};

export const BaseMicroBold: StoryObj<TextProps> = {
  args: {
    style: 'base-micro-bold',
  },
  argTypes: {
    style: {
      options: ['base-micro-bold'],
      control: { type: 'inline-radio' },
    },
  },
};

export const BaseMiniBold: StoryObj<TextProps> = {
  args: {
    style: 'base-mini-bold',
  },
  argTypes: {
    style: {
      options: ['base-mini-bold'],
      control: { type: 'inline-radio' },
    },
  },
};

export const BaseSmallBold: StoryObj<TextProps> = {
  args: {
    style: 'base-small-bold',
  },
  argTypes: {
    style: {
      options: ['base-small-bold'],
      control: { type: 'inline-radio' },
    },
  },
};

export const BaseParagraphBold: StoryObj<TextProps> = {
  args: {
    style: 'base-paragraph-bold',
  },
  argTypes: {
    style: {
      options: ['base-paragraph-bold'],
      control: { type: 'inline-radio' },
    },
  },
};

export const BaseLeadBold: StoryObj<TextProps> = {
  args: {
    style: 'base-lead-bold',
  },
  argTypes: {
    style: {
      options: ['base-lead-bold'],
      control: { type: 'inline-radio' },
    },
  },
};

export const HighlightSmall: StoryObj<TextProps> = {
  args: {
    style: 'highlight-small',
  },
  argTypes: {
    style: {
      options: ['highlight-small'],
      control: { type: 'inline-radio' },
    },
  },
};

export const HighlightParagraph: StoryObj<TextProps> = {
  args: {
    style: 'highlight-paragraph',
  },
  argTypes: {
    style: {
      options: ['highlight-paragraph'],
      control: { type: 'inline-radio' },
    },
  },
};

export const HighlightLead: StoryObj<TextProps> = {
  args: {
    style: 'highlight-lead',
  },
  argTypes: {
    style: {
      options: ['highlight-lead'],
      control: { type: 'inline-radio' },
    },
  },
};

export const CustomHtmlTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story: 'Alterando com o valor de uma tag html na propriedade `as`',
      },
    },
  },
};
