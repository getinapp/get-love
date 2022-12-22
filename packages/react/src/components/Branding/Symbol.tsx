import { colors } from '@getlove/tokens';
import React from 'react';

import { Wrapper } from '../Illustrations/styles';

export type SymbolProps = {
  version: 'primary' | 'secondary' | 'neutral';
};

export const Symbol = ({ version }: SymbolProps) => {
  const symbolColor =
    (version === 'primary' && colors['brand-primary-pure']) ||
    (version === 'secondary' && colors['brand-secondary-light']) ||
    (version === 'neutral' && colors['neutral-pure']) ||
    colors['brand-primary-pure'];

  return (
    <Wrapper>
      <svg
        width='15'
        height='23'
        viewBox='0 0 15 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id='symbol'
        aria-labelledby='symbolTitle symbolDesc'
        role='img'
      >
        <title id='symbolTitle'>get in symbol</title>
        <desc id='symbolDesc'>The get in symbol (is greater than)</desc>
        <path
          d='M0.970276 0.745636V5.55788L8.80997 11.7658L0.970276 17.9708V22.786L14.8915 11.7658L0.970276 0.745636Z'
          fill={symbolColor}
        />
      </svg>
    </Wrapper>
  );
};

Symbol.displayName = 'Symbol';
