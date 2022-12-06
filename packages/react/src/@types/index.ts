/* eslint-disable @typescript-eslint/no-explicit-any */
import { colors, spacings } from '@getlove/tokens';
import { ComponentProps, ElementType, JSXElementConstructor } from 'react';

export type MyComponentProps<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
> = ComponentProps<T> & {
  as?: ElementType;
};

export type Concat<S1 extends string, S2 extends string> = `${S1}${S2}`;

type ColorTokens = keyof typeof colors;
type SpacingTokens = keyof typeof spacings;

export type Colors = Concat<'$', ColorTokens>;
export type Spacings = Concat<'$', SpacingTokens>;
