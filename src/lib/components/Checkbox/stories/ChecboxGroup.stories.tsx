import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxGroup, { Props as CheckboxGroupProps } from '../CheckboxGroup';
import Checkbox from '../Checkbox';

export default {
  title: 'Forms/Checkbox',
  component: CheckboxGroup,
  args: {
    legend: 'Select an option',
    name: 'test',
    touched: false,
    error: '',
    disabled: false
  } as CheckboxGroupProps
} as ComponentMeta<typeof CheckboxGroup>;

const ControlledTemplate: ComponentStory<typeof CheckboxGroup> = (args: CheckboxGroupProps) => {
  const [value, setValue] = React.useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value;
    if (value.indexOf(val) !== -1) {
      const filtered = value.filter((v) => v !== val);
      setValue(filtered);
    } else {
      setValue([...value, val]);
    }
  };

  const isChecked = (val: string) => value.indexOf(val) !== -1;

  return (
    <CheckboxGroup {...args}>
      <Checkbox
        label="Option 1"
        value="test-1"
        checked={isChecked('test-1')}
        asGroup
        onChange={onChange}
      />
      <Checkbox
        label="Option 2"
        value="test-2"
        checked={isChecked('test-2')}
        asGroup
        onChange={onChange}
      />
      <Checkbox
        label="Option 3"
        value="test-3"
        checked={isChecked('test-3')}
        asGroup
        onChange={onChange}
      />
    </CheckboxGroup>
  );
};

export const asCheckboxGroup = ControlledTemplate.bind({});

export const asCheckboxGroupSkeleton = ControlledTemplate.bind({});
asCheckboxGroupSkeleton.args = {
  skeleton: true
};
