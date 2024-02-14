// styled.d.ts
import 'styled-components';
import {
  ThemeFont,
  ThemePalette,
  ThemeBorder,
  ThemeSpacing,
  ThemeBreakpoints,
  ThemeLevels,
  ThemeSkeleton,
  ThemeForm
} from './types';

declare module 'styled-components' {
  // eslint-disable-next-line no-unused-vars
  interface Theme {
    name: string;
    mode: 'dark' | 'light';
    id?: '__default' | undefined;
    fonts: ThemeFont;
    palette: ThemePalette;
    border: ThemeBorder;
    spacing: ThemeSpacing;
    breakpoints: ThemeBreakpoints;
    zIndex: ThemeLevels;
    skeleton: ThemeSkeleton;
    forms: ThemeForm;
  }

  // eslint-disable-next-line no-unused-vars
  interface DefaultTheme {
    name: string;
    id?: '__default' | undefined;
    mode: 'dark' | 'light';
    fonts: ThemeFont;
    palette: ThemePalette;
    border: ThemeBorder;
    spacing: ThemeSpacing;
    breakpoints: ThemeBreakpoints;
    zIndex: ThemeLevels;
    skeleton: ThemeSkeleton;
    forms: ThemeForm;
  }
}
