/* eslint-disable max-len */

import styled, { Theme } from 'styled-components';
import { Block } from '../Block';
import { BaseCSSProperties } from '../../types';

// Example component Props
export interface Props extends BaseCSSProperties {
  // Properties for flex box
  row?: boolean;
  column?: boolean;
  reverse?: boolean;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flow?: string;
  // Shorthand property for justifyContent: center and alignItems: center
  center?: boolean;
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
  gap?: string;
  // Properties for flex items
  flex?: string;
  grow?: number | 'auto' | 'initial' | 'inherit';
  shrink?: number | 'auto' | 'initial' | 'inherit';
  basis?: string | number | 'auto' | 'initial' | 'inherit';
  order?: number;
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

// Extend the Component props with the injected theme
export interface ThemedProps extends Props {
  theme: Theme;
}

// Defined a styled component implmementation
const Flex = styled(Block)<Props>`
  display: flex;
  flex-direction: ${({ column, reverse }: ThemedProps) => {
    let direction = 'row';
    if (column) direction = 'column';
    if (reverse) direction = `${direction}-reverse`;
    return direction;
  }};
  ${({ wrap }: ThemedProps) => wrap && `flex-wrap: ${wrap}`};
  ${({ flow }: ThemedProps) => flow && `flex-flow: ${flow}`};
  ${({ justifyContent, center }: ThemedProps) => {
    if (center) return 'justify-content: center';
    return justifyContent && `justify-content: ${justifyContent}`;
  }};
  ${({ alignItems, center }: ThemedProps) => {
    if (center) return 'align-items: center';
    return alignItems && `align-items: ${alignItems}`;
  }};
  ${({ alignContent }: ThemedProps) => alignContent && `align-content: ${alignContent}`};
  ${({ gap }: ThemedProps) => gap && `gap: ${gap}`};
  ${({ flex }: ThemedProps) => flex && `flex: ${flex}`};
  ${({ grow }: ThemedProps) => grow !== undefined && `flex-grow: ${grow}`};
  ${({ shrink }: ThemedProps) => shrink !== undefined && `flex-shrink: ${shrink}`};
  ${({ basis }: ThemedProps) => basis !== undefined && `flex-basis: ${basis}`};
  ${({ order }: ThemedProps) => order !== undefined && `order: ${order}`};
  ${({ alignSelf }: ThemedProps) => alignSelf && `align-self: ${alignSelf}`};
`;

export default Flex;
