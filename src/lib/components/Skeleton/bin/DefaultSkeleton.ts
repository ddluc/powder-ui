import styled, { Theme } from 'styled-components';

export interface Props {
  colors?: [string, string];
}

interface ThemedProps extends Props {
  theme: Theme;
}

const DefaultSkeleton = styled.div<Props>`
  height: 100%;
  width: 100%;
  background-color: ${({ colors }: ThemedProps) => colors[1]};
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
`;

export default DefaultSkeleton;
