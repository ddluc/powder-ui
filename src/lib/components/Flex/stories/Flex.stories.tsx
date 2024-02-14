import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex, FlexProps } from '../index';

export default {
  title: 'Layout/Flex',
  component: Flex,
  args: {
    display: 'flex',
    row: true,
    column: false,
    reverse: false,
    wrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    gap: '10px 10px',
    height: '150px',
    width: '600px',
    padding: ['5px', '5px', '5px', '5px'],
    border: 'dashed 1px #4a4a4a',
    opacity: 1,
    background: { color: '#EDEDED' }
  } as FlexProps
} as ComponentMeta<typeof Flex>;

const defaultFlexItemProps = {
  display: 'flex',
  height: '40px',
  width: '100px',
  border: 'dashed 1px #4a4a4a',
  background: { color: '#d7d7d7' },
  center: true
} as FlexProps;

const FlexTemplate: ComponentStory<typeof Flex> = (args: FlexProps) => (
  <Flex {...args}>
    <Flex {...defaultFlexItemProps} grow={1}>
      Box 1
    </Flex>
    <Flex {...defaultFlexItemProps} grow={3}>
      Box 2
    </Flex>
    <Flex {...defaultFlexItemProps} grow={2}>
      Box 3
    </Flex>
  </Flex>
);

export const withFlexItems = FlexTemplate.bind({});

const FixedTemplate: ComponentStory<typeof Flex> = (args: FlexProps) => (
  <Flex {...args}>
    <Flex {...defaultFlexItemProps} width="200px" basis={1}>
      Box 1
    </Flex>
    <Flex {...defaultFlexItemProps} width="120px" basis={1}>
      Box 2
    </Flex>
    <Flex {...defaultFlexItemProps} width="50px" basis={1}>
      Box 3
    </Flex>
  </Flex>
);

export const withFixedItems = FixedTemplate.bind({});
withFixedItems.args = {
  justifyContent: 'space-evenly'
};

const LayoutTemplate: ComponentStory<typeof Flex> = () => {
  const args = {
    width: '400px',
    border: 'dashed 1px #4a4a4a',
    opacity: 1,
    padding: ['5px', '5px', '5px', '5px'],
    background: { color: '#EDEDED' }
  } as FlexProps;
  return (
    <Flex {...args} gap="10px 10px" row wrap="wrap">
      <Flex
        border="dashed 1px #4a4a4a"
        background={{ color: '#d7d7d7' }}
        width="100%"
        basis={1}
        height="50px"
        center
      >
        Header
      </Flex>
      <Flex
        border="dashed 1px #4a4a4a"
        background={{ color: '#d7d7d7' }}
        center
        grow={1}
        alignSelf="stretch"
      >
        Left Panel
      </Flex>
      <Flex
        border="dashed 1px #4a4a4a"
        background={{ color: '#d7d7d7' }}
        height="300px"
        center
        grow={3}
      >
        Content
      </Flex>
      <Flex
        border="dashed 1px #4a4a4a"
        background={{ color: '#d7d7d7' }}
        center
        grow={1}
        alignSelf="stretch"
      >
        Right Panel
      </Flex>
      <Flex
        border="dashed 1px #4a4a4a"
        background={{ color: '#d7d7d7' }}
        width="100%"
        basis={1}
        height="50px"
        center
      >
        Footer
      </Flex>
    </Flex>
  );
};

export const asPageLayout = LayoutTemplate.bind({});
// Disable all controls
asPageLayout.parameters = {
  controls: { hideNoControlsWarning: true }
};
