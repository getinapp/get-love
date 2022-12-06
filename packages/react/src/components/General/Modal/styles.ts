import { colors } from '@getlove/tokens';
import * as MyDialog from '@radix-ui/react-dialog';

import { styled } from '../../../styles';
import { contentShow, overlayShow } from '../../../styles/animations';

export const Root = styled(MyDialog.Root);

export const Overlay = styled(MyDialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, .45)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const Content = styled(MyDialog.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxHeight: '85vh',
  padding: '2.5rem',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': {
    outline: 'none',
  },
});

export const Title = styled(MyDialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: '$mono-low-pure',
  fontSize: 17,
});

export const Description = styled(MyDialog.Description, {
  marginTop: '$xs',
  color: '$mono-low-medium',
});

export const ChildrenWrapper = styled('main', {
  marginTop: '2rem',
  color: '$mono-low-pure',
});

export const IconButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: '2.5rem',
  width: '2.5rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$mono-low-pure',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': {
    backgroundColor: '$mono-high-pure',
  },

  '&:focus': {
    boxShadow: `0 0 0 2px ${colors['mono-high-pure']}`,
  },

  svg: {
    color: '$mono-low-pure',
    width: '$sm',
    height: '$sm',
  },
});
