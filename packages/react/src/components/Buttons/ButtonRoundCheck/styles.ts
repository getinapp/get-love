import * as Checkbox from '@radix-ui/react-checkbox';

import { styled } from '../../../styles';
import { Text } from '../../Typography/Text';

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '$xxs',
  width: 'fit-content',
  height: 'fit-content',

  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
});

export const Root = styled(Checkbox.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '2.4rem',
  height: '2.4rem',

  overflow: 'hidden',
  backgroundColor: 'transparent',

  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
      },
    },
  },
});

export const Indicator = styled(Checkbox.Indicator, {
  color: '$brand-primary-pure',
});

export const Label = styled(Text, {
  lineHeight: 0,
  userSelect: 'none',

  variants: {
    disabled: {
      true: {
        color: '$mono-low-light',
        pointerEvents: 'none',
      },
    },
  },
});
