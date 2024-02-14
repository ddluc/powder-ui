import styled, { Theme } from 'styled-components';
import { px, getOutline } from '../../../util';

export type Props = {
  thumbSize: number;
  error?: boolean;
  disabled?: boolean;
};

const getThumbColor = (theme: Theme, error: boolean, disabled: boolean) => {
  if (disabled) {
    return theme.palette.neutral[2];
  }
  if (error) {
    return theme.palette.danger.main;
  }
  return theme.palette.primary.main;
};

const getRailColor = (theme: Theme, error: boolean, disabled: boolean) => {
  if (disabled) {
    return theme.palette.lightgrey;
  }
  if (error) {
    return theme.palette.danger.shades[2];
  }
  return theme.palette.neutral[4];
};

export const Slider = styled.input<Props>`
  -webkit-appearance: none;
  appearance: none;
  margin: 20px 0px 0px 0px;
  width: 100%;
  height: 8px;
  background: ${({ theme, error, disabled }) => getRailColor(theme, error, disabled)};
  border-radius: ${({ theme }) => theme.border.radius};
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
    &::-webkit-slider-thumb {
      box-shadow: ${({ theme, error, disabled }) => !disabled && getOutline(error, theme)};
    }
    &::-moz-range-thumb {
      box-shadow: ${({ theme, error, disabled }) => !disabled && getOutline(error, theme)};
    }
  }

  &::-webkit-slider-thumb {
    opacity: 1;
    -webkit-appearance: none;
    appearance: none;
    width: ${({ thumbSize }) => px(thumbSize)};
    height: ${({ thumbSize }) => px(thumbSize)};
    border-radius: 50%;
    background: ${({ theme, error, disabled }) => getThumbColor(theme, error, disabled)};
    cursor: pointer;
    transition: box-shadow 250ms ease-out;
  }

  &::-moz-range-thumb {
    border: 0px;
    opacity: 1;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ theme, error, disabled }) => getThumbColor(theme, error, disabled)};
    cursor: pointer;
  }
`;
