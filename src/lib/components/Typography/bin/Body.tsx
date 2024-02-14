import styled, { Theme } from 'styled-components';
import { TextProperties } from '../types';
import { AbstractTextStyles } from './AbstractText';

export interface Props extends TextProperties {}

export interface ThemedProps extends Props {
  theme: Theme;
}

export const Body = styled.p<Props>`
  ${AbstractTextStyles}
  font-size: ${({ size, theme }) => size || `${theme.fonts.size.normal}px`};
  line-height: ${({ lineHeight, theme }) =>
    lineHeight || `${Math.floor(theme.fonts.size.normal * 1.5)}px`};
  font-weight: ${({ weight, theme }) => weight || theme.fonts.weight.normal};
  & strong {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`;
