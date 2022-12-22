import type { ComponentProps, FocusEvent } from 'react';
import React, { useEffect, useState } from 'react';

import type { Colors } from '../../../@types';
import * as S from './styles';

export type TextInputProps = ComponentProps<typeof S.Input> & {
  parentBgColor?: Colors | 'transparent';
  label?: string;
  helper?: string;
  error?: boolean;
  fullWidth?: boolean;
};

export const TextInput = ({
  parentBgColor = '$mono-high-lightest',
  label,
  helper,
  error = false,
  fullWidth = false,
  ...props
}: TextInputProps) => {
  const id = label ? label.toLowerCase().replaceAll(' ', '-') : '';

  const [hasInputFocused, setHasInputFocused] = useState<boolean>(
    !!props.value || !!props.placeholder
  );
  const [hasColorFocused, setHasColorFocused] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(!!error);

  const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (props.onFocus) props.onFocus(e);
    setHasInputFocused(true);
    setHasColorFocused(true);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (props.onBlur) props.onBlur(e);
    setHasInputFocused(!!e.target?.value.length || !!e.target?.placeholder);
    setHasColorFocused(false);
    setHasError(!!error || (!e.target?.value.length && !!props.required));
  };

  useEffect(() => {
    if (!hasInputFocused && (!!props.value || !!props.placeholder)) {
      setHasInputFocused(true);
    }
  }, [hasInputFocused, props.value, props.placeholder]);

  return (
    <S.Wrapper fullWidth={fullWidth} disabled={!!props.disabled}>
      <S.InputWrapper>
        {!!label && (
          <S.Label
            htmlFor={label}
            required={!!props.required}
            focused={hasInputFocused}
            hasColorFocused={hasColorFocused}
            error={hasError}
            disabled={!!props.disabled}
            css={{ backgroundColor: parentBgColor }}
          >
            {label}
          </S.Label>
        )}

        <S.Input
          id={id}
          name={label}
          title={label}
          fullWidth={fullWidth}
          focused={hasInputFocused}
          hasColorFocused={hasColorFocused}
          error={hasError}
          disabled={!!props.disabled}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          css={{ backgroundColor: parentBgColor }}
          {...props}
        />
      </S.InputWrapper>

      {!!helper && (
        <S.Helper
          error={hasError}
          disabled={!!props.disabled}
          style='base-small-default'
        >
          {helper}
        </S.Helper>
      )}
    </S.Wrapper>
  );
};

TextInput.displayName = 'TextInput';
