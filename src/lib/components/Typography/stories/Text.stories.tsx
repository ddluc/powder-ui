import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Styleguide } from '../bin/Styleguide';

export default {
  title: 'Theme/Typography',
  component: Styleguide
} as ComponentMeta<typeof Styleguide>;

const Template: ComponentStory<typeof Styleguide> = (args: any) => <Styleguide {...args} />;

export const Main = Template.bind({});
