// @ts-nocheck

import type { Preview } from '@storybook/react';
import React from 'react';

import { useGlobals } from '@storybook/preview-api';
import styled, { css, ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../src/theme/default';
import { ALT_THEME } from '../src/theme/alt';
import GlobalFonts from '../src/theme/fonts';
import ResetCSS from '../src/theme/reset';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: { disable: true, grid: { disable: true } }
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'default',
      toolbar: {
        icon: 'paintbrush',
        // Here you define which themes you want to allow
        items: [
          { value: 'default', right: '(dark)', icon: 'paintbrush', title: 'Default Theme' },
          { value: 'alt', right: '(light)', icon: 'paintbrush', title: 'Alt Theme' }
        ],
        showName: true
      }
    }
  }
};

const ThemeBlock = styled.div<{ left?: boolean; fill?: boolean }>(
  ({ background }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    bottom: 0;
    overflow: auto;
    padding: 0px;
    z-index: -100;
    background: ${background};
  `
);

export const decorators = [
  (Story, context) => {
    const [globals] = useGlobals(); // Get the current global theme
    const theme = globals.theme === 'alt' ? ALT_THEME : DEFAULT_THEME;
    return (
      <ThemeProvider theme={theme}>
        <ResetCSS />
        <GlobalFonts />
        <ThemeBlock background={theme.palette.background} />
        <Story {...context} />
      </ThemeProvider>
    );
  }
];

export default preview;
