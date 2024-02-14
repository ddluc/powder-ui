import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput, TextInputProps } from '../index';

export default {
  title: 'Forms/TextInput',
  component: TextInput,
  args: {
    value: 'Some example text',
    name: 'example',
    placeholder: 'Enter some text...',
    label: 'Text Input',
    hideLabel: false,
    animated: false,
    touched: false,
    disabled: false
  } as TextInputProps
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => (
  <TextInput {...args} />
);

const ControlledTemplate: ComponentStory<typeof TextInput> = (args: TextInputProps) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [value, setValue] = React.useState<string>(args.value);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return <TextInput {...args} value={value} onChange={onChange} />;
};

export const asDefault = Template.bind({});

export const asControlledInput = ControlledTemplate.bind({});
asControlledInput.args = {
  value: ''
};

export const withAnimatedLabel = ControlledTemplate.bind({});
withAnimatedLabel.args = {
  value: '',
  animated: true
};

export const withErrorMessage = ControlledTemplate.bind({});
withErrorMessage.args = {
  value: 'daniel#ddluc.com',
  error: 'Please enter a valid email',
  touched: true
};

export const asSkeleton = Template.bind({});
asSkeleton.args = {
  skeleton: true
};
