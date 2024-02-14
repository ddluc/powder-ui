import styled, { Theme, css } from 'styled-components';
import animations from './animations';

type DropdownProps = {
  animated?: boolean;
  open?: boolean;
  focused?: boolean;
  error?: boolean;
};

export interface ThemedProps extends DropdownProps {
  theme: Theme;
}

export const Dropdown = styled.div<ThemedProps>`
  position: absolute;
  height: 16px;
  width: 16px;
  right: 10px;
  top: 10px;
  transform: rotate(180deg);
  fill: ${({ theme, error }) => {
    if (error) return theme.palette.danger.main;
    return theme.palette.neutral[2];
  }};

  ${({ animated, open }) => {
    if (animated) {
      if (open) {
        return css`
          animation: 300ms ease-out 0ms forwards ${animations.flipUp};
        `;
      }
      return css`
        animation: 300ms ease-in 0ms forwards ${animations.flipDown};
      `;
    }
    return '';
  }};
`;
