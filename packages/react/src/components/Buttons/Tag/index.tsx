import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import type { VariantProps } from '@stitches/react';
import type { ComponentProps } from 'react';
import React from 'react';

import { Text } from '../../Typography/Text';
import * as S from './styles';

export type TagVariants = VariantProps<typeof S.Tag>;
export type TagProps = ComponentProps<typeof S.Tag> & {
  style: NonNullable<TagVariants['style']>;
  label: string;
  onClose: () => void;
};

export const Tag = ({ label, onClose, ...props }: TagProps) => {
  return (
    <S.Tag {...props}>
      <Text as='label' style='base-small-default'>
        {label}
      </Text>
      <CloseOutlinedIcon onClick={!props.disabled ? onClose : undefined} />
    </S.Tag>
  );
};

Tag.displayName = 'Tag';
