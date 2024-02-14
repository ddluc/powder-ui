import styled, { css, Theme } from 'styled-components';
import animations, { OVERLAY_ANIMATION_DURATION } from './animations';
import { OverlayState } from '../../../types';

type OverlayContainerProps = {
  state: OverlayState;
};

export interface ThemedProps extends OverlayContainerProps {
  theme: Theme;
}

export const OverlayContainer = styled.div<ThemedProps>`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: ${(props: ThemedProps) => props.theme.zIndex[9]};

  &::before {
    ${(props: ThemedProps) => {
      if (props.state === 'opened') {
        return css`
          animation: ${OVERLAY_ANIMATION_DURATION}ms ease-in-out 0s forwards ${animations.fadeIn};
        `;
      }
      return css`
        animation: ${OVERLAY_ANIMATION_DURATION}ms ease-in-out 0s forwards ${animations.fadeOut};
      `;
    }};

    display: block;
    background-color: ${(props: ThemedProps) => props.theme.palette.neutral[1]};
    left: 0px;
    top: 0px;
    position: fixed;
    width: 100%;
    height: 100%;
    content: ' ';
  }
`;
