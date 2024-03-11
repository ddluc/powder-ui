import { Theme } from 'styled-components';

export type AlertPaletteItem = {
  background: string;
  text: string;
  border: string;
  icon: string;
};

export type AlertPalette = {
  [key: string]: AlertPaletteItem;
};

export const getAlertPalette = (theme: Theme): AlertPalette => {
  if (theme.mode === 'dark') {
    return {
      primary: {
        background: theme.palette.neutral[5],
        text: theme.palette.foreground,
        border: theme.palette.primary.main,
        icon: theme.palette.primary.main
      },
      accent: {
        background: theme.palette.neutral[5],
        text: theme.palette.foreground,
        border: theme.palette.accent.main,
        icon: theme.palette.accent.main
      },
      success: {
        background: theme.palette.neutral[5],
        text: theme.palette.foreground,
        border: theme.palette.success.main,
        icon: theme.palette.success.main
      },
      warning: {
        background: theme.palette.neutral[5],
        text: theme.palette.foreground,
        border: theme.palette.warning.main,
        icon: theme.palette.warning.main
      },
      danger: {
        background: theme.palette.neutral[5],
        text: theme.palette.foreground,
        border: theme.palette.danger.main,
        icon: theme.palette.danger.main
      },
      neutral: {
        background: theme.palette.neutral[5],
        text: theme.palette.foreground,
        border: theme.palette.neutral[2],
        icon: theme.palette.neutral[3]
      }
    };
  }

  return {
    primary: {
      background: theme.palette.background,
      text: theme.palette.foreground,
      border: theme.palette.primary.main,
      icon: theme.palette.primary.main
    },
    accent: {
      background: theme.palette.background,
      text: theme.palette.foreground,
      border: theme.palette.accent.main,
      icon: theme.palette.accent.main
    },
    success: {
      background: theme.palette.background,
      text: theme.palette.foreground,
      border: theme.palette.success.main,
      icon: theme.palette.success.main
    },
    warning: {
      background: theme.palette.background,
      text: theme.palette.foreground,
      border: theme.palette.warning.main,
      icon: theme.palette.warning.main
    },
    danger: {
      background: theme.palette.background,
      text: theme.palette.foreground,
      border: theme.palette.danger.main,
      icon: theme.palette.danger.main
    },
    neutral: {
      background: theme.palette.neutral[4],
      text: theme.palette.foreground,
      border: theme.palette.neutral[2],
      icon: theme.palette.neutral[1]
    }
  };
};
