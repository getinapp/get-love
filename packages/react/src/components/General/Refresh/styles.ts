import { styled } from '../../../styles';
import { rotate90, rotateCenter } from '../../../styles/animations';

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$xxs',

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
        'p, svg': {
          color: '$mono-low-pure',
        },
      },
      loading: {
        svg: {
          animation: `${rotateCenter} 1s infinite ease-in-out both`,
        },
      },
      loaded: {
        svg: {
          animation: `${rotate90} .4s ease-in-out both`,
        },
      },
    },
  },
});
