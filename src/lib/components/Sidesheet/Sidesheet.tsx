import React from 'react';
import { useTheme } from 'styled-components';
import { Container } from './bin';
import CloseIcon from './bin/assets/close.svg';
import { Overlay } from '../Overlay';
import { Button } from '../Button';
import { Block } from '../Block';
import { Scroll } from '../Scroll';

export interface Props {
  show?: boolean;
  children?: React.ReactNode;
  closeIcon?: React.ReactNode;
  trapFocus?: boolean;
  backButton?: React.ReactNode;
  onClose?: () => void;
}

const Sidesheet = (props: Props): JSX.Element => {
  const { children, closeIcon, show = true, backButton, onClose } = props;

  const theme = useTheme();

  const onCloseButtonClick = () => {
    onClose();
  };

  return (
    <Overlay preventScroll show={show} onClose={onClose}>
      {({ state }) => (
        <Container state={state}>
          <Block position="absolute" top="10px" right="10px" zIndex={100}>
            <Button
              type="button"
              variation="minimal"
              onClick={onCloseButtonClick}
              iconSize="lg"
              icon={
                closeIcon || (
                  <CloseIcon width="32px" height="32px" fill={theme.palette.neutral[2]} />
                )
              }
            />
          </Block>
          {backButton && (
            <Block position="absolute" top="10px" left="10px" p="10px 0px" zIndex={100}>
              {backButton}
            </Block>
          )}
          <Scroll height="100%" direction="y">
            {children}
          </Scroll>
        </Container>
      )}
    </Overlay>
  );
};

// Export the component as the default export
export default Sidesheet;
