import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextSkeleton } from '../bin/TextSkeleton';

export default {
  title: 'Theme/Typography',
  component: TextSkeleton,
  args: {
    lines: 5,
    lineHeight: 12,
    width: 600
  }
} as ComponentMeta<typeof TextSkeleton>;

const Template: ComponentStory<typeof TextSkeleton> = (args) => <TextSkeleton {...args} />;

export const asSkeleton = Template.bind({});
