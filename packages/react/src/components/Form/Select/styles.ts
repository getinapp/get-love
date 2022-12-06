import * as MySelect from '@radix-ui/react-select';

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

export const Trigger = styled(MySelect.Trigger, {
  minWidth: '18.8rem',
  minHeight: '4rem',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
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

    '&[data-placeholder]': {
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

    '&[data-placeholder]': {
      color: '$mono-low-pure',
      '&:hover': {
        color: '$mono-medium-pure',
      },
    },
  },

  '&:disabled': {
    borderColor: '$mono-low-light',

    pointerEvents: 'none',
    backgroundColor: '$mono-high-light',
    color: '$mono-low-light',

    '&[data-placeholder]': {
      color: '$mono-low-light',
    },
  },

  svg: {
    color: '$mono-low-pure',

    '&:not(:disabled):hover': {
      color: '$mono-medium-pure',
    },

    '&:disabled': {
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
        outlineStyle: 'solid',
        borderColor: '$brand-secondary-light',

        color: '$mono-low-pure',
        '&:hover': {
          color: '$mono-medium-pure',
        },

        '&[data-placeholder]': {
          color: '$mono-low-pure',
          '&:hover': {
            color: '$mono-medium-pure',
          },
        },

        svg: {
          color: '$mono-low-pure',
          '&:hover': {
            color: '$mono-medium-pure',
          },
        },
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',

        borderColor: '$mono-low-light',

        backgroundColor: '$mono-high-light',
        color: '$mono-low-light',

        '&[data-placeholder]': {
          color: '$mono-low-light',
        },

        svg: {
          color: '$mono-low-light',
        },
      },
    },
    error: {
      true: {
        outlineColor: '$feedback-error-pure',
        borderColor: '$feedback-error-pure',

        '&[data-placeholder]': {
          color: '$mono-low-pure',
        },

        svg: {
          color: '$mono-low-pure',
        },
      },
    },
  },
});

export const Content = styled(MySelect.Content, {
  overflow: 'hidden',
  borderRadius: '$md',
});

export const Viewport = styled(MySelect.Viewport, {
  borderWidth: '$thin',
  borderStyle: 'solid',
  borderColor: '$brand-secondary-light',

  borderRadius: '$md',
  padding: '$xs $sm',
});

export const Item = styled(MySelect.Item, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  cursor: 'pointer',

  fontFamily: '$base',
  fontStyle: '$normal',
  fontWeight: '$medium',
  fontSize: '$base-sm',
  lineHeight: '$md',

  color: '$mono-low-pure',
  borderRadius: '$sm',

  width: '100%',
  padding: '$xs $sm',

  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$mono-low-light',
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$brand-secondary-light',
    color: '$mono-high-lightest',
  },
});

export const Icon = styled(MySelect.Icon, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ItemIndicator = styled(MySelect.ItemIndicator, {
  position: 'absolute',
  left: '0',
  width: '25px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const GroupLabel = styled(MySelect.Label, {
  padding: '0 $sm',
  fontSize: '12px',
  lineHeight: '25px',

  color: '$mono-low-pure',
});

export const Separator = styled(MySelect.Separator, {
  height: 1,
  backgroundColor: '$brand-secondary-lightest',
  margin: 5,
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
