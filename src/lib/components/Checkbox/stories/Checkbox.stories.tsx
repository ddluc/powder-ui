import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../index';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  args: {
    name: 'checkbox',
    label: 'A checkbox',
    checked: true,
    touched: true,
    error: '',
    disabled: false,
    readOnly: false
  } as CheckboxProps
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => (
  <Checkbox {...args} onChange={() => {}} />
);

const ControlledTemplate: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [checked, setIsChecked] = React.useState<boolean>(args.checked);

  const onChange = (): void => {
    setIsChecked(!checked);
  };

  return <Checkbox {...args} checked={checked} onChange={onChange} />;
};

export const asDefault = Template.bind({});

export const asControlledInput = ControlledTemplate.bind({});

export const withErrorMessage = ControlledTemplate.bind({});
withErrorMessage.args = {
  touched: true,
  error: 'Please select an option'
};

export const asSkeleton = Template.bind({});
asSkeleton.args = {
  skeleton: true
};
