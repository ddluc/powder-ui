import styled, { Theme } from 'styled-components';
import { TextProperties } from '../types';
import { AbstractTextStyles } from './AbstractText';

export interface Props extends TextProperties {}

export interface ThemedProps extends Props {
  theme: Theme;
}

export const H1 = styled.h1<Props>`
  ${AbstractTextStyles}
  font-family: ${({ theme }) => theme.fonts.family.display};
  font-size: ${({ size, theme }) => size || `${theme.fonts.size.title}px`};
  line-height: ${({ lineHeight, theme }) =>
    lineHeight || `${Math.floor(theme.fonts.size.title * 1.25)}px`};
  font-weight: ${({ weight, theme }) => weight || theme.fonts.weight.semibold};
`;

export const H2 = styled.h2<Props>`
  ${AbstractTextStyles}
  font-family: ${({ theme }) => theme.fonts.family.display};
  font-size: ${({ size, theme }) => size || `${theme.fonts.size.subtitle}px`};
  line-height: ${({ lineHeight, theme }) =>
    lineHeight || `${Math.floor(theme.fonts.size.subtitle * 1.25)}px`};
  font-weight: ${({ weight, theme }) => weight || theme.fonts.weight.bold};
`;

export const H3 = styled.h3<Props>`
  ${AbstractTextStyles}
  font-family: ${({ theme }) => theme.fonts.family.display};
  font-size: ${({ size, theme }) => size || `${theme.fonts.size.large}px`};
  line-height: ${({ lineHeight, theme }) =>
    lineHeight || `${Math.floor(theme.fonts.size.large * 1.25)}px`};
  font-weight: ${({ weight, theme }) => weight || theme.fonts.weight.normal};
  font-style: italic;
`;

export const H4 = styled.h4<Props>`
  ${AbstractTextStyles}
  font-family: ${({ theme }) => theme.fonts.family.display};
  font-size: ${({ size, theme }) => size || `${theme.fonts.size.large}px`};
  line-height: ${({ lineHeight, theme }) =>
    lineHeight || `${Math.floor(theme.fonts.size.large * 1.25)}px`};
  font-weight: ${({ weight, theme }) => weight || theme.fonts.weight.light};
`;

export const H5 = styled.h5<Props>`
  ${AbstractTextStyles}
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-size: ${({ size, theme }) => size || `${theme.fonts.size.normal}px`};
  line-height: ${({ lineHeight, theme }) =>
    lineHeight || `${Math.floor(theme.fonts.size.normal * 1.25)}px`};
  font-weight: ${({ weight, theme }) => weight || theme.fonts.weight.bold};
`;

export const H6 = styled.h6<Props>`
  ${AbstractTextStyles}
  font-family: ${({ theme }) => theme.fonts.family.display};
  font-size: ${({ size, theme }) => size || `${theme.fonts.size.small}px`};
  line-height: ${({ lineHeight, theme }) =>
    lineHeight || `${Math.floor(theme.fonts.size.small * 1.25)}px`};
  font-weight: ${({ weight, theme }) => weight || theme.fonts.weight.light};
`;
