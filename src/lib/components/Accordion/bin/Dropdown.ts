import styled, { Theme, css } from 'styled-components';
import animations from './animations';

type DropdownProps = {
  open?: boolean;
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
  fill: ${({ theme }) => theme.palette.grey};
  ${({ open }) => {
    if (open) {
      return css`
        animation: 200ms ease-out 0ms forwards ${animations.flipUp};
      `;
    }
    return css`
      animation: 200ms ease-in 0ms forwards ${animations.flipDown};
    `;
  }};
`;
