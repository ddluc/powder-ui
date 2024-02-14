import styled, { Theme } from 'styled-components';
import { TextProperties } from '../types';
import { AbstractTextStyles } from './AbstractText';

export interface Props extends TextProperties {
  visited?: boolean;
  active?: boolean;
  wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word';
}

export interface ThemedProps extends Props {
  theme: Theme;
}

export const Link = styled.a<Props>`
  ${AbstractTextStyles}
  margin: 0px 0px;
  text-decoration: none;
  font-size: ${({ size, theme }) => size || `${theme.fonts.size.normal}px`};
  color: ${({ theme, visited, active, color }) => {
    if (color) return color;
    if (active) return theme.palette.primary.shades[2];
    if (visited) return theme.palette.neutral[2];
    return theme.palette.primary.shades[2];
  }};
  border-bottom: ${({ active }) => (active ? 'solid 2px' : 'none')};
  border-color: ${({ active, theme }) => (active ? theme.palette.primary.shades[2] : 'none')};
  word-break: ${({ wordBreak }) => wordBreak || 'normal'};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.primary.shades[0]};
    border-color: ${({ theme }) => theme.palette.primary.shades[0]};
    border-bottom: solid 2px;
  }

  &:active {
    color: ${({ theme }) => theme.palette.primary.shades[1]};
    border-color: ${({ theme }) => theme.palette.primary.shades[1]};
    border-bottom: solid 1px;
  }

  &:visited {
    color: ${({ theme }) => theme.palette.primary.shades[4]};
  }
`;
