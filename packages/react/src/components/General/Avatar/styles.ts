import MyPersonIcon from '@mui/icons-material/Person';
import MyVerifiedIcon from '@mui/icons-material/Verified';
import * as Avatar from '@radix-ui/react-avatar';

import { styled } from '../../../styles';

export const Wrapper = styled('div', {
  position: 'relative',
  display: 'inline-block',

  variants: {
    size: {
      xxl: {
        width: '$xxl',
        height: '$xxl',
      },
      xl: {
        width: '9.5rem',
        height: '9.5rem',
      },
      lg: {
        width: '8rem',
        height: '8rem',
      },
      md: {
        width: '6.4rem',
        height: '6.4rem',
      },
      sm: {
        width: '4.8rem',
        height: '4.8rem',
      },
      xs: {
        width: '4rem',
        height: '4rem',
      },
      xxs: {
        width: '3.2rem',
        height: '3.2rem',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const Container = styled(Avatar.Root, {
  display: 'inline-block',
  overflow: 'hidden',

  borderRadius: '$circular',
  filter: '$drop-shadow-level-1',

  variants: {
    size: {
      xxl: {
        width: '$xxl',
        height: '$xxl',
      },
      xl: {
        width: '9.5rem',
        height: '9.5rem',
      },
      lg: {
        width: '8rem',
        height: '8rem',
      },
      md: {
        width: '6.4rem',
        height: '6.4rem',
      },
      sm: {
        width: '4.8rem',
        height: '4.8rem',
      },
      xs: {
        width: '4rem',
        height: '4rem',
      },
      xxs: {
        width: '3.2rem',
        height: '3.2rem',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const Image = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
  display: 'inline-block',
});

export const Fallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$mono-low-light',

  svg: {
    width: '3.2rem',
    height: '3.2rem',
  },
});

export const PersonIcon = styled(MyPersonIcon, {
  zIndex: 2,

  variants: {
    size: {
      xxl: {
        width: '3.2rem !important',
        height: '3.2rem !important',

        top: 90,
        left: 89,
      },
      xl: {
        width: '2.6rem !important',
        height: '2.6rem !important',

        top: 74,
        left: 70,
      },
      lg: {
        width: '2.4rem !important',
        height: '2.4rem !important',

        top: 61,
        left: 57,
      },
      md: {
        width: '2.2rem !important',
        height: '2.2rem !important',

        top: 47,
        left: 42.5,
      },
      sm: {
        width: '1.6rem !important',
        height: '1.6rem !important',

        top: 37,
        left: 32.5,
      },
      xs: {
        width: '1.4rem !important',
        height: '1.4rem !important',

        top: 31,
        left: 26,
      },
      xxs: {
        width: '1rem !important',
        height: '1rem !important',

        top: 27,
        left: 22,
      },
    },
  },
});

export const VerifiedIcon = styled(MyVerifiedIcon, {
  position: 'absolute',

  color: '$brand-secondary-light',
  zIndex: 2,

  variants: {
    size: {
      xxl: {
        width: '3.2rem !important',
        height: '3.2rem !important',

        top: 90,
        left: 89,
      },
      xl: {
        width: '2.6rem !important',
        height: '2.6rem !important',

        top: 74,
        left: 70,
      },
      lg: {
        width: '2.4rem !important',
        height: '2.4rem !important',

        top: 61,
        left: 57,
      },
      md: {
        width: '2.2rem !important',
        height: '2.2rem !important',

        top: 47,
        left: 42.5,
      },
      sm: {
        width: '1.6rem !important',
        height: '1.6rem !important',

        top: 37,
        left: 32.5,
      },
      xs: {
        width: '1.4rem !important',
        height: '1.4rem !important',

        top: 31,
        left: 26,
      },
      xxs: {
        width: '1rem !important',
        height: '1rem !important',

        top: 27,
        left: 22,
      },
    },
  },
});
