import styled, { Theme } from 'styled-components';
import { baseCSS } from '../Block';
import { BaseCSSProperties } from '../../types';

export interface Props extends BaseCSSProperties {
  xl: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
}

export interface ThemedProps extends Props {
  theme: Theme;
}
const Scale = styled.div<Props>`
  ${baseCSS}
  width: ${({ xl }: ThemedProps) => xl};
  @media screen and (max-width: ${({ theme }: ThemedProps) => theme.breakpoints.lg}) {
    width: ${({ lg }: ThemedProps) => lg};
  }
  @media screen and (max-width: ${({ theme }: ThemedProps) => theme.breakpoints.md}) {
    width: ${({ md }: ThemedProps) => md};
  }
  @media screen and (max-width: ${({ theme }: ThemedProps) => theme.breakpoints.sm}) {
    width: ${({ sm }: ThemedProps) => sm};
  }
  @media screen and (max-width: ${({ theme }: ThemedProps) => theme.breakpoints.xs}) {
    width: ${({ xs }: ThemedProps) => xs};
  }
`;

export default Scale;
