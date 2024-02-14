import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Block, BlockProps } from '../index';

export default {
  title: 'Layout/Block',
  component: Block,
  args: {
    height: '50px',
    width: '50px',
    display: 'block',
    margin: ['10px', '10px', '10px', '10px'],
    padding: ['20px', '20px', '20px', '20px'],
    border: 'dashed 1px #4a4a4a',
    opacity: 1,
    background: { color: '#EDEDED' },
    outline: 'none',
    position: 'relative',
    zIndex: 1,
    left: '',
    right: '',
    top: '',
    bottom: '',
    overflow: 'auto',
    textAlign: 'left'
  } as BlockProps
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = (args: BlockProps) => (
  <>
    <Block {...args} />
    <Block {...args} />
    <Block {...args} />
    <Block {...args} />
  </>
);

export const Main = Template.bind({});
