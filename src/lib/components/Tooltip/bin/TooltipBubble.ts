import styled, { css } from 'styled-components';

interface BubbleProps {
  placement: 'top' | 'bottom' | 'left' | 'right';
  visible: boolean;
  color?: string;
  textColor?: string;
}

const placementStyles = ({ placement, color, theme }: BubbleProps & { theme: any }) => {
  const bg = color || theme.palette.neutral[4];
  switch (placement) {
    case 'bottom':
      return css`
        top: calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%);
        &::after {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-bottom-color: ${bg};
        }
      `;
    case 'left':
      return css`
        right: calc(100% + 12px);
        top: 50%;
        transform: translateY(-50%);
        &::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: ${bg};
        }
      `;
    case 'right':
      return css`
        left: calc(100% + 12px);
        top: 50%;
        transform: translateY(-50%);
        &::after {
          content: '';
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-right-color: ${bg};
        }
      `;
    case 'top':
    default:
      return css`
        bottom: calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%);
        &::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: ${bg};
        }
      `;
  }
};

export const TooltipBubble = styled.div<BubbleProps>`
  position: absolute;
  background-color: ${({ theme, color }) => color || theme.palette.neutral[4]};
  color: ${({ theme, textColor }) => textColor || theme.palette.foreground};
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-size: ${({ theme }) => theme.fonts.size.small}px;
  border-radius: ${({ theme }) => theme.border.radius.sm};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  white-space: nowrap;
  z-index: ${({ theme }) => theme.zIndex[8]};
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 150ms ease;

  ${placementStyles}
`;
