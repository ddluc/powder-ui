// theme.ts
import { Theme } from 'styled-components';
import { generateThemeSpacing, generateZIndices } from './utils';

export const ALT_THEME: Theme = {
  name: 'Alt',
  mode: 'light',
  fonts: {
    family: {
      display: 'IBM Plex Mono',
      body: 'IBM Plex Sans',
      mono: 'IBM Plex Mono'
    },
    weight: {
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700
    },
    size: {
      xsmall: 12,
      small: 14,
      normal: 16,
      large: 20,
      subtitle: 24,
      title: 36
    }
  },
  palette: {
    /**
     * @see https://uicolors.app/create to generate consistent shading
     * @see https://coolors.co/contrast-checker/ffffff-000000 to verify color contrasts
     */
    primary: {
      // 600
      main: '#5945e6',
      contrastText: '#FFFFFF',
      // 900, 700, 500, 300, 100
      shades: ['#3a396f', '#4e4ca9', '#6a73c7', '#aeb8e2', '#e4e6f5']
    },
    accent: {
      // 600
      main: '#a0559e',
      contrastText: '#FFFFFF',
      // 900, 700, 500, 300, 100
      shades: ['#5c3359', '#864583', '#c075c0', '#e5c2e5', '#f8eef9']
    },
    success: {
      main: '#22c52b',
      contrastText: '#FFFFFF',
      shades: ['#16651b', '#16a31e', '#bbf7bd']
    },
    warning: {
      main: '#ff9500',
      contrastText: '#FFFFFF',
      shades: ['#983908', '#ce9600', '#ffe485']
    },
    danger: {
      main: '#ff2d2d',
      contrastText: '#FFFFFF',
      shades: ['#8c1010', '#ce0707', '#ffc3c3']
    },
    base: '#FFFFFF',
    background: '#FFFFFF',
    foreground: '#000000',
    grey: '#C4C4C4',
    lightgrey: '#EDEDED',
    // 950, 800, 600, 400, 200, 50
    neutral: ['#343b41', '#5f6b78', '#8a98a6', '#b9c5cc', '#e7ebed', '#f8fafa'],
    visualization: ['#fd7f6f', '#7eb0d5', '#b2e061', '#ffee65', '#ffb55a', '#ffee65']
  },
  border: {
    radius: {
      sm: '4px',
      lg: '18px'
    },
    width: '1px'
  },
  breakpoints: {
    xs: '400px',
    sm: '720px',
    md: '960px',
    lg: '1200px',
    xl: '1300px'
  },
  spacing: generateThemeSpacing(4),
  zIndex: generateZIndices(),
  skeleton: {
    colors: ['#f9f9f9', '#f3f3f3'],
    animation: 'wave'
  },
  forms: {
    outline: '0px 0px 0px 2px'
  }
};
