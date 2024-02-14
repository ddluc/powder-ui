/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge, BadgeProps } from '../index';

import CloseIcon from '../__mocks__/close.svg';
import AlertIcon from '../__mocks__/alert.svg';
import CheckIcon from '../__mocks__/checkmark.svg';
import { Flex } from '../../Flex';

export default {
  title: 'Core/Badge',
  component: Badge,
  args: {
    text: 'a badge',
    type: 'primary',
    disabled: false
  } as BadgeProps,
  argTypes: {
    onClick: { action: 'click' }
  }
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => <Badge {...args} />;

const IconTemplate: ComponentStory<typeof Badge> = (args: BadgeProps & { iconType: string }) => {
  const { iconType } = args;
  if (iconType === 'close') {
    return <Badge {...args} icon={<CloseIcon height="12px" width="16px" />} />;
  }
  if (iconType === 'alert') {
    return <Badge {...args} icon={<AlertIcon height="12px" width="16px" />} />;
  }
  return <Badge {...args} icon={<CheckIcon height="12px" width="16px" />} />;
};

const GroupTemplate: ComponentStory<typeof Badge> = () => (
  <Flex gap="5px">
    <Badge text="primary" type="primary" />
    <Badge
      text="accent"
      type="accent"
      onClick={() => null}
      icon={<CloseIcon height="12px" width="16px" />}
    />
    <Badge text="neutral" type="neutral" />
    <Badge
      text="custom"
      colors={{
        background: '#F57442',
        text: 'white',
        border: '#F57442',
        icon: 'white'
      }}
    />
    <Badge type="danger" icon={<AlertIcon height="12px" width="16px" />} />
    <Badge type="success" icon={<CheckIcon height="12px" width="16px" />} />
    <Badge type="warning" icon={<AlertIcon height="12px" width="16px" />} />
    <Badge text="foreground" type="foreground" />
    <Badge text="background" type="background" />
  </Flex>
);

export const asDefault = Template.bind({});

export const withIcon = IconTemplate.bind({});
withIcon.args = {
  text: 'with icon',
  iconPosition: 'right',
  iconType: 'close',
  type: 'primary'
};

export const asIcon = IconTemplate.bind({});
asIcon.args = {
  text: '',
  iconType: 'check',
  type: 'primary'
};

export const asSuccess = IconTemplate.bind({});
asSuccess.args = {
  text: 'success',
  type: 'success',
  iconType: 'check',
  onClick: null
};

export const asWarning = IconTemplate.bind({});
asWarning.args = {
  text: 'warning',
  type: 'warning',
  iconType: 'alert',
  onClick: null
};

export const asDanger = IconTemplate.bind({});
asDanger.args = {
  text: 'danger',
  type: 'danger',
  iconType: 'alert',
  onClick: null
};

export const withOverflowText = Template.bind({});
withOverflowText.args = {
  text: 'This is a badge with some really long instructions which breaks the layout'
};

export const asSkeleton = Template.bind({});
asSkeleton.args = {
  skeleton: true,
  width: 80
};

export const AsBadgeGroup = GroupTemplate.bind({});
AsBadgeGroup.argTypes = {
  text: { table: { disable: true } },
  type: { table: { disable: true } },
  onClick: { table: { disable: true } },
  disabled: { table: { disable: true } },
  icon: { table: { disable: true } },
  iconPosition: { table: { disable: true } }
};
