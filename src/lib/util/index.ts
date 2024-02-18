/* eslint-disable @typescript-eslint/no-this-alias */

import { AnonymousFunction } from '../types';
import { Theme } from '../../theme/types';
export { shouldForwardProp } from './shouldForwardProp';

export const logBuild = (): void => {
  // eslint-disable-next-line no-console
  console.log(
    '[powder-ui]: Render Build v0.0.1. See https://github.com/ddluc/powder-ui for for more information'
  );
};

/**
 *
 * @param func the function to debouce
 * @param interval the interval to wait (in milliseconds)
 * @param leading
 * @returns
 */

export const debounce = (func: AnonymousFunction, interval = 200, leading = false) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]): any => {
    const context = this;
    const invoke = () => {
      timeout = null;
      if (!leading) func.apply(context, args);
    };
    if (leading && !timeout) func.apply(context, args);
    clearTimeout(timeout);
    timeout = setTimeout(invoke, interval);
  };
};

/**
 * Wraps a numeric digit and returns a pixel value
 * @param num
 * @returns string (in pixel unit)
 */
export const px = (num: number): string => `${num}px`;

/**
 * Wraps a numeric digit and returns a percent value
 * @param num
 * @returns string (in percent unit)
 */
export const pcnt = (num: number): string => `${num}%`;

/**
 * Addds transparency to a color
 */
export const transparentize = (color: string, opacity: number) => {
  if (!opacity) return color;
  return (
    color +
    Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
      .toString(16)
      .toUpperCase()
  );
};

/**
 * Genereate a box shadow for form elements
 * @param error form element has error
 * @param theme the ui theme
 * @param shade the shade to use for the outline
 * @param dangerOpacity the opacity to set for error outline
 */
export const getOutline = (error: boolean, theme: Theme): string => {
  if (error) {
    return `${transparentize(theme.palette.danger.main, 0.3)} ${theme.forms.outline}`;
  }
  return `${transparentize(theme.palette.primary.main, 0.3)} ${theme.forms.outline}`;
};

/**
 * Determines if the app is desktop or mobile
 * @param wdith
 * @param theme
 */
export const isDesktop = (window: { width: number | undefined }, theme: Theme): boolean => {
  const breakpointSize = parseInt(theme.breakpoints.md.replace(/[^0-9]/g, ''), 10);
  return window.width > breakpointSize;
};

/**
 * Determines if the app is desktop or mobile
 * @param width
 * @param breakpoint
 */

export const isMobile = (window: { width: number | undefined }, theme: Theme): boolean => {
  const breakpointSize = parseInt(theme.breakpoints.md.replace(/[^0-9]/g, ''), 10);
  return window.width <= breakpointSize;
};
