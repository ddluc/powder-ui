import styled, { Theme } from 'styled-components';
import { Block } from '../Block';
import { BaseCSSProperties } from '../../types';

export interface Props extends BaseCSSProperties {
  fit: 'fill' | 'contain' | 'cover' | 'scale' | 'none';
  align: string;
}

// Extend the Component props with the injected theme
export interface ThemedProps extends Props {
  theme: Theme;
}

// Defined a styled component implmementation
const Fit = styled(Block)<Props>`
  > * {
    object-fit: ${({ fit }: ThemedProps) => fit};
    height: 100%;
    width: 100%;
    object-position: ${({ align }) => align || '50% 50%'};
  }
`;

// Export the component as the default export
export default Fit;
