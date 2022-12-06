import { styled } from '../../../styles';

export const Tag = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$xxs',

  '*': {
    cursor: 'pointer',
  },

  backgroundColor: '$brand-primary-pure',

  label: {
    lineHeight: 0,
  },

  'label, svg': {
    color: '$mono-high-lightest',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    '*': {
      cursor: 'not-allowed',
    },

    backgroundColor: '$neutral-lightest',
    'label, svg': {
      color: '$mono-low-pure',
    },
  },

  variants: {
    style: {
      sm: {
        minWidth: '8.5rem',
        minHeight: '2.2rem',

        padding: '0.3rem $xxs',
        borderRadius: '$sm',
      },
      pill: {
        minWidth: '9.8rem',
        minHeight: '3.2rem',

        padding: '0.8rem 1.2rem',
        borderRadius: '10rem',
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        '*': {
          cursor: 'not-allowed',
        },

        backgroundColor: '$neutral-lightest',
        'label, svg': {
          color: '$mono-low-pure',
        },
      },
    },
  },
});
