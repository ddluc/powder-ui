import React from 'react';
import { FormMessage, Fieldset, Legend } from '../Form';
import { Flex } from '../Flex';
import { Skeleton, isSkeleton, BaseSkeletonProps } from '../Skeleton';

import Checkbox from './Checkbox';

export interface BaseProps {
  legend: string;
  name: string;
  touched?: boolean;
  error?: string;
  help?: string;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  border?: boolean;
  children: React.ReactNode;
}

interface SkeletonProps extends BaseSkeletonProps, BaseProps {
  skeleton?: boolean;
}

export type Props = SkeletonProps | BaseProps;

const CheckboxGroup = (props: Props): JSX.Element => {
  if (isSkeleton(props)) {
    const { children } = props;
    return (
      <Flex
        column
        gap="5px 0px"
        padding={['12px', '12px', '12px', '12px']}
        margin={['0px', '0px', '10px', '4px']}
      >
        <Skeleton skeleton type="box" height={20} fluid />
        {React.Children.map(children, () => (
          <Checkbox skeleton label="" value="" checked />
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
    children
  } = props;

  const CheckBoxes = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Pass shared props to child checkbox elements
      return React.cloneElement<any>(child, {
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
      <Fieldset border={border} direction={direction} error={!!(touched && error)}>
        <Legend error={!!(touched && error)}>{legend}</Legend>
        {CheckBoxes}
      </Fieldset>
      <FormMessage error={error} touched={touched} help={help} />
    </>
  );
};

// Export the component as the default export
export default CheckboxGroup;
