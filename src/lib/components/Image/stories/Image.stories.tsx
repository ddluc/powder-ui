import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Block } from '../../Block';
import { Image, ImageProps } from '../index';
import { Scroll } from '../../Scroll';
import { Typography } from '../../Typography';

export default {
  title: 'Core/Image',
  component: Image,
  argTypes: {
    xpos: { control: { type: 'range' } },
    ypos: { control: { type: 'range' } }
  },
  args: {
    src: {
      main: 'https://piste-ui.s3.us-west-2.amazonaws.com/ski.jpg'
    },
    width: 300,
    height: 300,
    fit: 'cover',
    xpos: 50,
    ypos: 50
  } as ImageProps
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args: ImageProps) => <Image {...args} />;

const TemplateWithOffsetBlock: ComponentStory<typeof Image> = (args: ImageProps) => (
  <Scroll direction="y" height="92vh" position="relative">
    <Block height="1200px">
      <Typography.Body>Scroll down to see image</Typography.Body>
    </Block>
    <Image {...args} />
  </Scroll>
);

export const Main = Template.bind({});

export const withProgressiveLoading = Template.bind({});
withProgressiveLoading.args = {
  src: {
    main: 'https://piste-ui.s3.us-west-2.amazonaws.com/ski.jpg',
    preview: 'https://piste-ui.s3.us-west-2.amazonaws.com/ski--thumbnail.jpg'
  },
  blur: 5,
  backgroundColor: '#EDEDED'
};

export const isOffscreen = TemplateWithOffsetBlock.bind({});
isOffscreen.args = {
  src: {
    main: 'https://piste-ui.s3.us-west-2.amazonaws.com/ski.jpg',
    preview: 'https://piste-ui.s3.us-west-2.amazonaws.com/ski--thumbnail.jpg'
  },
  blur: 5,
  backgroundColor: '#EDEDED'
};

export const asSkeleton = Template.bind({});
asSkeleton.args = {
  skeleton: true,
  height: 400,
  width: 400
};
