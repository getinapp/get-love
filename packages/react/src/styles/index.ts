import {
  borderRadius,
  borders,
  colors,
  fonts,
  fontSizes,
  fontStyles,
  fontWeights,
  lineHeights,
  opacities,
  shadows,
  spacings,
} from '@getlove/tokens';
import { createStitches, defaultThemeMap, globalCss } from '@stitches/react';

import type { Spacings } from '../@types';

export const {
  styled,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    borderRadius: 'borderRadius',
    border: 'borders',
    borderWidth: 'borders',
    fontStyle: 'fontStyles',
    opacity: 'opacities',
    boxShadow: 'shadows',
    filter: 'shadows',
    width: 'spacings',
    height: 'spacings',
    padding: 'spacings',
    paddingTop: 'spacings',
    paddingBottom: 'spacings',
    paddingLeft: 'spacings',
    paddingRight: 'spacings',
    margin: 'spacings',
    marginTop: 'spacings',
    marginBottom: 'spacings',
    marginLeft: 'spacings',
    marginRight: 'spacings',
    top: 'spacings',
    bottom: 'spacings',
    left: 'spacings',
    right: 'spacings',
    gap: 'spacings',
  },
  theme: {
    borderRadius,
    borders,
    colors,
    fonts,
    fontSizes,
    fontStyles,
    fontWeights,
    lineHeights,
    opacities,
    shadows,
    spacings,
  },
  utils: {
    marginX: (value: Spacings) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Spacings) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Spacings) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Spacings) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'html, :root': {
    fontSize: '62.5%', // 10px based
  },

  body: {
    fontSize: '1.6rem',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  button: {
    border: 0,
    cursor: 'pointer',
  },
});
