import styled, { Theme } from 'styled-components';
import { TextProperties } from '../types';
import { AbstractTextStyles } from './AbstractText';

export interface Props extends TextProperties {
  style?: string;
  indent?: string;
}

export interface ThemedProps extends Props {
  theme: Theme;
}

export const UnorderedList = styled.ul<Props>`
  ${AbstractTextStyles}
  ${({ style }) => style && `list-style: ${style}`};
  padding-left: ${({ indent = '40px' }) => indent};
  line-height: initial;
`;

export const OrderedList = styled.ol<Props>`
  ${AbstractTextStyles}
  ${({ style }) => style && `list-style: ${style}`};
  padding-left: ${({ indent = '40px' }) => indent};
  line-height: initial;
`;

export const ListItem = styled.li<Props>`
  ${AbstractTextStyles}
  font-size: ${({ size, theme }) => size || `${theme.fonts.size.normal}px`};
  line-height: ${({ lineHeight, theme }) =>
    lineHeight || `${Math.floor(theme.fonts.size.normal * 1)}px`};
  margin-top: ${({ spacing }) => spacing || '10px'};
  margin-bottom: ${({ spacing }) => spacing || '10px'};
`;
