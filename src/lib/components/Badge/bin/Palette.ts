import { Theme } from 'styled-components';

export type BadgePaletteItem = {
  background: string;
  text: string;
  border: string;
  icon: string;
};

export type BadgePalette = {
  [key: string]: BadgePaletteItem;
};

export const getBadgePallete = (theme: Theme): BadgePalette => ({
  primary: {
    background: theme.palette.primary.main,
    text: theme.palette.primary.contrastText,
    border: theme.palette.primary.shades[2],
    icon: theme.palette.primary.contrastText
  },
  accent: {
    background: theme.palette.accent.main,
    text: theme.palette.accent.contrastText,
    border: theme.palette.accent.shades[2],
    icon: theme.palette.accent.contrastText
  },
  success: {
    background: theme.palette.success.main,
    text: theme.palette.danger.contrastText,
    border: theme.palette.success.shades[2],
    icon: theme.palette.danger.contrastText
  },
  warning: {
    background: theme.palette.warning.main,
    text: theme.palette.danger.contrastText,
    border: theme.palette.warning.shades[2],
    icon: theme.palette.danger.contrastText
  },
  danger: {
    background: theme.palette.danger.main,
    text: theme.palette.danger.contrastText,
    border: theme.palette.danger.shades[2],
    icon: theme.palette.danger.contrastText
  },
  grey: {
    background: theme.palette.lightgrey,
    text: theme.palette.neutral[1],
    border: theme.palette.grey,
    icon: theme.palette.neutral[1]
  },
  neutral: {
    background: theme.palette.neutral[1],
    text: theme.palette.neutral[3],
    border: theme.palette.neutral[2],
    icon: theme.palette.neutral[2]
  },
  background: {
    background: theme.palette.background,
    text: theme.palette.foreground,
    border: theme.palette.foreground,
    icon: theme.palette.foreground
  },
  foreground: {
    background: theme.palette.foreground,
    text: theme.palette.background,
    border: theme.palette.foreground,
    icon: theme.palette.background
  }
});
