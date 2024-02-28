/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle, ToggleProps } from '../index';

export default {
  title: 'Forms/Toggle',
  component: Toggle,
  args: {
    label: 'Dark Mode',
    name: 'dark-mode',
    on: false,
    size: 'md'
  } as ToggleProps
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args: ToggleProps) => <Toggle {...args} />;

const ControlledTemplate: ComponentStory<typeof Toggle> = (args: ToggleProps) => {
  const [on, setOn] = React.useState(true);
  const onChange = (isOn: boolean) => {
    console.log('On change!', isOn);
    setOn(!isOn);
  };
  return <Toggle {...args} on={on} onChange={onChange} />;
};

export const Main = Template.bind({});

export const asControlledToggle = ControlledTemplate.bind({});

export const withAnnotations = Template.bind({});
withAnnotations.args = {
  alignment: 'column',
  annotations: {
    on: 'On',
    off: 'Off'
  }
};

export const asSkeleton = Template.bind({});
asSkeleton.args = {
  alignment: 'column',
  skeleton: true,
  annotations: {
    on: 'On',
    off: 'Off'
  }
};

export const withErrorMessage = Template.bind({});
withErrorMessage.args = {
  error: 'Whoops, there was an error',
  touched: true
};

export const withHorizontalAligntment = Template.bind({});
withHorizontalAligntment.args = {
  alignment: 'row'
};
