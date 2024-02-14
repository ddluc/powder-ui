import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select, SelectProps } from '../index';

export default {
  title: 'Forms/Select',
  component: Select,
  args: {
    name: 'Select',
    label: 'Select a Fruit',
    help: 'This is some help text',
    options: [
      { value: '1', label: 'Apples' },
      { value: '2', label: 'Grapes' },
      { value: '3', label: 'Oranges' },
      { value: '4', label: 'Berries' },
      { value: '5', label: 'Banana' },
      { value: '6', label: 'Lemon' }
    ]
  } as SelectProps
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: SelectProps) => <Select {...args} />;

const ControlledTemplate: ComponentStory<typeof Select> = (args: SelectProps) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [value, setValue] = React.useState<string>(args.value);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue(event.target.value);
  };

  return <Select {...args} value={value} onChange={onChange} />;
};

export const asDefault = Template.bind({});

export const asControlledInput = ControlledTemplate.bind({});

export const withAnimatedLabel = ControlledTemplate.bind({});
withAnimatedLabel.args = {
  value: '',
  help: '',
  animated: true
};

export const withErrorMessage = ControlledTemplate.bind({});
withErrorMessage.args = {
  value: '',
  error: 'Please select a fruit',
  touched: true
};

export const asSkeleton = Template.bind({});
asSkeleton.args = {
  skeleton: true
};
