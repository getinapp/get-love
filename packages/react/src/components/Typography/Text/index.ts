import type { VariantProps } from '@stitches/react';

import { MyComponentProps } from '../../../@types';
import { styled } from '../../../styles';

const defaultStyles = {
  base: {
    fontFamily: '$base',
    fontStyle: '$normal',
  },
  highlight: {
    fontFamily: '$highlight',
    fontStyle: '$italic',
    fontWeight: '$regular',
  },
};

export const Text = styled('p', {
  color: '$mono-low-pure',
  lineHeight: '$md',

  variants: {
    style: {
      'base-micro-default': {
        ...defaultStyles.base,
        fontSize: '$base-xxxs',
        fontWeight: '$medium',
      },
      'base-mini-default': {
        ...defaultStyles.base,
        fontSize: '$base-xxs',
        fontWeight: '$medium',
      },
      'base-small-default': {
        ...defaultStyles.base,
        fontSize: '$base-xs',
        fontWeight: '$medium',
      },
      'base-paragraph-default': {
        ...defaultStyles.base,
        fontSize: '$base-sm',
        fontWeight: '$medium',
      },
      'base-lead-default': {
        ...defaultStyles.base,
        fontSize: '$base-lg',
        fontWeight: '$medium',
      },
      'base-micro-bold': {
        ...defaultStyles.base,
        fontSize: '$base-xxxs',
        fontWeight: '$bold',
      },
      'base-mini-bold': {
        ...defaultStyles.base,
        fontSize: '$base-xxs',
        fontWeight: '$bold',
      },
      'base-small-bold': {
        ...defaultStyles.base,
        fontSize: '$base-xs',
        fontWeight: '$bold',
      },
      'base-paragraph-bold': {
        ...defaultStyles.base,
        fontSize: '$base-sm',
        fontWeight: '$bold',
      },
      'base-lead-bold': {
        ...defaultStyles.base,
        fontSize: '$base-lg',
        fontWeight: '$bold',
      },
      'highlight-small': {
        ...defaultStyles.highlight,
        fontSize: '$highlight-sm',
      },
      'highlight-paragraph': {
        ...defaultStyles.highlight,
        fontSize: '$highlight-md',
      },
      'highlight-lead': {
        ...defaultStyles.highlight,
        fontSize: '$highlight-lg',
      },
    },
  },
});

Text.displayName = 'Text';

export type TextProps = MyComponentProps<typeof Text>;
export type TextVariants = NonNullable<VariantProps<typeof Text>>;
