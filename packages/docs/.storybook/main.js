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
      @font-face {
        font-family: 'Maison Neue Extended';
        font-display: swap;
        src: local('Maison Neue Extended'),
          url('../public/fonts/MaisonNeueExt-Medium.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Maison Neue Extended Bold';
        font-display: swap;
        src: local('Maison Neue Extended Bold'),
          url('../public/fonts/MaisonNeueExt-Bold.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Noto Serif';
        font-display: swap;
        src: local('Noto Serif'),
          url('../public/fonts/NotoSerif-Italic.ttf') format('truetype');
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      :root {
        font-size: 62.5%; /* 10px based */
      }

      body {
        font-family: 'Maison Neue Extended';
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    </style>
  `,
};
