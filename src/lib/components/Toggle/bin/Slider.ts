import styled from 'styled-components';
import { px, getOutline } from '../../../util';

interface Props {
  isOn: boolean;
  error?: boolean;
  disabled?: boolean;
  isFocused?: boolean;
  knobColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

const knobSize = {
  sm: 12,
  md: 18,
  lg: 24
};

const sliderSize = {
  sm: 32,
  md: 48,
  lg: 60
};

const spacing = {
  sm: 2,
  md: 4,
  lg: 6
};

const calcDistance = (size: 'sm' | 'md' | 'lg') => {
  // Total travel distance (slider width - knob diameter - left and right padding)
  calcDistance;
  const distance = sliderSize[size] - knobSize[size] - spacing[size] * 2;
  return px(distance);
};

export const Slider = styled.div<Props>`
  // Base slider styles
  position: relative;
  width: ${({ size }) => px(sliderSize[size])};
  height: ${({ size }) => px(sliderSize[size] / 2)};
  border: solid 1px;
  border-radius: ${({ size }) => px(sliderSize[size] / 2)};
  background-color: ${({ isOn, error, theme }) => {
    if (error) return theme.palette.danger.shades[2];
    if (isOn) return theme.palette.primary.main;
    return theme.palette.neutral[3];
  }};
  border-color: ${({ isOn, error, theme }) => {
    if (error) return theme.palette.danger.shades[1];
    if (isOn) return theme.palette.primary.main;
    return theme.palette.neutral[3];
  }};

  cursor: pointer;
  will-change: background-color, box-shadow, border-color;
  transition:
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  // Hover state
  &:hover {
    border-color: ${({ theme, error }) =>
      error ? theme.palette.danger.main : theme.palette.primary.shades[1]};
    box-shadow: ${({ theme, error }) => getOutline(error, theme)};
  }

  // Focus state
  ${({ isFocused, theme, error }) => {
    if (isFocused)
      return `
        border-color: ${error ? theme.palette.danger.main : theme.palette.primary.shades[1]};
        box-shadow: ${getOutline(error, theme)};
      `;
  }}

  // Disabled state 
  ${({ disabled, isOn, theme }) => {
    if (disabled)
      return `
        border-color: ${theme.palette.neutral[3]};
        background-color: ${isOn ? theme.palette.primary.shades[3] : theme.palette.neutral[4]};
        box-shadow: none;
        &:hover {
          border-color: ${theme.palette.neutral[3]};
          box-shadow: none;
          cursor: not-allowed;
        }
      `;
  }}

  // The slider "knob"
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: ${({ size }) => px(spacing[size])};
    bottom: ${({ size }) => px(spacing[size])};
    height: ${({ size }) => px(knobSize[size])};
    width: ${({ size }) => px(knobSize[size])};
    border-radius: 50%;
    background-color: ${() => '#FFFFFF'};
    transition: transform 0.2s;
    will-change: transform;
    transform: ${({ isOn, size }) =>
      isOn ? `translateX(${calcDistance(size)}) translateY(-50%)` : 'translateY(-50%)'};
  }
`;
