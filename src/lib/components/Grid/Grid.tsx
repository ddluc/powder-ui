/* eslint-disable max-len */

import styled, { Theme } from 'styled-components';
import { Block } from '../Block';
import { BaseCSSProperties } from '../../types';

// Example component Props
export interface Props extends BaseCSSProperties {
  columns?: string;
  rows?: string;
  areas?: string[];
  rowGap?: string;
  columnGap?: string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right';
  alignItems?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'start'
    | 'end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline';
}

export interface ThemedProps extends Props {
  theme: Theme;
}

export const formatAreas = (areas: string[]): string => areas.map((area) => `"${area}"`).join(' ');

export const Grid = styled(Block)<Props>`
  display: grid;
  ${({ columns }: ThemedProps) => columns && `grid-template-columns: ${columns}`};
  ${({ rows }: ThemedProps) => rows && `grid-template-rows: ${rows}`};
  ${({ areas }: ThemedProps) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${({ columnGap }: ThemedProps) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }: ThemedProps) => rowGap && `row-gap: ${rowGap}`};
  ${({ justifyContent }: ThemedProps) => justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }: ThemedProps) => alignContent && `align-content: ${alignContent}`};
  ${({ alignItems }: ThemedProps) => alignItems && `align-items: ${alignItems}`};
`;

export default Grid;
