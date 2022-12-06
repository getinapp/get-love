import * as MySwitch from '@radix-ui/react-switch';

import { styled } from '../../../styles';
import { Text } from '../../Typography/Text';

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$xs',

  width: 'fit-content',

  label: {
    userSelect: 'none',
  },

  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
});

export const Switch = styled(MySwitch.Root, {
  all: 'unset',

  width: '4.4rem',
  height: '2.2rem',

  borderWidth: '$hairline',
  borderStyle: 'solid',
  borderColor: '$neutral-dark',

  backgroundColor: '$neutral-pure',
  borderRadius: '$full',

  cursor: 'pointer',

  '&:disabled': {
    pointerEvents: 'none',
  },

  '&[data-state="unchecked"]': {
    '&:disabled': {
      backgroundColor: '$mono-high-light',
      borderColor: '$mono-high-medium',
    },
  },

  '&[data-state="checked"]': {
    backgroundColor: '$brand-primary-pure',
    borderColor: '$brand-primary-dark',

    '&:disabled': {
      backgroundColor: '$brand-primary-lightest',
      borderColor: '$brand-primary-light',
    },
  },

  variants: {
    small: {
      true: {
        width: '3.2rem',
        height: '1.6rem',
      },
    },
  },
});

export const Thumb = styled(MySwitch.Thumb, {
  display: 'block',

  width: '1.8rem',
  height: '1.8rem',

  backgroundColor: '$mono-high-lightest',
  borderRadius: '$full',

  transition: 'transform 100ms',
  transform: 'translateX(1px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX(23px)',
  },

  variants: {
    small: {
      true: {
        width: '1.2rem',
        height: '1.2rem',
      },
    },
  },
});

export const Label = styled(Text, {
  color: '$mono-low-pure',

  variants: {
    disabled: {
      true: {
        color: '$mono-low-light',
      },
    },
  },
});
