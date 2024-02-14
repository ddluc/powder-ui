import styled, { Theme } from 'styled-components';
import animations from './animations';

export interface Props {
  colors?: [string, string];
}

interface ThemedProps extends Props {
  theme: Theme;
}

const PulseSkeleton = styled.div<Props>`
  height: 100%;
  width: 100%;
  background-color: ${({ colors }: ThemedProps) => colors[0]};
  border-radius: ${({ theme }: ThemedProps) => theme.border.radius.sm};
  position: relative;
  padding: 0;
  box-shadow: none;
  pointer-events: none;
  &:hover,
  &:focus,
  &:active {
    border: none;
    cursor: default;
    outline: none;
  }
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: 2000ms ease-in ${animations.pulse} forwards infinite;
    background-color: ${({ colors }: ThemedProps) => colors[1]};
    content: '';
  }
`;

export default PulseSkeleton;
