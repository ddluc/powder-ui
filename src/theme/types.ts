export type ThemeFont = {
  family: {
    display: string;
    body: string;
    mono: string;
  };
  weight: {
    light: number;
    normal: number;
    semibold: number;
    bold: number;
  };
  size: {
    xsmall: number;
    small: number;
    normal: number;
    large: number;
    subtitle: number;
    title: number;
  };
};

export type Color = string;

export type ThemeColor = {
  main: string;
  contrastText: string;
  shades: Color[];
};

export type ThemePalette = {
  primary: ThemeColor;
  accent: ThemeColor;
  success: ThemeColor;
  warning: ThemeColor;
  danger: ThemeColor;
  base: Color;
  background: Color;
  foreground: Color;
  grey: Color;
  lightgrey: Color;
  neutral: [Color, Color, Color, Color, Color, Color];
  visualization: [Color, Color, Color, Color, Color, Color];
};

export type ThemeBreakpoints = {
  xl: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
};

export type ThemeBorder = {
  radius: {
    sm: string;
    lg: string;
  };
  width: string;
};

export type ThemeElevation = [string, string, string, string];

export type ThemeSpacing = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export type ThemeLevels = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

export type ThemeSkeleton = {
  colors: [string, string];
  animation: 'wave' | 'pulse' | 'none';
};

export type ThemeForm = {
  outline: string;
};

export interface Theme {
  name: string;
  mode: 'dark' | 'light';
  id?: string;
  fonts: ThemeFont;
  palette: ThemePalette;
  border: ThemeBorder;
  spacing: ThemeSpacing;
  breakpoints: ThemeBreakpoints;
  zIndex: ThemeLevels;
  skeleton: ThemeSkeleton;
  forms: ThemeForm;
}
