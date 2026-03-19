import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip, TooltipProps } from '../index';
import { Button } from '../../Button';
import { Flex } from '../../Flex';

export default {
  title: 'Core/Tooltip',
  component: Tooltip,
  args: {
    content: 'Tooltip text',
    placement: 'top',
    trigger: 'hover-focus',
    delay: 0
  } as TooltipProps
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <div style={{ padding: '32px', display: 'inline-block' }}>
    <Tooltip {...args}>
      <Button text="Hover me" />
    </Tooltip>
  </div>
);

export const Default = Template.bind({});

export const PlacementSide = Template.bind({});
PlacementSide.args = { placement: 'right', content: 'Right tooltip' };

export const TriggerClick = Template.bind({});
TriggerClick.args = { trigger: 'click', content: 'Click to toggle' };

export const TriggerFocus = Template.bind({});
TriggerFocus.args = { trigger: 'focus', content: 'Focus to show' };

export const WithDelay = Template.bind({});
WithDelay.args = { delay: 500, content: 'Delayed by 500ms' };

export const CustomColor = Template.bind({});
CustomColor.args = { color: '#40d2d5', textColor: '#ffffff', content: 'Custom color' };

export const AllPlacements: ComponentStory<typeof Tooltip> = () => (
  <Flex gap="40px" style={{ padding: '100px' }}>
    <Tooltip content="Left tooltip" placement="left">
      <Button text="Left" />
    </Tooltip>
    <Tooltip content="Top tooltip" placement="top" offset={2}>
      <Button text="Top" />
    </Tooltip>
    <Tooltip content="Bottom tooltip" placement="bottom" offset={-2}>
      <Button text="Bottom" />
    </Tooltip>
    <Tooltip content="Right tooltip" placement="right">
      <Button text="Right" />
    </Tooltip>
  </Flex>
);
