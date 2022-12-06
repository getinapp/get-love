import { styled } from '../../../styles';

export const Title = styled('h2', {
  fontFamily: '$base',
  fontStyle: '$normal',

  fontWeight: '$bold',
  color: '$black-pure',

  variants: {
    size: {
      h1: {
        fontSize: '$base-xxxl',
        lineHeight: '$sm',
      },
      h2: {
        fontSize: '$base-xxl',
        lineHeight: '$md',
      },
      h3: {
        fontSize: '$base-xl',
        lineHeight: '$md',
      },
      h4: {
        fontSize: '$base-lg',
        lineHeight: '$md',
      },
      h5: {
        fontSize: '$base-md',
        lineHeight: '$md',
      },
      h6: {
        fontSize: '$base-sm',
        lineHeight: '$lg',
      },
    },
  },

  defaultVariants: {
    size: 'h2',
  },
});
