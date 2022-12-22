import type { VariantProps } from '@stitches/react';
import type { ComponentProps } from 'react';
import React from 'react';

import * as S from './styles';

export type AvatarVariants = VariantProps<typeof S.Container>;
export interface AvatarProps extends ComponentProps<typeof S.Image> {
  size: NonNullable<AvatarVariants['size']>;
  src: ComponentProps<typeof S.Image>['src'];
  alt: ComponentProps<typeof S.Image>['alt'];
}

export const Avatar = ({ size, src, alt, ...props }: AvatarProps) => (
  <S.Wrapper size={size}>
    <S.Container size={size}>
      <S.Image {...props} src={src} alt={alt} />

      <S.Fallback delayMs={600}>
        <S.PersonIcon size={size} />
      </S.Fallback>
    </S.Container>

    <S.VerifiedIcon size={size} />
  </S.Wrapper>
);

Avatar.displayName = 'Avatar';
