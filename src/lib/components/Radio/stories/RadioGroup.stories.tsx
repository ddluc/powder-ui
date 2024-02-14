import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioGroup, { Props as RadioGroupProps } from '../RadioGroup';
import Radio from '../Radio';

export default {
  title: 'Forms/Radio',
  component: RadioGroup,
  args: {
    legend: 'Select an option',
    name: 'radio',
    touched: false,
    error: '',
    disabled: false
  } as RadioGroupProps
} as ComponentMeta<typeof RadioGroup>;

const ControlledTemplate: ComponentStory<typeof RadioGroup> = (args: RadioGroupProps) => {
  const [value, setValue] = React.useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLFieldSetElement>): void => {
    setValue(e.target.id);
  };

  const isEnabled = (val: string): boolean => val === value;

  return (
    <RadioGroup {...args} onChange={onChange}>
      <Radio label="Option 1" value="option-1" enabled={isEnabled('option-1')} />
      <Radio label="Option 2" value="option-2" enabled={isEnabled('option-2')} />
      <Radio label="Option 3" value="option-3" enabled={isEnabled('option-3')} />
    </RadioGroup>
  );
};

export const asRadioGroup = ControlledTemplate.bind({});

export const asSkeleton = ControlledTemplate.bind({});
asSkeleton.args = {
  skeleton: true
};
