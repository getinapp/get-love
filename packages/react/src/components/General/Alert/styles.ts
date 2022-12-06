import * as MyToast from '@radix-ui/react-toast';

import { styled } from '../../../styles';
import { hide, slideIn, swipeOut } from '../../../styles/animations';

export const AlertProvider = styled(MyToast.Provider);

export const Root = styled(MyToast.Root, {
  display: 'flex',
  flexDirection: 'column',
  padding: '$xs $sm',

  width: '30rem',

  boxShadow: '$level2',
  borderRadius: '$md',

  '&[data-state="open"]': {
    animation: `${slideIn} .150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },

  variants: {
    variant: {
      info: {
        backgroundColor: '$neutral-lightest',
      },
      success: {
        backgroundColor: '#D0F5D2',
      },
      warning: {
        backgroundColor: '$feedback-warning-lightest',
      },
      danger: {
        backgroundColor: '#F8DAD3',
      },
    },
  },

  defaultVariants: {
    variant: 'info',
  },
});

export const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Title = styled(MyToast.Title, {
  color: '$mono-low-pure',
});

export const Description = styled(MyToast.Description, {
  marginTop: '$xxs',
  color: '$mono-low-medium',
});

export const Action = styled(MyToast.Action, {
  cursor: 'pointer',
  svg: {
    width: '2.4rem',
    height: '2.4rem',
  },
});

export const Viewport = styled(MyToast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '2.5rem',
  gap: '1rem',
  width: 'fit-content',
  height: 'fit-content',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
});
