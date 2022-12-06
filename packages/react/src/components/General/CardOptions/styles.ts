import * as RadioGroup from '@radix-ui/react-radio-group';

import { styled } from '../../../styles';
import { scaleDownCenter, scaleUpCenter } from '../../../styles/animations';
import { Text } from '../../Typography/Text';

export const Wrapper = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$xs',

  width: 'fit-content',
});

export const ItemWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  padding: '$sm',
  gap: '$sm',

  minWidth: '34rem',
  minHeight: '7rem',

  borderWidth: '$hairline',
  borderStyle: 'solid',
  borderColor: '$mono-high-pure',

  borderRadius: '$md',

  cursor: 'pointer',

  '&:hover': {
    p: {
      color: '$mono-low-pure',
    },
  },

  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
    checked: {
      true: {
        borderColor: '$mono-low-light',
      },
    },
  },
});

export const Item = styled(RadioGroup.Item, {
  width: '$sm',
  height: '$sm',
  backgroundColor: '$mono-high-lightest',
  borderRadius: '$circular',

  borderWidth: '$hairline',
  borderStyle: 'solid',
  borderColor: '$neutral-pure',

  variants: {
    checked: {
      true: {
        borderColor: '$mono-high-pure',
      },
    },
    disabled: {
      true: {
        pointerEvents: 'none',
      },
    },
  },
});

export const Indicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  borderRadius: '$circular',

  '&[data-state="checked"]': {
    animation: `${scaleUpCenter} .15s cubic-bezier(.55,.085,.68,.53) both`,
  },

  '&[data-state="unchecked"]': {
    animation: `${scaleDownCenter} .15s cubic-bezier(.25,.46,.45,.94) both`,
  },

  variants: {
    checked: {
      true: {
        backgroundColor: '$brand-primary-pure',
      },
    },
  },
});

export const InfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
      },
    },
  },
});

export const Title = styled(Text, {
  lineHeight: 0,
  userSelect: 'none',
  cursor: 'inherit',
});

export const Description = styled(Text, {
  marginTop: '2.5rem',

  lineHeight: 0,
  userSelect: 'none',
  color: '$mono-low-medium',

  variants: {
    checked: {
      true: {
        color: '$mono-low-pure',
      },
    },
  },
});
