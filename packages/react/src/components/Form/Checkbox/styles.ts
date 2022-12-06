import * as Checkbox from '@radix-ui/react-checkbox';

import { styled } from '../../../styles';
import { scaleDownCenter, scaleUpCenter } from '../../../styles/animations';
import { Text } from '../../Typography/Text';

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '0.6rem',
  width: 'fit-content',
  height: 'fit-content',

  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
});

export const Root = styled(Checkbox.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '$sm',
  height: '$sm',

  borderWidth: '$hairline',
  borderStyle: 'solid',
  borderColor: '$mono-low-medium',

  backgroundColor: '$mono-high-pure',
  borderRadius: '$sm',

  overflow: 'hidden',

  variants: {
    checked: {
      true: {
        backgroundColor: '$brand-primary-pure',
      },
    },
    disabled: {
      true: {
        backgroundColor: '$mono-high-light',
        borderColor: '$mono-low-light',
        pointerEvents: 'none',
      },
    },
  },
});

export const Indicator = styled(Checkbox.Indicator, {
  '&[data-state="checked"]': {
    animation: `${scaleUpCenter} .15s cubic-bezier(.55,.085,.68,.53) both`,
  },

  '&[data-state="unchecked"]': {
    animation: `${scaleDownCenter} .15s cubic-bezier(.25,.46,.45,.94) both`,
  },
});

export const Checked = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: '$brand-primary-pure',
  borderRadius: '0.2rem',

  variants: {
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
