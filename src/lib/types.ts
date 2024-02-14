/**
 *
 * Re-usable and utility types
 * ==================================================================
 */

import React from 'react';

export type Nullable<T> = T | null;

/**
 * Define base CSS property types
 */
export type BackgroundCSSProperty = {
  color?: string | 'transparent' | 'initial' | 'inherit';
  position?: string;
  image?: 'url' | 'none' | 'initial' | 'inherit';
  repeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'initial' | 'inherit';
  attachment?: 'scroll' | 'fixed' | 'local' | 'initial' | 'inherit';
  size?: 'auto' | 'length' | 'cover' | 'contain' | 'initial' | 'inherit';
  origin?: 'padding-box' | 'border-box' | 'content-box' | 'initial' | 'inherit';
  clip?: 'border-box' | 'padding-box' | 'content-box' | 'initial' | 'inherit';
};

export type PaddingCSSProperty = [string, string, string, string];
export type MarginCSSProperty = [string, string, string, string];
export type PositionCSSProperty = 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
export type OverflowCSSProperty = 'visible' | 'hidden' | 'scroll' | 'auto';
export type TextAlignCSSProperty = 'right' | 'center' | 'left';
export type CSSFLoatProperty = 'left' | 'right' | 'none';
export type BoxSizingCSSProperty = 'border-box' | 'content-box' | 'inherit' | 'initial';

export type BaseCSSProperties = {
  id?: string;
  display?: 'block' | 'inline-block' | 'flex' | 'grid';
  height?: string;
  width?: string;
  float?: CSSFLoatProperty;
  margin?: MarginCSSProperty;
  padding?: PaddingCSSProperty;
  m?: string;
  p?: string;
  border?: string;
  radius?: string;
  opacity?: number;
  background?: BackgroundCSSProperty;
  outline?: string;
  position?: PositionCSSProperty;
  zIndex?: number;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  overflow?: OverflowCSSProperty;
  textAlign?: TextAlignCSSProperty;
  boxSizing?: BoxSizingCSSProperty;
};

export type AnonymousFunction = (...args: any[]) => any;

export type PaletteOption =
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral'
  | 'foreground'
  | 'grey'
  | 'purple'
  | 'background'
  | 'vis1'
  | 'vis2'
  | 'vis3'
  | 'vis4'
  | 'vis5'
  | 'vis6';

// Indexes on the theme's palete
export type PaletteIndex = 0 | 1 | 2 | 3 | 4 | 5;

export type AlertData = {
  id: string;
  title: string;
  content: string;
  duration?: number;
  type?: PaletteOption;
  icon?: React.ReactNode;
};

export type OverlayState = 'opened' | 'closing' | 'closed';

export type ElevationLevel = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16;

export type CSSTransitionAnimation = {
  duration: number;
  delay: number;
  easing?: string;
  animation?: string;
  fillMode?: string;
};
