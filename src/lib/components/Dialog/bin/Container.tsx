/* eslint-disable react/display-name */

import React from 'react';
import styled, { Theme, css } from 'styled-components';
import animations from './animation';
import { OverlayState } from '../../../types';

type ContainerProps = {
  state: OverlayState;
  children?: React.ReactNode;
  label?: string;
};

export interface ThemedProps extends ContainerProps {
  theme: Theme;
}

export const Container = styled.aside<ThemedProps>`
  background-color: ${(props: ThemedProps) => props.theme.palette.background};
  width: 600px;
  height: fit-content;
  max-height: 100vh;
  padding: 50px 10px 30px 10px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0;
  transform: scale(0);
  border-radius: ${(props: ThemedProps) => props.theme.border.radius.sm};

  ${(props: ThemedProps) => {
    if (props.state === 'opened') {
      return css`
        animation: 300ms ease-out 100ms forwards ${animations.popIn};
      `;
    }
    return css`
      animation: 300ms ease-in 0ms forwards ${animations.popOut};
    `;
  }};

  @media screen and (max-width: ${(props: ThemedProps) => props.theme.breakpoints.sm}) {
    width: 80%;
  }
`;

export const ContainerWithRef = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, state, label }, ref) => (
    <div ref={ref}>
      <Container state={state} aria-label={label} aria-modal="true" role="dialog">
        {children}
      </Container>
    </div>
  )
);
