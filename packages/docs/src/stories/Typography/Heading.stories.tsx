import type { HeadingProps } from '@getlove/react';
import { Heading } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
  args: {
    children: 'Olá, Get Love | Design System',
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the Heading component, it shows an element that represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest',
      },
    },
  },
} as Meta<HeadingProps>;

export const H1: StoryObj<HeadingProps> = {
  args: {
    size: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Estilizado com o valor `h1` na propriedade `size`',
      },
    },
  },
};

export const H2: StoryObj<HeadingProps> = {
  args: {
    size: 'h2',
  },
  argTypes: {
    size: {
      options: ['h2'],
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Estilizado com o valor `h2` na propriedade `size`',
      },
    },
  },
};

export const H3: StoryObj<HeadingProps> = {
  args: {
    size: 'h3',
  },
  argTypes: {
    size: {
      options: ['h3'],
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Estilizado com o valor `h3` na propriedade `size`',
      },
    },
  },
};

export const H4: StoryObj<HeadingProps> = {
  args: {
    size: 'h4',
  },
  argTypes: {
    size: {
      options: ['h4'],
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Estilizado com o valor `h4` na propriedade `size`',
      },
    },
  },
};

export const H5: StoryObj<HeadingProps> = {
  args: {
    size: 'h5',
  },
  argTypes: {
    size: {
      options: ['h5'],
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Estilizado com o valor `h5` na propriedade `size`',
      },
    },
  },
};

export const H6: StoryObj<HeadingProps> = {
  args: {
    size: 'h6',
  },
  argTypes: {
    size: {
      options: ['h6'],
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Estilizado com o valor `h6` na propriedade `size`',
      },
    },
  },
};

export const CustomHtmlTag: StoryObj<HeadingProps> = {
  args: {
    as: 'p',
  },
  argTypes: {
    size: {
      options: ['h2'],
      control: { type: 'inline-radio' },
      defaultValue: 'h2',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Alterando com o valor de uma tag html na propriedade `as`',
      },
    },
  },
};
