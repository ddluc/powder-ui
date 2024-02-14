/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { Block } from '../Block';
import { Flex } from '../Flex';
import { Label } from '../Label';
import { FormMessage } from '../Form';
import { Spacer } from '../Spacer';
import { Skeleton, isSkeleton, BaseSkeletonProps } from '../Skeleton';

import { Input, Dropdown, Option, DisabledOption } from './bin';

import ArrowIcon from './bin/assets/arrow.svg';

export type SelectOption = { value: string; label: string };

export type BaseProps = {
  name: string;
  label: string;
  options: SelectOption[];
  value?: string | null;
  placeholder?: string;
  hideLabel?: boolean;
  animated?: boolean;
  disabled?: boolean;
  touched?: boolean;
  error?: string;
  help?: string;
  condensed?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
};

interface SkeletonProps extends BaseSkeletonProps, BaseProps {
  skeleton?: boolean;
}

export type Props = BaseProps | SkeletonProps;

const Select = forwardRef<HTMLSelectElement, Props>((props: Props, ref): JSX.Element => {
  if (isSkeleton(props)) {
    const { animated, hideLabel, condensed = false } = props;
    return (
      <Flex column gap="8px 0px">
        {!(animated || hideLabel) && <Skeleton {...props} type="box" height={14} width={140} />}
        <Skeleton {...props} type="box" height={40} fluid />
        {!condensed && <Spacer spacing={4} />}
      </Flex>
    );
  }

  const {
    name,
    value,
    label,
    options,
    placeholder,
    hideLabel = false,
    animated = false,
    disabled = false,
    touched = false,
    error,
    help,
    condensed,
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {}
  } = props;

  const [isFocused, setIsFocused] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setIsFocused(false);
    setIsOpen(false);
    onChange(event);
  };

  const onFocusHandler = (event: React.FocusEvent<HTMLSelectElement>) => {
    setIsFocused(true);
    onFocus(event);
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLSelectElement>) => {
    setIsFocused(false);
    setIsOpen(false);
    onBlur(event);
  };

  const onClickHandler = () => {
    setIsOpen(true);
  };

  const hasError = (): boolean => touched && !!error;

  const hasValue = (): boolean => !!value;

  const renderOptions = () =>
    options.map((option) => (
      <Option key={option.value} value={option.value}>
        {option.label}
      </Option>
    ));

  const renderPlaceholder = () => {
    if (placeholder)
      return (
        <DisabledOption value="default" disabled>
          {placeholder}
        </DisabledOption>
      );
    return (
      <DisabledOption value="default" disabled>
        {label}
      </DisabledOption>
    );
  };

  return (
    <Block>
      <Label
        value={label}
        htmlFor={name}
        disabled={disabled}
        error={hasError()}
        hideLabel={hideLabel || (animated && !hasValue())}
        animated={animated}
        isFocused={isFocused}
        isActive={isFocused || hasValue()}
        position={{ x: 8, y: 12 }}
        transpose={{ x: -8, y: -20 }}
        scale={0.8}
      >
        <Block position="relative">
          <Input
            name={name}
            id={name}
            disabled={disabled}
            error={hasError()}
            onChange={onChangeHandler}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            onClick={onClickHandler}
            value={value || 'default'}
            ref={ref}
          >
            {renderPlaceholder()}
            {renderOptions()}
          </Input>
          <Dropdown error={hasError()} animated={animated} focused={isFocused} open={isOpen}>
            <ArrowIcon height="16px" width="16px" />
          </Dropdown>
        </Block>
        {!condensed && <FormMessage error={error} touched={touched} help={help} />}
      </Label>
    </Block>
  );
});

export default Select;
