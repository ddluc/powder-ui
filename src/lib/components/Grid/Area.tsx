import styled, { Theme } from 'styled-components';
import { baseCSS } from '../Block';
import { BaseCSSProperties } from '../../types';

export interface Props extends BaseCSSProperties {
  area: string;
  justify: 'start' | 'end' | 'center' | 'stretch';
  align: 'start' | 'end' | 'center' | 'stretch';
}

export interface ThemedProps extends Props {
  theme: Theme;
}

const Area = styled.div<Props>`
  ${baseCSS}
  ${({ area }) => area && `grid-area: ${area}`};
  ${({ justify }: ThemedProps) => justify && `align-self: ${justify}`};
  ${({ align }: ThemedProps) => align && `align-self: ${align}`};
`;

export default Area;
