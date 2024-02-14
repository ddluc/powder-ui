import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card, CardProps } from '../index';
import { Typography } from '../../Typography';

export default {
  title: 'Core/Card',
  component: Card,
  args: {
    width: '400px',
    elevation: 0
  } as CardProps
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args}>
    <Typography.H4>This is a Card</Typography.H4>
    <Typography.Body size="14px" lineHeight="18px">
      Morbi ut nulla a erat efficitur aliquam id vel lectus. Nullam consectetur quam nec sapien
      facilisis egestas. Pellentesque rutrum tellus purus, ut sodales sem congue elementum.
    </Typography.Body>
  </Card>
);

export const asDefault = Template.bind({});

export const withElevation = Template.bind({});
withElevation.args = {
  elevation: 4
};
