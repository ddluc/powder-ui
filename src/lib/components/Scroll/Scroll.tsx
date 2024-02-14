import styled, { Theme } from 'styled-components';
import { Block } from '../Block';
import { BaseCSSProperties } from '../../types';

// Example component Props
export interface Props extends BaseCSSProperties {
  direction: 'x' | 'y';
}

// Extend the Component props with the injected theme
export interface ThemedProps extends Props {
  theme: Theme;
}

// Defined a styled component implmementation
const Scroll = styled(Block)<Props>`
  ${({ direction }: ThemedProps) => direction === 'x' && 'overflow-x: scroll'};
  ${({ direction }: ThemedProps) => direction === 'y' && 'overflow-y: scroll'};
`;

export default Scroll;
