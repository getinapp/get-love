import { themes } from '@storybook/theming';
import '../src/styles/global-styles.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'light',
        value: '#DEDBD3',
      },
      {
        name: 'dark',
        value: '#333333',
      },
    ],
  },
  docs: {
    theme: themes.dark,
  },
};
