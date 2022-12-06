import * as MySelect from '@radix-ui/react-select';

import { styled } from '../../../styles';

export const Wrapper = styled('div', {
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

export const Trigger = styled(MySelect.Trigger, {
  minWidth: '8.1rem',
  minHeight: '2.8rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.8rem',

  backgroundColor: '$neutral-lightest',
  padding: '$xxxs 0.4rem $xxxs 1.2rem',

  borderRadius: '3rem',

  margin: 0,
  boxSizing: 'border-box',

  fontFamily: '$base',
  fontStyle: '$normal',
  fontWeight: '$medium',
  fontSize: '$base-xs',
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
    outlineColor: '$brand-secondary-light',

    borderWidth: '$hairline',
    borderStyle: 'solid',
    borderColor: '$brand-secondary-light',

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
        outlineColor: '$brand-secondary-light',

        borderWidth: '$hairline',
        borderStyle: 'solid',
        borderColor: '$brand-secondary-light',

        '&:hover': {
          color: '$mono-medium-pure',
        },

        '&[data-placeholder]': {
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
        pointerEvents: 'none',

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
        outlineStyle: 'solid',
        outlineColor: '$feedback-error-pure',

        borderWidth: '$hairline',
        borderStyle: 'solid',
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
  padding: '0.8rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '$xxxs',
});

export const Item = styled(MySelect.Item, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  cursor: 'pointer',

  fontFamily: '$base',
  fontStyle: '$normal',
  fontWeight: '$medium',
  fontSize: '$base-xs',
  lineHeight: '$md',

  color: '$mono-low-pure',
  borderRadius: '$sm',

  width: '100%',
  padding: '$xxxs $xxs',

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
