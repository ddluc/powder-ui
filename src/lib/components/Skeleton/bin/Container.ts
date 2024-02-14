import styled, { Theme } from 'styled-components';

export interface Props {
  type: 'circle' | 'box';
  width: number;
  height: number;
  fluid: boolean;
  margin?: [number, number, number, number];
}

interface ThemedProps extends Props {
  theme: Theme;
}

const Container = styled.div<Props>`
  width: ${({ fluid, width }: ThemedProps) => (fluid ? '100%' : `${width}px`)};
  height: ${({ height }: ThemedProps) => `${height}px`};
  ${({ margin }: ThemedProps) =>
    margin && `margin: ${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  ${({ type = 'box' }: ThemedProps) =>
    type === 'circle' ? 'clip-path: circle(50% at 50% 50%)' : ''}
`;

export default Container;
