import * as MyAccordion from '@radix-ui/react-accordion';

import { styled } from '../../../styles';
import { slideDown, slideUp } from '../../../styles/animations';

export const Wrapper = styled(MyAccordion.Root, {
  display: 'flex',
  flexDirection: 'column',

  width: '34.4rem',
  borderRadius: '$sm',

  backgroundColor: '$neutral-pure',

  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
});

export const Item = styled(MyAccordion.Item, {
  display: 'flex',
  flexDirection: 'column',

  overflow: 'hidden',
  marginTop: '1px',

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: '0.4rem',
    borderTopRightRadius: '0.4rem',
  },

  '&:last-child': {
    borderBottomLeftRadius: '0.4rem',
    borderBottomRightRadius: '0.4rem',
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.7)',
  },
});

export const Header = styled(MyAccordion.Header, {
  display: 'flex',
});

export const Trigger = styled(MyAccordion.Trigger, {
  flex: 1,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  paddingY: '$sm',
  minHeight: '5.4rem',

  '&:hover': {
    backgroundColor: '$mono-high-pure',
  },

  svg: {
    width: '2.4rem',
    height: '2.4rem',
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  },

  '&[data-state="open"]': {
    '> svg': {
      transform: 'rotate(180deg)',
    },

    '> h2': {
      fontWeight: '$bold',
    },
  },
});

export const Content = styled(MyAccordion.Content, {
  overflow: 'hidden',
  backgroundColor: '$mono-high-pure',

  '&[data-state="open"]': {
    animation: `${slideDown} .3s cubic-bezier(.25,.46,.45,.94) both`,
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} .3s cubic-bezier(.25,.46,.45,.94) both`,
  },
});

export const ContentText = styled('div', {
  padding: '$xs $xs $sm',

  p: {
    color: '$mono-low-medium',
    '&:not(:last-child)': {
      marginBottom: '$sm',
    },
  },
});
