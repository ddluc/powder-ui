import { css, Theme } from 'styled-components';
import { TextProperties } from '../types';

export interface Props extends TextProperties {}

export interface ThemedProps extends Props {
  theme: Theme;
}

export const AbstractTextStyles = css<Props>`
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size, theme }) => size || `${theme.fonts.size.normal}px`};
  line-height: ${({ lineHeight, theme }) => lineHeight || `${theme.fonts.size.normal * 1.2}px`};

  ${({ spacing, condensed, top, bottom, theme }) => {
    if (spacing) return `margin: ${spacing.top} 0px ${spacing.bottom} 0px`;
    if (top && bottom) return `margin: ${top} 0px ${bottom} 0px`;
    if (condensed) return 'margin: 0px';
    return `margin: ${theme.spacing[2]} 0px`;
  }}

  ${({ decoration }) => decoration && `text-decoration: ${decoration}`};
  ${({ italic }) => italic && 'font-style: italic'};
  ${({ align }) => align && `text-align: ${align}`};
  ${({ color, theme }) => {
    if (color) return `color: ${color}`;
    return `color: ${theme.palette.foreground};`;
  }};
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: 100%;
    `};
`;
