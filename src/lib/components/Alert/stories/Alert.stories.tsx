/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert, AlertProps } from '../index';

import InfoIcon from '../__mocks__/info.svg';

export default {
  title: 'Core/Alert',
  component: Alert,
  args: {
    id: '12345',
    title: 'This is an alert!',
    type: 'primary',
    content: '',
    duration: 10000000,
    icon: <InfoIcon height="16px" width="16px" />
  } as AlertProps,
  argTypes: {
    icon: { table: { disable: true } }
  }
} as ComponentMeta<typeof Alert>;

const removeAlert = () => {};

const Template: ComponentStory<typeof Alert> = (args: AlertProps) => (
  <Alert {...args} removeAlert={removeAlert} />
);

const ContentTemplate: ComponentStory<typeof Alert> = (args: AlertProps) => <Alert {...args} />;

export const asDefault = Template.bind({});

export const withContent = ContentTemplate.bind({});
withContent.args = {
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};
