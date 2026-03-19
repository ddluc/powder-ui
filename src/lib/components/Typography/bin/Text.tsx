import { Theme } from 'styled-components';
import { styled } from '../../../styled';
import { px } from '../../../util';
import { TextProperties } from '../types';
import { AbstractTextStyles } from './AbstractText';

export interface Props extends TextProperties {}

export interface ThemedProps extends Props {
  theme: Theme;
}

export const Text = styled.span<Props>`
  ${AbstractTextStyles}
  font-size: ${({ size, theme }) => px(size || theme.fonts.size.normal)};
  line-height: ${({ lineHeight, size, theme }) =>
    px(lineHeight || Math.floor((size || theme.fonts.size.normal) * 1.5))};
  font-weight: ${({ weight = 'normal', theme }) => theme.fonts.weight[weight]};
  & strong {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`;
