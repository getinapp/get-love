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

  gap: '0.6rem',

  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
});

export const Item = styled(RadioGroup.Item, {
  width: '$sm',
  height: '$sm',
  backgroundColor: '$mono-high-pure',
  borderRadius: '$circular',

  borderWidth: '$hairline',
  borderStyle: 'solid',
  borderColor: '$mono-low-medium',

  variants: {
    disabled: {
      true: {
        borderColor: '$mono-low-light',
        backgroundColor: '$mono-high-light',
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
    disabled: {
      true: {
        backgroundColor: '$mono-high-light',
      },
    },
  },
});

export const Label = styled(Text, {
  lineHeight: 0,
  userSelect: 'none',

  variants: {
    disabled: {
      true: {
        color: '$mono-low-light',
        pointerEvents: 'none',
      },
    },
  },
});
