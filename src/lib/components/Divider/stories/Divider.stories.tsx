import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../Flex';
import { Typography } from '../../Typography';
import { Divider, DividerProps } from '../index';

export default {
  title: 'Layout/Divider',
  component: Divider,
  args: {
    type: 'horizontal',
    solid: true,
    dashed: false,
    text: '',
    size: 1,
    spacing: {
      top: '15px',
      bottom: '15px',
      right: '15px',
      left: '15px'
    },
    alignment: 'left',
    width: '60%',
    height: '200px'
  } as DividerProps
} as ComponentMeta<typeof Divider>;

const DividerWithContent = (args: DividerProps) => {
  const { type, ...baseArgs } = args;
  return (
    <Flex row={type === 'vertical'} column={type === 'horizontal'} width="100%">
      <Flex center={type === 'vertical'}>
        <Typography.Body spacing={{ top: '0px', bottom: '0px' }}>
          Here is some content
        </Typography.Body>
      </Flex>
      <Divider {...baseArgs} />
      <Flex center={type === 'vertical'}>
        <Typography.Body spacing={{ top: '0px', bottom: '0px' }}>
          Here is some other content
        </Typography.Body>
      </Flex>
    </Flex>
  );
};

const Template: ComponentStory<typeof DividerWithContent> = (args: DividerProps) => (
  <DividerWithContent {...args} />
);

export const Main = Template.bind({});
