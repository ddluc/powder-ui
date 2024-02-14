/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { __Component, __ComponentProps } from '../index';

export default {
  title: '__Component',
  component: __Component,
  args: {
    text: 'A scaffolded component'
  } as __ComponentProps
} as ComponentMeta<typeof __Component>;

const Template: ComponentStory<typeof __Component> = (args: __ComponentProps) => (
  <__Component {...args} />
);

export const Main = Template.bind({});
