import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Scale, ScaleProps } from '../index';
import { Flex } from '../../Flex';

export default {
  title: 'Layout/Scale',
  component: Scale,
  args: {
    xs: '80%',
    sm: '320px',
    md: '800px',
    lg: '1000px',
    xl: '1200px',
    height: '400px',
    border: 'dashed 1px #4a4a4a',
    margin: ['0', 'auto', '0', 'auto'],
    opacity: 1,
    background: { color: '#EDEDED' }
  } as ScaleProps
} as ComponentMeta<typeof Scale>;

const Template: ComponentStory<typeof Scale> = (args: ScaleProps) => (
  <Scale {...args}>
    <Flex height="100%" textAlign="center" center>
      <em>Adjust the viewport size to test responsive behavior</em>
    </Flex>
  </Scale>
);

export const Main = Template.bind({});
