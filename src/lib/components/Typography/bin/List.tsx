import styled, { Theme } from 'styled-components';
import { px } from '../../../util';
import { TextProperties } from '../types';
import { AbstractTextStyles } from './AbstractText';

export interface Props extends TextProperties {
  listStyle?: string;
  indent?: string;
}

export interface ThemedProps extends Props {
  theme: Theme;
}

export const UnorderedList = styled.ul<Props>`
  ${AbstractTextStyles}
  ${({ listStyle }) => listStyle && `list-style: ${listStyle}`};
  padding-left: ${({ indent = '40px' }) => indent};
  line-height: initial;
`;

export const OrderedList = styled.ol<Props>`
  ${AbstractTextStyles}
  ${({ listStyle }) => listStyle && `list-style: ${listStyle}`};
  padding-left: ${({ indent = '40px' }) => indent};
  line-height: initial;
`;

export const ListItem = styled.li<Props>`
  ${AbstractTextStyles}
  font-size: ${({ size, theme }) => px(size || theme.fonts.size.normal)};
  line-height: ${({ lineHeight, size, theme }) =>
    px(lineHeight || Math.floor((size || theme.fonts.size.normal) * 1.5))};
  margin-top: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;
