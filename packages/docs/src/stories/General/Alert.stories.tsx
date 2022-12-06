import type { AlertProps, AlertVariants } from '@getlove/react';
import { Alert, AlertProvider } from '@getlove/react';
import type { Meta, StoryObj } from '@storybook/react';

type VariantVariants = AlertVariants['variant'];

const variants = {
  variant: ['info', 'success', 'warning', 'danger'] as VariantVariants[],
};

const ONE_MINUTE = 1000 * 60;
const ONE_HOUR = ONE_MINUTE * 60;

export default {
  title: 'Components/General/Alert',
  component: Alert,
  args: {
    heading: 'Título bem resumido',
    description:
      'Descrição do alerta, de forma clara e objetiva. Quando possível, linkar pra mais informações.',
  },
  argTypes: {
    variant: {
      options: variants.variant,
      control: { type: 'inline-radio' },
      defaultValue: 'info',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the Accordion component, it shows a succinct message that is displayed temporarily.',
      },
    },
  },
  decorators: [
    Story => {
      return (
        <AlertProvider swipeDirection='right' duration={ONE_HOUR}>
          <Story />
        </AlertProvider>
      );
    },
  ],
} as Meta<AlertProps>;

export const Info: StoryObj<AlertProps> = {
  args: {
    variant: 'info',
  },
};

export const Success: StoryObj<AlertProps> = {
  args: {
    variant: 'success',
  },
};

export const Warning: StoryObj<AlertProps> = {
  args: {
    variant: 'warning',
  },
};

export const Danger: StoryObj<AlertProps> = {
  args: {
    variant: 'danger',
  },
};

export const WithoutDescription: StoryObj<AlertProps> = {
  args: {
    description: '',
  },
};
