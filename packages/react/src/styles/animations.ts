import { keyframes } from '.';

export const scaleUpCenter = keyframes({
  from: {
    transform: 'scale(0)',
  },
  to: {
    transform: 'scale(1)',
  },
});

export const scaleDownCenter = keyframes({
  from: {
    transform: 'scale(1)',
  },
  to: {
    transform: 'scale(0)',
  },
});

export const slideDown = keyframes({
  from: {
    height: 0,
  },
  to: {
    minHeight: '4.4rem',
  },
});

export const slideUp = keyframes({
  from: {
    minHeight: '4.4rem',
  },
  to: {
    height: 0,
  },
});

export const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

export const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 2.5rem)',
  },
  to: {
    transform: 'translateX(0)',
  },
});

export const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + 2.5rem)',
  },
});

export const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const rotateCenter = keyframes({
  '0%': { transform: 'rotate(0)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const rotate90 = keyframes({
  '0%': { transform: 'rotate(0)' },
  '100%': { transform: 'rotate(90deg)' },
});
