import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import * as MySelect from '@radix-ui/react-select';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';

import * as S from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SelectItem = forwardRef<any, ComponentProps<typeof S.Item>>(
  (props, forwardedRef) => {
    return (
      <S.Item {...props} ref={forwardedRef}>
        <MySelect.ItemText>{props.value}</MySelect.ItemText>
        <MySelect.ItemIndicator>
          <CheckRoundedIcon />
        </MySelect.ItemIndicator>
      </S.Item>
    );
  }
);
