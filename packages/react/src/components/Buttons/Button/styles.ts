import { styled } from '../../../styles';
import { rotateCenter } from '../../../styles/animations';

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontFamily: '$base',
  fontStyle: '$normal',
  fontWeight: '$bold',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$mono-high-dark',
    color: '$mono-high-light',
    border: 'none',
  },

  '.loadingIcon': {
    animation: `${rotateCenter} 1s infinite ease-in-out both`,
    width: '2.2rem',
    height: '2.2rem',
  },

  variants: {
    style: {
      primary: {
        backgroundColor: '$brand-primary-pure',
        color: '$mono-high-pure',
      },
      secondary: {
        backgroundColor: '$brand-secondary-pure',
        color: '$mono-high-pure',
      },
      negative: {
        backgroundColor: '$mono-high-pure',
        color: '$mono-low-pure',
      },
      outline: {
        backgroundColor: 'transparent',
        color: '$mono-low-pure',

        borderWidth: '$hairline',
        borderStyle: 'solid',
        borderColor: '$mono-low-medium',
      },
      'outline-negative': {
        backgroundColor: 'transparent',
        color: '$mono-high-pure',

        borderWidth: '$hairline',
        borderStyle: 'solid',
        borderColor: '$mono-high-pure',
      },
    },
    size: {
      large: {
        padding: '1.2rem 1.8rem',
        gap: '$xs',

        minWidth: '8.6rem',
        minHeight: '4.9rem',
        borderRadius: '$md',

        fontSize: '$base-lg',
        lineHeight: '$lg',
      },
      regular: {
        padding: '$xs $sm',
        gap: '0.8rem',

        minWidth: '7.5rem',
        minHeight: '4.2rem',
        borderRadius: '$md',

        fontSize: '$base-md',
        lineHeight: '$lg',
      },
      small: {
        padding: '0.6rem $xs',
        gap: '$xxs',

        minWidth: '5.4rem',
        minHeight: '2.8rem',
        borderRadius: '0.6rem',

        fontSize: '$base-xs',
        lineHeight: '$md',
      },
      mini: {
        padding: '0.6rem $xs',
        gap: '$xxs',

        minWidth: '4.8rem',
        minHeight: '2.5rem',
        borderRadius: '0.6rem',

        fontSize: '$base-xxs',
        lineHeight: '$md',
      },
    },
    opacityOnHover: {
      intense: {
        '&:not(:disabled):hover': {
          opacity: '$intense',
        },
      },
      medium: {
        '&:not(:disabled):hover': {
          opacity: '$medium',
        },
      },
      light: {
        '&:not(:disabled):hover': {
          opacity: '$light',
        },
      },
      filter: {
        '&:not(:disabled):hover': {
          opacity: '$filter',
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    style: 'primary',
    size: 'regular',
    opacityOnHover: 'intense',
  },
});
