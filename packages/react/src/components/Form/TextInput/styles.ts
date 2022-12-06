import { IMaskInput } from 'react-imask';

import { styled } from '../../../styles';
import { Text } from '../../Typography/Text';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',

  '&:disabled': {
    cursor: 'not-allowed',
  },

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

export const InputWrapper = styled('div', {
  position: 'relative',
});

export const Label = styled('label', {
  position: 'absolute',
  padding: '0 0.4rem',
  backgroundColor: 'transparent',

  fontStyle: '$normal',
  fontWeight: '$medium',
  fontSize: '$base-xs',
  lineHeight: '$md',

  color: '$mono-low-pure',

  borderRadius: '$md',

  transition: 'all 0.2s ease-in-out',
  top: '30%',
  transformOrigin: 'left top',
  cursor: 'text',
  pointerEvents: 'none',

  marginLeft: '$sm',

  '&:focus': {
    transform: 'translate3d(0, -110%, 0) scale(1)',
    color: '$brand-secondary-light',
  },

  variants: {
    required: {
      true: {
        '&:before': {
          content: '* ',
        },
      },
    },
    focused: {
      true: {
        transform: 'translate3d(0, -110%, 0) scale(1)',
      },
    },
    hasColorFocused: {
      true: {
        color: '$brand-secondary-light',
      },
    },
    disabled: {
      true: {
        color: '$mono-low-light',
        userSelect: 'none',
      },
    },
    error: {
      true: {
        color: '$feedback-error-pure',
      },
    },
  },
});

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

export const Helper = styled(Text, {
  marginTop: '0.6rem',
  color: '$mono-low-pure',

  variants: {
    disabled: {
      true: {
        color: '$mono-low-light',
      },
    },
    error: {
      true: {
        color: '$feedback-error-pure',
      },
    },
  },
});
