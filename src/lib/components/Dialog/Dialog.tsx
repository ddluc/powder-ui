import React from 'react';
import { useTheme } from 'styled-components';
import { Container, DialogFooter as Footer } from './bin';
import CloseIcon from './bin/assets/close.svg';
import { Overlay } from '../Overlay';
import { Button } from '../Button';
import { Block } from '../Block';
import { useWindowSize } from '../../hooks/useWindowResize';

export interface Props {
  children: React.ReactNode;
  show?: boolean;
  footer?: boolean;
  intent?: 'success' | 'danger' | 'warning' | 'none';
  label?: string;
  confirmIcon?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

// Declare the component
const Dialogue = (props: Props): JSX.Element => {
  const {
    children,
    show = true,
    intent = 'none',
    footer = true,
    label = 'dialog',
    confirmIcon,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onClose = () => {},
    onCancel = () => {},
    onConfirm = () => {}
  } = props;

  const theme = useTheme();
  const windowSize = useWindowSize();

  /**
   * Close Dialog
   * @param e
   * @param setOverlayState
   */
  const onCancelClick = () => {
    onClose();
    onCancel();
  };

  /**
   * Confirm Dialog
   */
  const onConfirmClick = () => {
    onConfirm();
    onClose();
  };

  return (
    <Overlay preventScroll show={show} onClose={onClose}>
      {({ state }) => (
        <Container label={label} state={state}>
          <Block position="absolute" top="10px" right="10px">
            <Button
              type="button"
              variation="minimal"
              aria-label="Close Modal"
              onClick={() => onCancelClick()}
              iconSize="lg"
              icon={<CloseIcon width="32px" height="32px" fill={theme.palette.neutral[2]} />}
            />
          </Block>
          {children}
          {footer && (
            <Footer>
              <Button
                type="button"
                variation="secondary"
                text={cancelText}
                aria-label="Cancel Modal"
                fluid={windowSize.width < 720}
                onClick={() => onCancelClick()}
              />
              <Button
                type="button"
                variation="default"
                text={confirmText}
                intent={intent}
                aria-label="Confirm Modal"
                icon={confirmIcon && confirmIcon}
                fluid={windowSize.width < 720}
                onClick={() => onConfirmClick()}
              />
            </Footer>
          )}
        </Container>
      )}
    </Overlay>
  );
};

// Export the component as the default export
export default Dialogue;
