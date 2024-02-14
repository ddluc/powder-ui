/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio, RadioProps } from '../index';

export default {
  title: 'Forms/Radio',
  component: Radio,
  args: {
    name: 'radio',
    label: 'A Radio Button',
    enabled: true,
    touched: true,
    error: '',
    disabled: false
  } as RadioProps
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args: RadioProps) => (
  <Radio onChange={() => {}} {...args} />
);

export const Main = Template.bind({});
