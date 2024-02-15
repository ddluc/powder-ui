/* eslint-disable react/jsx-one-expression-per-line */

import React, { ChangeEvent } from 'react';
import { Label, Slider } from './bin';
import { FormMessage } from '../Form';
import { Flex } from '../Flex';
import { Indicator } from './bin/Indicator';
import { Skeleton, isSkeleton, BaseSkeletonProps } from '../Skeleton';

export interface BaseProps {
  name: string;
  label?: string;
  id?: string;
  min?: number;
  max?: number;
  step?: number;
  thumbSize?: number;
  value?: number;
  units?: string;
  touched?: boolean;
  error?: string;
  help?: string;
  disabled?: boolean;
  hideLabel?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface SkeletonProps extends BaseSkeletonProps {
  hideLabel?: boolean;
}

export type Props = BaseProps | SkeletonProps;

// Declare the component
const RangeInput = (props: Props): JSX.Element => {
  if (isSkeleton(props)) {
    const { hideLabel } = props;
    return (
      <Flex column gap="5px">
        {!hideLabel && <Skeleton skeleton type="box" width={120} height={20} />}
        <Skeleton skeleton type="box" fluid height={20} />
      </Flex>
    );
  }

  const {
    id,
    label,
    name,
    min = 0,
    max = 0,
    step = 1,
    thumbSize = 18,
    value = 0,
    units,
    touched = false,
    error,
    help,
    disabled = false,
    hideLabel = false,
    onChange
  } = props;

  const tooltipPosition = React.useMemo(() => {
    const fraction = (value - min) / (max - min);
    return `calc(${fraction * 100}% + ${(0.5 - fraction) * thumbSize}px)`;
  }, [value, min, max]);

  // Handle out of bounds values
  if (value > max || value < min) {
    return (
      <Flex column gap="5px">
        {!hideLabel && <Skeleton skeleton type="box" width={120} height={20} />}
        <Skeleton skeleton type="box" fluid height={20} />
        <FormMessage touched error={`Please provide a value between ${min} and ${max}`} />
      </Flex>
    );
  }

  return (
    <Flex column gap="5px" width="100%">
      <Label htmlFor="range" disabled={disabled} error={!!(touched && error)} show={!hideLabel}>
        <span>{label}</span>
        <Flex column padding={['20px', '0px', '0px', '0px']} position="relative">
          <Indicator position={tooltipPosition} error={!!(touched && error)} disabled={disabled}>
            <span>
              {value} {units}
            </span>
          </Indicator>
          <Slider
            type="range"
            name={name}
            id={id}
            min={min}
            max={max}
            step={step}
            thumbSize={thumbSize}
            value={value}
            error={!!(touched && error)}
            disabled={!!disabled}
            onChange={onChange}
          />
        </Flex>
      </Label>
      <FormMessage error={error} touched={touched} help={help} />
    </Flex>
  );
};

// Export the component as the default export
export default RangeInput;
