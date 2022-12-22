import type { ComponentProps } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import type { Colors } from '../../../@types';
import * as S from '../TextInput/styles';
import { Input } from './styles';

export type TextInputMaskProps = ComponentProps<typeof Input> & {
  parentBgColor?: Colors | 'transparent';
  label?: string;
  helper?: string;
  error?: boolean;
  required?: boolean;
  fullWidth?: boolean;
};

export const TextInputMask = ({
  parentBgColor = '$mono-high-lightest',
  label,
  helper,
  error = false,
  required = false,
  fullWidth = false,
  ...props
}: TextInputMaskProps) => {
  const id = label ? label.toLowerCase().replaceAll(' ', '-') : '';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputRef = useRef<any>(null);

  const [hasInputFocused, setHasInputFocused] = useState<boolean>(
    !!props.value
  );
  const [hasColorFocused, setHasColorFocused] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(!!error);

  const handleOnFocus = () => {
    if (!inputRef.current?.element?.value) {
      setHasInputFocused(true);
      setHasColorFocused(true);
    }
  };

  const handleOnBlur = () => {
    setHasInputFocused(!!inputRef.current?.element?.value);
    setHasColorFocused(false);
    setHasError(!!error || (!inputRef.current?.element?.value && !!required));
  };

  useEffect(() => {
    if (!hasInputFocused && !!props.value) setHasInputFocused(true);
  }, [hasInputFocused, props.value]);

  return (
    <S.Wrapper fullWidth={fullWidth} disabled={!!props.disabled}>
      <S.InputWrapper
        id={id}
        title={label}
        onClick={handleOnFocus}
        onBlur={handleOnBlur}
      >
        {!!label && (
          <S.Label
            htmlFor={label}
            required={!!required}
            focused={hasInputFocused}
            hasColorFocused={hasColorFocused}
            error={hasError}
            disabled={!!props.disabled}
            css={{ backgroundColor: parentBgColor }}
          >
            {label}
          </S.Label>
        )}

        <Input
          ref={inputRef}
          fullWidth={fullWidth}
          focused={hasInputFocused}
          hasColorFocused={hasColorFocused}
          error={hasError}
          disabled={!!props.disabled}
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

TextInputMask.displayName = 'TextInputMask';
