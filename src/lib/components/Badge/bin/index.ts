import styled, { Theme } from 'styled-components';
import { BadgePaletteItem } from './Palette';
import { px } from '../../../util';

type ContainerProps = {
  iconPosition?: 'right' | 'left';
  disabled: boolean;
  isClickable?: boolean;
  hasText?: boolean;
  palette: BadgePaletteItem;
};

// Extend the Component props with the injected theme
export interface ThemedProps extends ContainerProps {
  theme: Theme;
}

// Defined a styled component implmementation
export const DefaultBadge = styled.div<ContainerProps>`
  box-sizing: content-box;
  height: 20px;
  width: fit-content;
  max-width: 200px;
  display: flex;
  justify-content: 'space-beteween';
  align-items: center;
  gap: 0px ${({ theme }) => theme.spacing[1]};
  flex-direction: ${({ iconPosition }) => (iconPosition === 'right' ? 'row-reverse' : 'row')};
  background-color: ${({ palette }) => palette.background};
  border: ${({ theme }) => `solid ${theme.border.width}`};
  border-color: ${({ palette }) => palette.border};
  border-radius: ${({ theme }) => theme.border.radius.lg};
  font-family: ${({ theme }) => theme.fonts.family.display};
  font-size: ${({ theme }) => px(theme.fonts.size.xsmall)};
  fill: ${({ palette }) => palette.icon};
  color: ${({ palette }) => palette.text};
  padding: ${({ hasText }) => (hasText ? '2px 12px' : '2px 4px')};

  ${({ isClickable }) =>
    isClickable &&
    `
      &:hover {
        cursor: pointer;
      }
  `}

  ${({ theme, disabled }) =>
    disabled &&
    `
    &:disabled {
      color: ${theme.palette.neutral[2]}; 
      fill: ${theme.palette.neutral[2]}; 
      background-color: ${theme.palette.neutral[3]};
      border-color: ${theme.palette.neutral[3]};
      box-shadow: none; 
      cursor: not-allowed;
    }
  `}
`;

export const BadgeIcon = styled.span`
  display: flex;
  align-self: center;
  align-items: center;
  height: 16px;
  width: 16px;
`;

export const BadgeText = styled.span`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
