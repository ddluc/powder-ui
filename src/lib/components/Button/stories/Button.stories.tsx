import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonProps } from '../index';
import { TextInput } from '../../TextInput';
import { Flex } from '../../Flex';

import SettingsIcon from '../__mocks__/settings.svg';
import TrashIcon from '../__mocks__/trash.svg';
import RestartIcon from '../__mocks__/restart.svg';
import CheckmarkIcon from '../__mocks__/checkmark.svg';
import { Block } from '../../Block';

export default {
  title: 'Core/Button',
  component: Button,
  args: {
    text: 'Learn More',
    variation: 'default',
    intent: 'none',
    size: 'sm',
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
    if (iconSize === 'lg') return '24px';
    return '16px';
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

export const asLarge = Template.bind({});
asLarge.args = {
  size: 'lg'
};

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

export const asIconLarge = IconTemplate.bind({});
asIconLarge.args = {
  text: '',
  variation: 'secondary',
  size: 'lg',
  iconSize: 'lg'
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

export const alignedWithTextInput: ComponentStory<typeof Button> = () => {
  const [value, setValue] = React.useState('');
  return (
    <Flex gap="0px 8px" alignContent="flex-start" wrap="nowrap">
      <TextInput
        name="search"
        label="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        condensed
      />
      <Block alignSelf="flex-end">
        <Button
          text="Search"
          size="lg"
          variation="default"
          icon={<CheckmarkIcon height="16px" width="16px" />}
          iconPosition="left"
        />
      </Block>
    </Flex>
  );
};
alignedWithTextInput.storyName = 'Aligned with TextInput';

export const asButtonGroup: ComponentStory<typeof Button> = () => (
  <Flex gap="0px 8px" alignItems="center" wrap="nowrap">
    <Button
      variation="default"
      text="Submit"
      icon={<CheckmarkIcon height="16px" width="16px" />}
      iconPosition="left"
    />
    <Button
      variation="secondary"
      text="Settings"
      icon={<SettingsIcon height="16px" width="16px" />}
      iconPosition="left"
    />
    <Button intent="success" text="Approve" />
    <Button intent="warning" text="Review" />
    <Button variation="secondary" icon={<RestartIcon height="16px" width="16px" />} />
  </Flex>
);
asButtonGroup.storyName = 'As Button Group';

export const asSkeleton = Template.bind({});
asSkeleton.args = {
  skeleton: true,
  width: 120,
  height: 40
};
