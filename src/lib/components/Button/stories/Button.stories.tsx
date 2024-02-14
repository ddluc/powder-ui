import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonProps } from '../index';

import SettingsIcon from '../__mocks__/settings.svg';
import TrashIcon from '../__mocks__/trash.svg';
import RestartIcon from '../__mocks__/restart.svg';

export default {
  title: 'Core/Button',
  component: Button,
  args: {
    text: 'Learn More',
    variation: 'default',
    intent: 'none',
    fluid: false,
    iconSize: 'sm'
  } as ButtonProps
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

const IconTemplate: ComponentStory<typeof Button> = (
  args: ButtonProps & { iconSize?: string; iconType?: string }
) => {
  const { iconType, ...baseArgs } = args;

  const getIconSize = () => {
    const { iconSize } = baseArgs;
    if (iconSize === 'sm') return '16px';
    if (iconSize === 'md') return '24px';
    if (iconSize === 'lg') return '32px';
    return 'auto';
  };

  if (iconType === 'trash') {
    return (
      <Button {...baseArgs} icon={<TrashIcon height={getIconSize()} width={getIconSize()} />} />
    );
  }
  if (iconType === 'restart') {
    return (
      <Button {...baseArgs} icon={<RestartIcon height={getIconSize()} width={getIconSize()} />} />
    );
  }
  return (
    <Button {...baseArgs} icon={<SettingsIcon height={getIconSize()} width={getIconSize()} />} />
  );
};

export const asDefault = Template.bind({});

export const asSecondary = Template.bind({});
asSecondary.args = {
  variation: 'secondary'
};

export const withIcon = IconTemplate.bind({});
withIcon.args = {
  text: 'Settings',
  iconPosition: 'left',
  variation: 'secondary'
};

export const asIcon = IconTemplate.bind({});
asIcon.args = {
  text: '',
  variation: 'secondary'
};

export const asDanger = IconTemplate.bind({});
asDanger.args = {
  intent: 'danger',
  text: 'Danger',
  iconType: 'trash'
};

export const asSuccess = Template.bind({});
asSuccess.args = {
  intent: 'success',
  text: 'Success'
};

export const asWarning = Template.bind({});
asWarning.args = {
  intent: 'warning',
  text: 'Warning'
};

export const asMinimal = IconTemplate.bind({});
asMinimal.args = {
  text: '',
  variation: 'minimal'
};

export const asMinimalIntent = IconTemplate.bind({});
asMinimalIntent.args = {
  text: '',
  variation: 'minimal',
  intent: 'danger',
  iconType: 'trash'
};

export const withOverflowText = Template.bind({});
withOverflowText.args = {
  text: 'This is a button with some really long instructions which breaks the layout'
};

export const asSkeleton = Template.bind({});
asSkeleton.args = {
  skeleton: true,
  width: 120,
  height: 40
};
