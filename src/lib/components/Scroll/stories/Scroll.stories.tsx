import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../Flex';
import { Scroll, ScrollProps } from '../index';

export default {
  title: 'Layout/Scroll',
  component: Scroll,
  args: {
    direction: 'x',
    height: '400px',
    width: '400px',
    border: 'dashed 1px #4a4a4a',
    padding: ['20px', '20px', '20px', '20px'],
    background: { color: '#EDEDED' }
  } as ScrollProps
} as ComponentMeta<typeof Scroll>;

const VerticalScrollTemplate: ComponentStory<typeof Scroll> = (args: ScrollProps) => (
  <Scroll {...args}>
    <Flex
      center
      height="800px"
      width="100%"
      border="dashed 1px #4a4a4a"
      background={{ color: '#d7d7d7' }}
    >
      Content
    </Flex>
  </Scroll>
);

export const withYScroll = VerticalScrollTemplate.bind({});
withYScroll.args = {
  direction: 'y'
};

const HorizontalScrollTemplate: ComponentStory<typeof Scroll> = (args: ScrollProps) => (
  <Scroll {...args}>
    <Flex
      center
      height="100%"
      width="800px"
      border="dashed 1px #4a4a4a"
      background={{ color: '#d7d7d7' }}
    >
      Content
    </Flex>
  </Scroll>
);

export const withXScroll = HorizontalScrollTemplate.bind({});
withXScroll.args = {
  direction: 'x'
};
