import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import type { VariantProps } from '@stitches/react';
import type { ComponentProps, ReactNode } from 'react';

import * as S from './styles';

export type ButtonVariants = VariantProps<typeof S.Button>;
export type ButtonProps = ComponentProps<typeof S.Button> & {
  style: NonNullable<ButtonVariants['style']>;
  size: NonNullable<ButtonVariants['size']>;
  isLoading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
};

export const Button = ({
  style,
  size,
  isLoading = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      style={style}
      size={size}
      {...props}
      disabled={isLoading || !!props.disabled}
    >
      {isLoading ? (
        <>
          <span>Carregando</span>
          <CachedOutlinedIcon className='loadingIcon' />
        </>
      ) : (
        children
      )}
    </S.Button>
  );
};

Button.displayName = 'Button';
