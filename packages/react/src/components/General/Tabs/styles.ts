import { colors } from '@getlove/tokens';
import * as MyTabs from '@radix-ui/react-tabs';

import { styled } from '../../../styles';

export const Root = styled(MyTabs.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
});

export const List = styled(MyTabs.List, {
  flexShrink: 0,
  display: 'flex',
});

export const Trigger = styled(MyTabs.Trigger, {
  all: 'unset',

  cursor: 'pointer',
  minHeight: '3.8rem',

  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  isolation: 'isolate',

  fontFamily: '$base',
  fontStyle: '$normal',
  fontSize: '$base-xs',
  fontWeight: '$medium',
  lineHeight: '$md',

  backgroundColor: 'transparent',

  color: '$mono-low-medium',
  userSelect: 'none',

  '&:first-child': {
    borderTopLeftRadius: 6,
  },

  '&:last-child': {
    borderTopRightRadius: 6,
  },

  '&[data-state="active"]': {
    color: '$brand-primary-pure',
    boxShadow: `inset 0 -1px 0 0 ${colors['brand-primary-pure']}, 0 1px 0 0 ${colors['brand-primary-pure']}`,
  },

  '&:focus': {
    position: 'relative',
    boxShadow: `0 0 0 2px ${colors['brand-primary-light']}`,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    widthLevel: {
      1: {
        minWidth: '17.25rem',
      },
      2: {
        minWidth: '17.25rem',
      },
      3: {
        minWidth: '11.5rem',
      },
      4: {
        minWidth: '8.625rem',
      },
      5: {
        minWidth: '6.9rem',
      },
    },
  },
});

export const Content = styled(MyTabs.Content, {
  flexGrow: 1,
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,

  backgroundColor: 'transparent',
});
