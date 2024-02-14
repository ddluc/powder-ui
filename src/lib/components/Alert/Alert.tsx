/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useTheme } from 'styled-components';
import { AlertCard, AlertIcon, getAlertPalette } from './bin';
import { Typography } from '../Typography';
import { Flex } from '../Flex';
import type { AlertData } from '../../types';

export type AlertState = 'pending' | 'active' | 'complete';

export interface Props extends AlertData {
  removeAlert: (id: string) => void;
}

const Alert = (props: Props): JSX.Element => {
  const { id, title, content, duration, type, icon, removeAlert } = props;

  const [state, setState] = React.useState<AlertState>('pending');

  const theme = useTheme();

  const palette = getAlertPalette(theme);

  React.useEffect(() => {
    setState('active');
  }, []);

  React.useEffect(() => {
    if (state === 'active') {
      const timer = setTimeout(() => {
        setState('complete');
      }, duration);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [state]);

  React.useEffect(() => {
    if (state === 'complete') {
      const timer = setTimeout(() => {
        removeAlert(id);
      }, 500);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [state]);

  return (
    <AlertCard state={state} palette={palette[type]}>
      <Flex gap="8px">
        {icon && <AlertIcon>{icon}</AlertIcon>}
        <Typography.H6 spacing={{ top: '2px', bottom: '2px' }}>{title}</Typography.H6>
      </Flex>
      {content && (
        <Typography.Body spacing={{ top: '2px', bottom: '2px' }} size="12px">
          {content}
        </Typography.Body>
      )}
    </AlertCard>
  );
};

export default Alert;
