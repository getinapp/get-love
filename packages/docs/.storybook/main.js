module.exports = {
  stories: [
    '../src/pages/Home.stories.mdx', // Homepage
    '../src/pages/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') config.base = '/get-love/';
    return config;
  },
  previewHead: head => `
    ${head}
    <style>
      <link rel="shortcut icon" href="/getin.png" />
      <link rel="icon" type="image/png" href="/getin.png" />
    </style>
    <script>
      window.global = window;
      document.title = 'Get Love | Storybook | Design System';
    </script>
  `,
};
