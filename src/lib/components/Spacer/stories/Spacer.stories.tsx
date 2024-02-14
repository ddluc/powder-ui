/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spacer, SpacerProps } from '../index';

export default {
  title: 'Layout/Spacer',
  component: Spacer,
  args: {
    spacing: 12,
    debug: true,
    height: ''
  } as SpacerProps
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args: SpacerProps) => <Spacer {...args} />;

export const Main = Template.bind({});
