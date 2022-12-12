import { IMaskInput } from 'react-imask';

import { styled } from '../../../styles';

export const Input = styled(IMaskInput, {
  minWidth: '18.8rem',
  minHeight: '4rem',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '$xs',

  borderWidth: '$hairline',
  borderStyle: 'solid',
  borderColor: '$mono-low-pure',
  backgroundColor: 'transparent',

  outlineColor: '$brand-secondary-light',

  borderRadius: '$md',

  margin: 0,
  boxSizing: 'border-box',
  padding: '$xs $sm',

  fontFamily: '$base',
  fontStyle: '$normal',
  fontWeight: '$medium',
  fontSize: '$base-sm',
  lineHeight: '$md',

  color: '$mono-low-pure',

  '&:not(:disabled):hover': {
    color: '$mono-medium-pure',

    '&::placeholder': {
      color: '$mono-medium-pure',
    },
  },

  '&:focus': {
    outlineStyle: 'solid',
    borderColor: '$brand-secondary-light',
    color: '$mono-low-pure',
    '&:hover': {
      color: '$mono-medium-pure',
    },

    '&::placeholder': {
      color: '$mono-low-pure',
      '&:hover': {
        color: '$mono-medium-pure',
      },
    },
  },

  '&:disabled': {
    pointerEvents: 'none',
    borderColor: '$mono-low-light',
    backgroundColor: '$mono-high-light',
    color: '$mono-low-light',

    '&::placeholder': {
      color: '$mono-low-light',
    },
  },

  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    focused: {
      true: {
        color: '$mono-low-pure',
        '&:hover': {
          color: '$mono-medium-pure',
        },

        '&::placeholder': {
          color: '$mono-low-pure',
          '&:hover': {
            color: '$mono-medium-pure',
          },
        },
      },
    },
    hasColorFocused: {
      true: {
        outlineStyle: 'solid',
        borderColor: '$brand-secondary-light',
      },
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        borderColor: '$mono-low-light',
        backgroundColor: '$mono-high-light',
        color: '$mono-low-light',

        '&::placeholder': {
          color: '$mono-low-light',
        },
      },
    },
    error: {
      true: {
        borderColor: '$feedback-error-pure',

        '&::placeholder': {
          color: '$mono-low-pure',
        },
      },
    },
  },
});
