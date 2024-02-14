/* eslint-disable react/jsx-pascal-case */

import React, { ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RangeInput, RangeInputProps } from '../index';
import { Block } from '../../Block';

export default {
  title: 'Forms/RangeInput',
  component: RangeInput,
  args: {
    label: 'Range Input',
    value: 55,
    min: 0,
    max: 100,
    units: '%',
    hideLabel: false,
    help: 'This is some help text!'
  } as RangeInputProps,
  argTypes: {
    value: { control: { type: 'range' } }
  }
} as ComponentMeta<typeof RangeInput>;

const Template: ComponentStory<typeof RangeInput> = (args: RangeInputProps) => (
  <Block width="400px">
    <RangeInput {...args} />
  </Block>
);

const ControlledTemplate: ComponentStory<typeof RangeInput> = (args: RangeInputProps) => {
  const [value, setValue] = React.useState(25);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(parseFloat(e.target.value));

  return (
    <Block width="400px">
      <RangeInput {...args} onChange={onChange} value={value} />
    </Block>
  );
};

export const AsDefault = Template.bind({});

export const AsControlledInput = ControlledTemplate.bind({});
AsControlledInput.args = {
  hideLabel: true
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Range Input',
  value: 55,
  hideLabel: false
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  label: 'Range Input',
  value: 25,
  hideLabel: false,
  error: 'Whoops! something went wrong!',
  touched: true
};

export const AsSkeleton = Template.bind({});
AsSkeleton.args = {
  skeleton: true,
  hideLabel: false
};

export const WithInvalidValue = Template.bind({});
WithInvalidValue.args = {
  label: 'Range Input',
  value: 150,
  min: 0,
  max: 100,
  hideLabel: false,
  error: 'Whoops! something went wrong!',
  touched: true
};
