/* eslint-disable object-curly-newline */
/* eslint-disable indent */

import styled from 'styled-components';
import { DefaultButton } from './DefaultButton';
import { transparentize } from '../../../util';

export interface Props {
  intent: 'success' | 'danger' | 'warning';
  variation: 'default' | 'secondary' | 'minimal';
  fluid?: boolean;
  iconPosition?: 'left' | 'right';
  color?: string;
  textColor?: string;
}

export const IntentButton = styled(DefaultButton)<Props>`
  ${({ variation }) => (variation === 'minimal' ? 'padding: 2px' : '')};
  ${({ variation }) => (variation === 'minimal' ? 'border: none' : '')};

  color: ${({ theme, variation, textColor, intent }) => {
    if (textColor) return textColor;
    if (variation === 'default') return theme.palette[intent].contrastText;
    return theme.palette[intent].shades[0];
  }};

  background-color: ${({ theme, variation, color, intent }) => {
    if (color) return color;
    if (variation === 'default') return theme.palette[intent].main;
    return 'transparent';
  }};

  border-color: ${({ theme, variation, color, intent }) => {
    if (color) return color;
    if (variation === 'minimal') return 'transparent';
    return theme.palette[intent].main;
  }};

  fill: ${({ theme, variation, textColor, intent }) => {
    if (textColor) return textColor;
    if (variation === 'default') return theme.palette[intent].contrastText;
    return theme.palette[intent].main;
  }};

  &:focus {
    border-color: ${({ theme, intent }) => theme.palette[intent].main};
    box-shadow: ${({ theme, intent }) =>
      `${transparentize(theme.palette[intent].shades[2], 0.4)} 0px 0px 0px 2px`};
  }

  &:hover {
    ${({ variation }) => (variation === 'minimal' ? 'border: none' : '')};
    border-color: ${({ theme, intent }) => theme.palette[intent].main};
    box-shadow: ${({ theme, intent, variation }) => {
      if (variation === 'minimal') return 'none';
      return `${transparentize(theme.palette[intent].main, 0.4)} 0px 0px 0px 2px`;
    }};
    transform: translate(0px, -2px);
    cursor: pointer;
  }

  &:disabled {
    color: ${({ theme }) => theme.palette.neutral[1]};
    fill: ${({ theme }) => theme.palette.neutral[1]};
    background-color: ${({ theme }) => theme.palette.neutral[3]};
    border-color: ${({ theme }) => theme.palette.neutral[3]};
    box-shadow: none;
    transform: translate(0px, 0px);
    cursor: not-allowed;
  }
`;
