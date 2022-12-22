import type { VariantProps } from '@stitches/react';
import type { ReactNode } from 'react';
import React from 'react';

import { MyComponentProps } from '../../../@types';
import * as S from './styles';

export type HeadingVariants = VariantProps<typeof S.Title>;
export interface HeadingProps extends MyComponentProps<typeof S.Title> {
  size: NonNullable<HeadingVariants['size']>;
  children: ReactNode;
}

export const Heading = ({ size, children, ...props }: HeadingProps) => (
  <S.Title size={size} as={size} {...props}>
    {children}
  </S.Title>
);

Heading.displayName = 'Heading';
