import styled from 'styled-components';
import { getOutline, px } from '../../../util';

// Example component Props
export interface Props {
  fluid?: boolean;
  color?: string;
  textColor?: string;
  textSize?: number;
  border?: string;
  radius?: string;
  height?: number;
  width?: number;
  fixed?: boolean;
  alignment?: string;
  gap?: number;
  condensed?: boolean;
  iconPosition?: 'left' | 'right';
}

// Defined a styled component implmementation
export const DefaultButton = styled.button<Props>`
  display: flex;
  justify-content: ${({ alignment }) => alignment || 'flex-start'};
  text-align: ${({ alignment }) => (alignment === 'center' ? 'center' : 'left')};
  align-items: center;
  gap: 0px ${({ theme }) => theme.spacing[2]};
  flex-direction: ${({ iconPosition }) => (iconPosition === 'right' ? 'row-reverse' : 'row')};
  background-color: ${({ theme, color }) => color || theme.palette.primary.main};
  color: ${({ theme, textColor }) => textColor || theme.palette.primary.contrastText};
  border: ${({ theme, border }) =>
    border || `solid ${theme.border.width} ${theme.palette.primary.main}`};
  border-radius: ${({ theme, radius }) => radius || theme.border.radius.sm};
  font-family: ${({ theme }) => theme.fonts.family.display};
  font-size: ${({ theme, textSize }) => (textSize ? px(textSize) : px(theme.fonts.size.small))};
  line-height: ${({ theme }) => px(theme.fonts.size.normal + 6)};
  padding: ${({ theme, condensed }) => (condensed ? '0px' : theme.spacing[2])};

  ${({ fluid, width }) => {
    if (width) return `width: ${width}px`;
    if (fluid) return 'width: 100%';
    return 'max-width: 220px';
  }};

  ${({ height }) => {
    if (height) return `height: ${height}px`;
    return '';
  }};

  outline: none;
  transition:
    transform 250ms ease,
    box-shadow 250ms ease;
  will-change: transform, box-shadow;
  fill: ${({ theme }) => theme.palette.primary.contrastText};

  &:focus {
    border-color: ${({ theme }) => theme.palette.primary.shades[2]};
    box-shadow: ${({ theme }) => getOutline(false, theme)};
    ${({ fixed }) => !fixed && 'transform: translate(0px, -2px);'};
  }

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.shades[2]};
    box-shadow: ${({ theme }) => getOutline(false, theme)};
    ${({ fixed }) => !fixed && 'transform: translate(0px, -2px);'};
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
