// theme.ts
import { Theme } from 'styled-components';
import { generateThemeSpacing, generateZIndices } from './utils';

export const DEFAULT_THEME: Theme = {
  name: 'Default',
  mode: 'dark',
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
    primary: {
      // 600
      main: '#3FD4C0',
      contrastText: '#052E29',
      // 100, 300, 500, 700, 900
      shades: ['#cdfaf0', '#61e7d1', '#17b5a2', '#11746b', '#052e2d']
    },
    accent: {
      main: '#53C8DF',
      contrastText: '#102f3c',
      // 100, 300, 500, 700, 900
      shades: ['#d5f4f8', '#7bd7e5', '#1f819b', '#225668', '#102f3c']
    },
    success: {
      main: '#22c52b',
      contrastText: '#FFFFFF',
      shades: ['#bbf7bd', '#16a31e', '#16651b']
    },
    warning: {
      main: '#ff9500',
      contrastText: '#FFFFFF',
      shades: ['#ffe485', '#ce9600', '#983908']
    },
    danger: {
      main: '#ff2d2d',
      contrastText: '#FFFFFF',
      shades: ['#ffc3c3', '#ce0707', '#8c1010']
    },
    base: '#000000',
    background: '#222425',
    foreground: '#FFFFFF',
    grey: '#C4C4C4',
    lightgrey: '#EDEDED',
    // 50, 200, 400, 600, 800, 950
    neutral: ['#f3f7f8', '#c5d6dc', '#6e94a2', '#476473', '#394851', '#212b32'],
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
    colors: ['#212b32', '#394851'],
    animation: 'wave'
  },
  forms: {
    outline: '0px 0px 0px 2px'
  }
};
