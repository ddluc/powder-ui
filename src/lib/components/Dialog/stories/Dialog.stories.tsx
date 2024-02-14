/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog, DialogProps } from '../index';
import { Block } from '../../Block';
import { Button } from '../../Button';
import { Divider } from '../../Divider';
import { Typography } from '../../Typography';

import TrashIcon from '../__mocks__/trash.svg';

const { H1, Body } = Typography;

export default {
  title: 'Core/Dialog',
  component: Dialog,
  args: {
    show: true,
    footer: true
  } as DialogProps,
  argTypes: {
    onClose: { action: 'close' },
    onConfirm: { action: 'confirm' },
    onCancel: { action: 'cancel' }
  }
} as ComponentMeta<typeof Dialog>;

const ControlledTemplate: ComponentStory<typeof Dialog> = (args: DialogProps) => {
  const [show, setShow] = React.useState<boolean>(false);
  const { onClose } = args;

  const showDialog = () => {
    setShow(true);
  };

  const closeDialog = () => {
    setShow(false);
    onClose();
  };

  return (
    <Block height="2000px">
      <Button text="Show Dialog" onClick={showDialog} />
      <Dialog {...args} show={show} onClose={closeDialog}>
        <Block padding={['10px', '0px', '0px', '0px']}>
          <H1>Hello!</H1>
          <Divider />
          <Body>This is the content Body</Body>
        </Block>
      </Dialog>
    </Block>
  );
};

const Template: ComponentStory<typeof Dialog> = (args: DialogProps) => (
  <Dialog {...args}>
    <Block padding={['10px', '0px', '0px', '0px']}>
      <H1>Hello!</H1>
      <Divider />
      <Body>This is the content Body</Body>
    </Block>
  </Dialog>
);

export const asDefault = Template.bind({});

export const withoutFooter = Template.bind({});
withoutFooter.args = {
  footer: false
};

export const withIntent = Template.bind({});
withIntent.args = {
  footer: true,
  confirmIcon: <TrashIcon height="16px" width="16px" />,
  confirmText: 'Delete',
  intent: 'danger'
};

export const asControlled = ControlledTemplate.bind({});
