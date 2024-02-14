import styled, { Theme } from 'styled-components';
import { TextProperties } from '../types';
import { AbstractTextStyles } from './AbstractText';

export interface Props extends TextProperties {}

export interface ThemedProps extends Props {
  theme: Theme;
}

export const Mono = styled.p<Props>`
  ${AbstractTextStyles}
  font-family: ${({ theme }) => theme.fonts.family.mono};
  font-size: ${({ size, theme }) => size || `${theme.fonts.size.normal}px`};
  line-height: ${({ lineHeight, theme }) =>
    lineHeight || `${Math.floor(theme.fonts.size.normal * 1.5)}px`};
  font-weight: ${({ weight, theme }) => weight || theme.fonts.weight.normal};
`;
