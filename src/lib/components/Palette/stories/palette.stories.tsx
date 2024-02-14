import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Palette } from '../index';

export default {
  title: 'Theme/Palette',
  component: Palette
} as ComponentMeta<typeof Palette>;

const Template: ComponentStory<typeof Palette> = () => <Palette />;

export const Default = Template.bind({});
