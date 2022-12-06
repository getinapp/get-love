import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { ComponentProps } from 'react';

import { Text } from '../../Typography/Text';
import * as S from './styles';

export type RefreshState = 'not-loaded' | 'loading' | 'loaded';
export interface RefreshProps extends ComponentProps<typeof S.Wrapper> {
  state: RefreshState;
}

export const Refresh = ({ state, ...props }: RefreshProps) => {
  return (
    <S.Wrapper {...props} state={state}>
      <Text style='base-small-default'>
        {(state === 'not-loaded' && 'Atualizar') ||
          (state === 'loading' && 'Atualizando...') ||
          (state === 'loaded' && 'Atualizado') ||
          ''}
      </Text>

      <CachedOutlinedIcon />
    </S.Wrapper>
  );
};

Refresh.displayName = 'Refresh';
