import React from 'react';
import { FormMessage, Fieldset, Legend } from '../Form';
import { Flex } from '../Flex';
import { Skeleton, isSkeleton, BaseSkeletonProps } from '../Skeleton';

import Radio from './Radio';

export interface BaseProps {
  legend: string;
  name: string;
  touched?: boolean;
  error?: string;
  help?: string;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  border?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLFieldSetElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLFieldSetElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLFieldSetElement>) => void;
  children: React.ReactNode;
}

interface SkeletonProps extends BaseSkeletonProps, BaseProps {
  skeleton?: boolean;
}

export type Props = SkeletonProps | BaseProps;

const RadioGroup = (props: Props): JSX.Element => {
  if (isSkeleton(props)) {
    const { children } = props;
    return (
      <Flex
        column
        gap="12px 0px"
        padding={['12px', '12px', '12px', '12px']}
        margin={['0px', '0px', '10px', '4px']}
      >
        <Skeleton skeleton type="box" height={20} fluid />
        {React.Children.map(children, () => (
          <Radio skeleton label="" value="" />
        ))}
      </Flex>
    );
  }

  const {
    name,
    legend,
    error,
    help,
    touched,
    disabled,
    direction = 'vertical',
    border = true,
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    children
  } = props;

  const RadioButtons = React.Children.map(children, (child: React.ReactElement<BaseProps>) => {
    if (React.isValidElement(child)) {
      // Pass shared props to child radio elements
      return React.cloneElement(child, {
        name,
        error,
        touched,
        disabled
      });
    }
    return child;
  });

  return (
    <>
      <Fieldset
        border={border}
        direction={direction}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        error={!!(touched && error)}
      >
        <Legend error={!!(touched && error)}>{legend}</Legend>
        {RadioButtons}
      </Fieldset>
      <FormMessage error={error} touched={touched} help={help} />
    </>
  );
};

// Export the component as the default export
export default RadioGroup;
