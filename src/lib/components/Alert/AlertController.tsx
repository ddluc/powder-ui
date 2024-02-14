import React from 'react';
import Alert from './Alert';
import { AlertBox } from './bin';
import type { AlertData } from '../../types';

export interface Props {
  alerts: AlertData[];
  yOffset?: string;
  removeAlert: (id: string) => void;
}

// Declare the component
const AlertController = (props: Props): JSX.Element => {
  const { alerts, removeAlert, yOffset } = props;

  return (
    <AlertBox yOffset={yOffset}>
      {alerts.map(
        (alert: AlertData): JSX.Element => (
          <Alert key={alert.id} {...alert} removeAlert={removeAlert} />
        )
      )}
    </AlertBox>
  );
};

// Export the component as the default export
export default AlertController;
