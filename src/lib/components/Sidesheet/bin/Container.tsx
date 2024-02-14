/* eslint-disable react/display-name */

import React from 'react';
import styled, { css, Theme } from 'styled-components';
import animations from './animation';
import { OverlayState } from '../../../types';

type SidesheetState = OverlayState;

type ContainerProps = {
  state: SidesheetState;
  children?: React.ReactNode;
};

export interface ThemedProps extends ContainerProps {
  theme: Theme;
}

const Container = styled.aside<ThemedProps>`
  background-color: ${(props: ThemedProps) => props.theme.palette.background};
  width: 500px;
  height: 100vh;
  overflow: hidden;
  padding: 45px 10px;
  box-sizing: border-box;
  position: absolute;
  right: -500px;
  ${(props: ThemedProps) => {
    if (props.state === 'opened') {
      return css`
        animation: 500ms ease-out 0s forwards ${animations.slideIn};
      `;
    }
    return css`
      animation: 300ms ease-in 0s forwards ${animations.slideOut};
    `;
  }};

  @media screen and (max-width: ${(props: ThemedProps) => props.theme.breakpoints.sm}) {
    width: 100%;
  }

  @media screen and (max-width: ${(props: ThemedProps) => props.theme.breakpoints.md}) {
    width: 80%;
  }
`;

export const ContainerWithRef = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, state }, ref) => (
    <div ref={ref}>
      <Container state={state} role="presentation" aria-label="sidesheet">
        {children}
      </Container>
    </div>
  )
);
