import * as MyToggleGroup from '@radix-ui/react-toggle-group';

import { styled } from '../../../styles';

export const Root = styled(MyToggleGroup.Root, {
  display: 'inline-flex',
  backgroundColor: 'transparent',

  minWidth: '33.5rem',
  minHeight: '4.2rem',
});

export const Item = styled(MyToggleGroup.Item, {
  all: 'unset',
  backgroundColor: 'transparent',
  color: '$mono-low-pure',

  borderWidth: '$hairline',
  borderStyle: 'solid',
  borderColor: '$neutral-pure',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  '&:first-child': {
    borderTopLeftRadius: '1rem',
    borderBottomLeftRadius: '1rem',
  },

  '&:last-child': {
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
  },

  '&:hover': {
    opacity: '$intense',
  },

  '&[data-state=on]': {
    backgroundColor: '$brand-primary-pure',
    color: '$mono-high-lightest',
  },

  '&[data-disabled]': {
    cursor: 'not-allowed',
    backgroundColor: '$mono-high-dark',
    color: '$mono-high-light',
  },

  variants: {
    widthLevel: {
      2: {
        minWidth: '16.8rem',
      },
      3: {
        minWidth: '11.233rem',
      },
      4: {
        minWidth: '8.45rem',
      },
      5: {
        minWidth: '6.78rem',
      },
      6: {
        minWidth: '6.78rem',
      },
      7: {
        minWidth: '4.871rem',
      },
      8: {
        minWidth: '4.275rem',
      },
      9: {
        minWidth: '3.811rem',
      },
      10: {
        minWidth: '3.44rem',
      },
      11: {
        minWidth: '3.136rem',
      },
    },
  },
});
