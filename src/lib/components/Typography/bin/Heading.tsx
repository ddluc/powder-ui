import styled, { Theme } from 'styled-components';
import { px } from '../../../util';
import { TextProperties } from '../types';
import { AbstractTextStyles } from './AbstractText';

export interface Props extends TextProperties {}

export interface ThemedProps extends Props {
  theme: Theme;
}

export const H1 = styled.h1<Props>`
  ${AbstractTextStyles}
  font-family: ${({ theme }) => theme.fonts.family.display};
  font-size: ${({ size, theme }) => px(size || theme.fonts.size.title)};
  line-height: ${({ lineHeight, size, theme }) =>
    px(lineHeight || Math.floor((size || theme.fonts.size.title) * 1.25))};
  font-weight: ${({ weight = 'semibold', theme }) => theme.fonts.weight[weight]};
`;

export const H2 = styled.h2<Props>`
  ${AbstractTextStyles}
  font-family: ${({ theme }) => theme.fonts.family.display};
  font-size: ${({ size, theme }) => px(size || theme.fonts.size.subtitle)};
  line-height: ${({ lineHeight, size, theme }) =>
    px(lineHeight || Math.floor((size || theme.fonts.size.subtitle) * 1.25))};
  font-weight: ${({ weight = 'bold', theme }) => theme.fonts.weight[weight]};
`;

export const H3 = styled.h3<Props>`
  ${AbstractTextStyles}
  font-family: ${({ theme }) => theme.fonts.family.display};
  font-size: ${({ size, theme }) => px(size || theme.fonts.size.large)};
  line-height: ${({ lineHeight, size, theme }) =>
    px(lineHeight || Math.floor((size || theme.fonts.size.large) * 1.25))};
  font-weight: ${({ weight = 'normal', theme }) => theme.fonts.weight[weight]};
`;

export const H4 = styled.h4<Props>`
  ${AbstractTextStyles}
  font-family: ${({ theme }) => theme.fonts.family.display};
  font-size: ${({ size, theme }) => px(size || theme.fonts.size.normal)};
  line-height: ${({ lineHeight, size, theme }) =>
    px(lineHeight || Math.floor((size || theme.fonts.size.normal) * 1.25))};
  font-weight: ${({ weight = 'light', theme }) => theme.fonts.weight[weight]};
`;

export const H5 = styled.h5<Props>`
  ${AbstractTextStyles}
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-size: ${({ size, theme }) => px(size || theme.fonts.size.small)};
  line-height: ${({ lineHeight, size, theme }) =>
    px(lineHeight || Math.floor((size || theme.fonts.size.small) * 1.25))};
  font-weight: ${({ weight = 'bold', theme }) => theme.fonts.weight[weight]};
`;

export const H6 = styled.h6<Props>`
  ${AbstractTextStyles}
  font-family: ${({ theme }) => theme.fonts.family.display};
  font-size: ${({ size, theme }) => px(size || theme.fonts.size.xsmall)};
  line-height: ${({ lineHeight, size, theme }) =>
    px(lineHeight || Math.floor((size || theme.fonts.size.xsmall) * 1.25))};
  font-weight: ${({ weight = 'light', theme }) => theme.fonts.weight[weight]};
`;
