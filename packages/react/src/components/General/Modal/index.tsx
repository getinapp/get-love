import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import * as MyDialog from '@radix-ui/react-dialog';
import { Property } from '@stitches/react/types/css';
import type { ComponentProps, ReactNode } from 'react';
import { useState } from 'react';

import { Heading } from '../../Typography/Heading';
import { Text } from '../../Typography/Text';
import * as S from './styles';

export interface ModalProps extends ComponentProps<typeof MyDialog.Root> {
  heading: string | ReactNode;
  description?: string;
  maxWidth?: Property.MaxWidth;
  children: ReactNode;
}

export const Modal = ({
  heading,
  description,
  maxWidth,
  children,
  ...props
}: ModalProps) => {
  const [open, setOpen] = useState(true);

  return (
    <MyDialog.Root open={open} onOpenChange={open => setOpen(open)} {...props}>
      <MyDialog.Portal>
        <S.Overlay />

        <S.Content css={{ maxWidth: maxWidth || '45rem' }}>
          {typeof heading === 'string' ? (
            <S.Title asChild>
              <Heading size='h2'>{heading}</Heading>
            </S.Title>
          ) : (
            heading
          )}

          {!!description && (
            <S.Description asChild>
              <Text style='base-small-default'>{description}</Text>
            </S.Description>
          )}

          <S.ChildrenWrapper>{children}</S.ChildrenWrapper>

          <MyDialog.Close asChild>
            <S.IconButton aria-label='close'>
              <CloseOutlinedIcon />
            </S.IconButton>
          </MyDialog.Close>
        </S.Content>
      </MyDialog.Portal>
    </MyDialog.Root>
  );
};

Modal.displayName = 'Modal';
