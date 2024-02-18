import React from 'react';
import { OverlayContainer as Container } from './bin';
import { OverlayState } from '../../types';
import FocusTrap from './FocusTrap';
import { OVERLAY_ANIMATION_DURATION } from './bin/animations';

export interface Props {
  preventScroll?: boolean;
  show?: boolean;
  onClose?: () => void;
  children?: (props: {
    state: OverlayState;
    setState: React.Dispatch<React.SetStateAction<OverlayState>>;
  }) => JSX.Element;
}

const Overlay = (props: Props): JSX.Element => {
  const { children, onClose = () => {}, show = true, preventScroll } = props;

  const [state, setState] = React.useState<OverlayState>('closed');

  const onEsc = React.useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, []);

  const onOverlayClick = (e: React.ChangeEvent<any>) => {
    if (e.target.classList.contains('overlay')) {
      onClose();
    }
  };

  /**
   * Open and close the overlay via show property
   */
  React.useEffect(() => {
    if (show) {
      if (state === 'closed') setState('opened');
    }
    if (!show) {
      if (state === 'closing') setState('closed');
      if (state === 'opened') setState('closing');
    }
  }, [show]);

  /**
   * Toggle body scroll based on overlay state
   */
  React.useEffect(() => {
    if (preventScroll && state === 'opened') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [state, preventScroll]);

  /**
   * Toggle event key listener for escape key
   */
  React.useEffect(() => {
    if (state === 'opened') {
      document.body.addEventListener('keydown', onEsc, false);
    }
    if (state === 'closing') {
      document.body.removeEventListener('keydown', onEsc, false);
    }
  }, [state]);

  /**
   * Automate closing of overlay
   */
  React.useEffect(() => {
    if (state === 'closing') {
      const timer = setTimeout(() => {
        setState('closed');
      }, OVERLAY_ANIMATION_DURATION);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [state]);

  if (state === 'closed') return <div />;

  return (
    <Container className="overlay" state={state} onClick={onOverlayClick}>
      <FocusTrap>{children && children({ state, setState })}</FocusTrap>
    </Container>
  );
};

// Export the component as the default export
export default Overlay;
