import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import * as MySelect from '@radix-ui/react-select';
import type { ComponentProps, FocusEvent } from 'react';
import React, { useEffect, useState } from 'react';

import type { Colors } from '../../../@types';
import { SelectItem } from './SelectItem';
import * as S from './styles';

export type SelectItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type GroupedItems = {
  groupLabel: string;
  items: SelectItem[];
};

export type SelectProps = ComponentProps<typeof MySelect.Root> & {
  onFocus?: Pick<ComponentProps<typeof S.Trigger>, 'onFocus'>['onFocus'];
  onBlur?: Pick<ComponentProps<typeof S.Trigger>, 'onBlur'>['onBlur'];
  parentBgColor?: Colors | 'transparent';
  label?: string;
  helper?: string;
  required?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  ungroupedItems?: SelectItem[];
  groupedItems?: GroupedItems[];
};

export const Select = ({
  parentBgColor = '$mono-high-lightest',
  label,
  helper,
  required = false,
  error = false,
  disabled = false,
  fullWidth = false,
  ungroupedItems = [],
  groupedItems = [],
  ...props
}: SelectProps) => {
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
    setHasFocus(!!value);
    setHasError(!!error || (!value && required));
  };

  useEffect(() => {
    if (!hasFocus && !!props.value) setHasFocus(true);
  }, [hasFocus, props.value]);

  return (
    <S.Wrapper fullWidth={fullWidth} disabled={disabled}>
      <S.InputWrapper>
        {!!label && (
          <S.Label
            htmlFor={label}
            required={!!required}
            focused={hasFocus}
            error={hasError}
            disabled={disabled}
            css={{
              backgroundColor: disabled ? '$mono-high-light' : parentBgColor,
            }}
          >
            {label}
          </S.Label>
        )}

        <MySelect.Root
          name={id}
          required={!!required}
          disabled={disabled}
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
            disabled={disabled}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            css={{ backgroundColor: parentBgColor }}
          >
            <MySelect.Value>{value}</MySelect.Value>
            <S.Icon>
              <ArrowDropDownOutlinedIcon />
            </S.Icon>
          </S.Trigger>

          <MySelect.Portal>
            <S.Content css={{ backgroundColor: parentBgColor }}>
              <S.Viewport css={{ backgroundColor: parentBgColor }}>
                {groupedItems.length
                  ? groupedItems.map(({ groupLabel, items }) => (
                      <>
                        <MySelect.Group key={groupLabel}>
                          <S.GroupLabel>{groupLabel}</S.GroupLabel>

                          {items.map(item => (
                            <SelectItem
                              key={item.value}
                              value={item.label}
                              disabled={!!item.disabled}
                            />
                          ))}
                        </MySelect.Group>

                        {groupedItems?.length > 1 &&
                          groupLabel !== groupedItems.at(-1)?.groupLabel && (
                            <S.Separator />
                          )}
                      </>
                    ))
                  : ungroupedItems.map(item => (
                      <SelectItem
                        key={item.value}
                        value={item.label}
                        disabled={!!item.disabled}
                      />
                    ))}
              </S.Viewport>
            </S.Content>
          </MySelect.Portal>
        </MySelect.Root>
      </S.InputWrapper>

      {!!helper && (
        <S.Helper
          error={hasError}
          disabled={disabled}
          style='base-small-default'
        >
          {helper}
        </S.Helper>
      )}
    </S.Wrapper>
  );
};

Select.displayName = 'Select';
