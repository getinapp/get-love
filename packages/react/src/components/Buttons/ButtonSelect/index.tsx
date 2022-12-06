import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import * as MySelect from '@radix-ui/react-select';
import { ComponentProps, FocusEvent, useEffect, useState } from 'react';

import type { Colors } from '../../../@types';
import { ButtonSelectItem } from './ButtonSelectItem';
import * as S from './styles';

export type ButtonSelectItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type ButtonSelectProps = ComponentProps<typeof MySelect.Root> & {
  onFocus?: Pick<ComponentProps<typeof S.Trigger>, 'onFocus'>['onFocus'];
  onBlur?: Pick<ComponentProps<typeof S.Trigger>, 'onBlur'>['onBlur'];
  parentBgColor?: Colors | 'transparent';
  label?: string;
  required?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  items: ButtonSelectItem[];
};

export const ButtonSelect = ({
  parentBgColor = '$mono-high-lightest',
  label,
  required = false,
  error = false,
  fullWidth = false,
  items,
  ...props
}: ButtonSelectProps) => {
  const id = label ? label.toLowerCase().replaceAll(' ', '-') : '';

  const [hasError, setHasError] = useState<boolean>(!!error);
  const [hasFocus, setHasFocus] = useState<boolean>(!!props.value);
  const [value, setValue] = useState<string>('');

  const handleOnFocus = (e: FocusEvent<HTMLButtonElement>) => {
    if (props.onFocus) props.onFocus(e);
    setHasFocus(!!value);
  };

  const handleOnBlur = (e: FocusEvent<HTMLButtonElement>) => {
    if (props.onBlur) props.onBlur(e);
    setHasFocus(false);
    setHasError(!!error || (!value && required));
  };

  useEffect(() => {
    if (!hasFocus && !!props.value) setHasFocus(true);
  }, [hasFocus, props.value]);

  return (
    <S.Wrapper fullWidth={fullWidth} disabled={!!props.disabled}>
      <MySelect.Root
        name={id}
        required={!!required}
        disabled={!!props.disabled}
        value={value}
        onValueChange={value => setValue(value)}
      >
        <S.Trigger
          aria-label={id}
          id={id}
          name={id}
          title={label}
          fullWidth={fullWidth}
          focused={hasFocus}
          error={hasError}
          disabled={!!props.disabled}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          css={{ backgroundColor: parentBgColor }}
        >
          <MySelect.Value>{value || label}</MySelect.Value>
          <S.Icon>
            <ArrowDropDownOutlinedIcon />
          </S.Icon>
        </S.Trigger>

        <MySelect.Portal>
          <S.Content css={{ backgroundColor: parentBgColor }}>
            <S.Viewport css={{ backgroundColor: parentBgColor }}>
              {items.map(item => (
                <ButtonSelectItem
                  key={item.value}
                  value={item.label}
                  disabled={!!item.disabled}
                />
              ))}
            </S.Viewport>
          </S.Content>
        </MySelect.Portal>
      </MySelect.Root>
    </S.Wrapper>
  );
};

ButtonSelect.displayName = 'ButtonSelect';
