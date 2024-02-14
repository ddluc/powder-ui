/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlertController, AlertControllerProps } from '../index';
import { useAlertManager } from '../../../hooks/useAlertManager';
import { AlertData } from '../../../types';
import { Block } from '../../Block';
import { Button } from '../../Button';

import InfoIcon from '../__mocks__/info.svg';

export default {
  title: 'Core/Alert',
  component: AlertController,
  args: {} as AlertControllerProps
} as ComponentMeta<typeof AlertController>;

const AlertControllerTemplate: ComponentStory<typeof AlertController> = () => {
  const { alerts, addAlert, removeAlert } = useAlertManager();

  const handleButtonClick = () => {
    const id = `${Math.floor(Math.random() * 1000)}`;
    const alert: AlertData = {
      id,
      title: `Alert id #${id}`,
      content: '',
      type: 'primary',
      duration: 5000,
      icon: <InfoIcon height="16px" width="16px" />
    };
    addAlert(alert);
  };

  return (
    <>
      <Block height="2000px">
        <Button type="button" onClick={handleButtonClick} text="Add New Alert" />
      </Block>
      <AlertController alerts={alerts} removeAlert={removeAlert} />
    </>
  );
};

export const asAlertController = AlertControllerTemplate.bind({});
