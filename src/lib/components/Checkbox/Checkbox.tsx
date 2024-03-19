import React, { ReactNode } from 'react';
import { Block } from '../Block';
import { Flex } from '../Flex';
import { FormMessage } from '../Form';
import { Skeleton, isSkeleton, BaseSkeletonProps } from '../Skeleton';

import CheckIcon from './bin/assets/check.svg';
import { Input, Label } from './bin';

export interface BaseProps extends React.HTMLAttributes<HTMLInputElement> {
  name?: string;
  label: string | ReactNode;
  checked: boolean;
  value: string;
  touched?: boolean;
  error?: string;
  help?: string;
  readOnly?: boolean;
  disabled?: boolean;
  condensed?: boolean;
  asGroup?: boolean;
  a11yLabel?: string;
}

interface SkeletonProps extends BaseSkeletonProps, BaseProps {
  skeleton?: boolean;
}

export type Props = BaseProps | SkeletonProps;

const Checkbox = (props: Props): JSX.Element => {
  if (isSkeleton(props)) {
    return (
      <Flex row gap="0px 8px" alignItems="center">
        <Skeleton {...props} type="box" height={24} width={24} />
        <Skeleton {...props} type="box" height={18} width={160} />
      </Flex>
    );
  }

  const {
    name,
    label,
    checked,
    value,
    readOnly = false,
    disabled,
    condensed,
    error,
    help,
    touched,
    asGroup,
    a11yLabel,
    ...inputProps
  } = props;

  const getAriaLabel = () => (typeof label === 'string' ? label : a11yLabel);

  const showFormMessage = () => !asGroup && !condensed;

  return (
    <Block position="relative">
      <Input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        readOnly={readOnly}
        disabled={disabled || readOnly}
        aria-label={getAriaLabel()}
        aria-invalid={!!(touched && error)}
        error={!!(touched && error)}
        {...inputProps}
      />
      <Label error={!!(touched && error)} readOnly={readOnly} disabled={disabled}>
        {checked && <CheckIcon height="10px" width="10px" />}
        <span>{label}</span>
      </Label>
      {showFormMessage() && <FormMessage error={error} touched={touched} help={help} />}
    </Block>
  );
};

export default Checkbox;
