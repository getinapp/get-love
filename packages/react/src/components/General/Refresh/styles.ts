import { styled } from '../../../styles';
import { rotate90, rotateCenter } from '../../../styles/animations';

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$xxs',

  userSelect: 'none',

  'p, svg': {
    color: '$mono-low-light',
  },
  svg: {
    width: '1.6rem',
    height: '1.6rem',
  },

  variants: {
    state: {
      'not-loaded': {
        cursor: 'default',
        'p, svg': {
          color: '$mono-low-pure',
        },
      },
      loading: {
        cursor: 'wait',
        svg: {
          animation: `${rotateCenter} 1s infinite ease-in-out both`,
        },
      },
      loaded: {
        cursor: 'default',
        svg: {
          animation: `${rotate90} .4s ease-in-out both`,
        },
      },
    },
  },
});
