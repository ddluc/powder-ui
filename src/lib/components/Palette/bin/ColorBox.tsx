import styled, { Theme } from 'styled-components';

// eslint-disable-next-line max-len
type ThemeColors =
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'background'
  | 'foreground'
  | 'grey'
  | 'lightgrey'
  | 'neutral'
  | 'visualization';

type ColorBoxProps = {
  color: ThemeColors;
  shade?: number;
  border?: string;
};

export interface ThemedProps extends ColorBoxProps {
  theme: Theme;
}

export const getThemeColor = ({ color, shade = null, theme }: ThemedProps): string => {
  if (
    color === 'primary' ||
    color === 'accent' ||
    color === 'danger' ||
    color === 'warning' ||
    color === 'success'
  ) {
    if (shade !== null) return theme.palette[color].shades[shade];
    return theme.palette[color].main;
  }
  if (color === 'visualization' || color === 'neutral') {
    return theme.palette[color][shade];
  }
  return theme.palette[color];
};

export const ColorBox = styled.div<ColorBoxProps>`
  position: relative;
  height: 40px;
  width: 40px;
  margin: 5px 5px 5px 5px;
  border: ${({ border }) => (border ? `solid 1px ${border}` : '')};
  background-color: ${getThemeColor};
  &::after {
    color: ${({ theme }) => theme.palette.foreground};
    content: '${getThemeColor}';
    font-size: 9px;
    width: 60px;
    position: absolute;
    bottom: -20px;
  }
`;

export const BrandColorBox = styled.div<ColorBoxProps>`
  position: relative;
  height: 60px;
  width: 60px;
  margin: 5px 20px 5px 5px;
  border: ${({ border }) => (border ? `solid 1px ${border}` : '')};
  background-color: ${getThemeColor};
  &::after {
    content: '${getThemeColor}';
    color: ${({ theme }) => theme.palette.background};
    font-size: 9px;
    width: 60px;
    position: absolute;
    bottom: -20px;
  }
`;
