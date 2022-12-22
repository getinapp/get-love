import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import type { VariantProps } from '@stitches/react';
import type { ComponentProps, ReactNode } from 'react';

import { Heading } from '../../Typography/Heading';
import { Text } from '../../Typography/Text';
import * as S from './styles';
import { AlertProvider } from './styles';

export type AlertVariants = VariantProps<typeof S.Root>;
export interface AlertProps extends ComponentProps<typeof S.Root> {
  heading: string | ReactNode;
  description?: string;
  variant: NonNullable<AlertVariants['variant']>;
}

const Alert = ({ heading, description, variant, ...props }: AlertProps) => {
  return (
    <>
      <S.Root {...props} variant={variant}>
        <S.Flex>
          {typeof heading === 'string' ? (
            <S.Title asChild>
              <Heading size='h6'>{heading}</Heading>
            </S.Title>
          ) : (
            heading
          )}

          <S.Action asChild altText='Close'>
            <CloseOutlinedIcon />
          </S.Action>
        </S.Flex>

        {!!description && (
          <S.Description asChild>
            <Text style='base-small-default'>{description}</Text>
          </S.Description>
        )}
      </S.Root>

      <S.Viewport />
    </>
  );
};

Alert.displayName = 'Alert';

export { AlertProvider, Alert };
