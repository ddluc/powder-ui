import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../Flex';
import { Block } from '../../Block';
import { Skeleton, SkeletonProps } from '../index';

export default {
  title: 'Core/Skeleton',
  component: Skeleton,
  args: {
    skeleton: true,
    type: 'box',
    width: 300,
    height: 200,
    size: 200,
    animation: 'wave',
    fluid: false
  } as SkeletonProps
} as ComponentMeta<typeof Skeleton>;

const MainTemplate: ComponentStory<typeof Skeleton> = (args: SkeletonProps) => (
  <Skeleton {...args} />
);

const ComponentTemplate: ComponentStory<typeof Skeleton> = (args: SkeletonProps) => {
  const margin: [number, number, number, number] = [5, 0, 5, 0];
  return (
    <Block>
      <Flex
        width="440px"
        justifyContent="space-between"
        wrap="nowrap"
        margin={['0px', '0px', '10px', '0px']}
      >
        <Flex basis="auto">
          <Skeleton {...args} margin={margin} type="circle" size={100} />
        </Flex>
        <Flex column basis="auto" width="320px" justifyContent="center">
          <Skeleton {...args} margin={margin} type="box" height={10} width={280} />
          <Skeleton {...args} margin={margin} type="box" height={10} width={300} />
          <Skeleton {...args} margin={margin} type="box" height={10} width={260} />
          <Skeleton {...args} margin={margin} type="box" height={10} width={240} />
        </Flex>
      </Flex>
      <Skeleton {...args} type="box" height={200} width={440} />
    </Block>
  );
};

export const asBox = MainTemplate.bind({});
asBox.args = {
  type: 'box'
};
asBox.argTypes = {
  size: {
    table: { disable: true }
  },
  type: {
    table: { disable: true }
  }
};

export const asCircle = MainTemplate.bind({});
asCircle.args = {
  type: 'circle',
  size: 200
};
asCircle.argTypes = {
  height: {
    table: { disable: true }
  },
  width: {
    table: { disable: true }
  },
  type: {
    table: { disable: true }
  },
  fluid: {
    table: { disable: true }
  }
};

export const asComponent = ComponentTemplate.bind({});
asComponent.args = {
  animation: 'wave',
  height: null,
  width: null
};
asComponent.argTypes = {
  height: {
    table: { disable: true }
  },
  width: {
    table: { disable: true }
  },
  size: {
    table: { disable: true }
  },
  type: {
    table: { disable: true }
  }
};

export const withWaveAnimation = MainTemplate.bind({});
withWaveAnimation.args = {
  type: 'box',
  animation: 'wave'
};

export const withPulseAnimation = MainTemplate.bind({});
withPulseAnimation.args = {
  type: 'box',
  animation: 'pulse'
};

export const withShimmerAnimation = MainTemplate.bind({});
withShimmerAnimation.args = {
  type: 'box',
  animation: 'shimmer'
};
