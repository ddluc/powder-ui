import { css, Theme } from 'styled-components';
import { px } from '../../../util';
import { TextProperties } from '../types';

export interface Props extends TextProperties {}

export interface ThemedProps extends Props {
  theme: Theme;
}

export const AbstractTextStyles = css<Props>`
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-weight: ${({ weight = 'normal', theme }) => theme.fonts.weight[weight]};
  font-size: ${({ size, theme }) => px(size || theme.fonts.size.normal)};
  line-height: ${({ lineHeight, size, theme }) => {
    if (lineHeight) return px(lineHeight);
    return px(Math.floor((size || theme.fonts.size.normal) * 1.5));
  }};

  ${({ top, bottom, condensed, theme }) => {
    if (top !== undefined && bottom !== undefined)
      return `margin: ${theme.spacing[top]} 0px ${theme.spacing[bottom]} 0px`;
    if (condensed) return 'margin: 0px';
    return `margin: ${theme.spacing[2]} 0px`;
  }}

  ${({ decoration }) => decoration && `text-decoration: ${decoration}`};
  ${({ italic }) => italic && 'font-style: italic'};
  ${({ align }) => align && `text-align: ${align}`};
  ${({ color, theme }) => (color ? `color: ${color}` : `color: ${theme.palette.foreground}`)};
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: 100%;
    `};
`;
