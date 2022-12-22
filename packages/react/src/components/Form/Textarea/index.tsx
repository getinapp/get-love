import type { ComponentProps, FocusEvent, TextareaHTMLAttributes } from 'react';
import React, { useEffect, useState } from 'react';

import type { Colors } from '../../../@types';
import * as S from './styles';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  ComponentProps<typeof S.Textarea> & {
    parentBgColor?: Colors | 'transparent';
    label?: string;
    error?: boolean;
    fullWidth?: boolean;
  };

export const Textarea = ({
  parentBgColor = '$mono-high-lightest',
  label,
  error = false,
  fullWidth = false,
  ...props
}: TextareaProps) => {
  const [hasInputFocused, setHasInputFocused] = useState<boolean>(
    !!props.value || !!props.placeholder
  );
  const [hasColorFocused, setHasColorFocused] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(!!error);

  const handleOnFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    if (props.onFocus) props.onFocus(e);
    setHasInputFocused(true);
    setHasColorFocused(true);
  };

  const handleOnBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
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
            css={{ backgroundColor: parentBgColor }}
            required={!!props.required}
            focused={hasInputFocused}
            hasColorFocused={hasColorFocused}
            error={hasError}
            disabled={!!props.disabled}
          >
            {label}
          </S.Label>
        )}

        <S.Textarea
          css={{ backgroundColor: parentBgColor }}
          fullWidth={fullWidth}
          focused={hasInputFocused}
          hasColorFocused={hasColorFocused}
          error={hasError}
          disabled={!!props.disabled}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          id={label}
          name={label}
          title={label}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

Textarea.displayName = 'Textarea';
