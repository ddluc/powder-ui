import styled, { Theme } from 'styled-components';
import animations from './animations';

export interface Props {
  colors?: [string, string];
}

interface ThemedProps extends Props {
  theme: Theme;
}

const ShimmerSkeleton = styled.div<Props>`
  height: 100%;
  width: 100%;
  background-color: ${({ colors }: ThemedProps) => colors[1]};
  background-image: ${({ colors }: ThemedProps) =>
    `linear-gradient(to right, ${colors[1]} 0%, ${colors[0]} 20%, ${colors[0]} 40%, ${colors[1]} 100%)`};
  background-repeat: no-repeat;
  background-size: 800px 800px;
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
  animation: 1000ms linear forwards ${animations.shimmer} infinite;
`;

export default ShimmerSkeleton;
