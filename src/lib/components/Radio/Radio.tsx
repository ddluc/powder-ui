import React from 'react';
import { Block } from '../Block';
import { Flex } from '../Flex';
import { Skeleton, isSkeleton, BaseSkeletonProps } from '../Skeleton';

import CircleSVG from './bin/assets/circle.svg';

import { Input, Label } from './bin';

interface BaseProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
  value: string;
  name?: string;
  enabled?: boolean;
  touched?: boolean;
  error?: string;
  disabled?: boolean;
  display?: 'normal' | 'card';
  a11yLabel?: string;
}

interface SkeletonProps extends BaseSkeletonProps, BaseProps {
  skeleton?: boolean;
}

export type Props = BaseProps | SkeletonProps;

const Radio = (props: Props): JSX.Element => {
  if (isSkeleton(props)) {
    return (
      <Flex row gap="0px 8px" alignItems="center">
        <Skeleton {...props} type="box" height={18} width={18} />
        <Skeleton {...props} type="box" height={18} width={160} />
      </Flex>
    );
  }

  const {
    name,
    label,
    enabled,
    disabled,
    error,
    value,
    touched,
    display = 'normal',
    a11yLabel,
    ...inputProps
  } = props;

  const getAriaLabel = () => (typeof label === 'string' ? label : a11yLabel);

  return (
    <Block position="relative">
      <Input
        id={value}
        type="radio"
        name={name}
        checked={enabled}
        disabled={disabled}
        aria-label={getAriaLabel()}
        aria-invalid={!!(touched && error)}
        error={!!(touched && error)}
        onChange={() => {}}
        {...inputProps}
      />
      <Label htmlFor={value} error={!!(touched && error)} disabled={disabled} display={display}>
        {enabled && <CircleSVG height="10px" width="10px" />}
        <span>{label}</span>
      </Label>
    </Block>
  );
};

// Export the component as the default export
export default Radio;
