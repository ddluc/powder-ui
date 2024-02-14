import styled, { Theme } from 'styled-components';

type AlertBoxProps = {
  yOffset?: string;
};

export interface ThemedProps extends AlertBoxProps {
  theme: Theme;
}

// Defined a styled component implmementation
export const AlertBox = styled.div<ThemedProps>`
  position: fixed;
  width: 320px;
  top: ${({ yOffset = '10px' }) => yOffset};
  left: 50%;
  transform: translate(-50%, 0);
  z-index: ${({ theme }) => theme.zIndex[9]};
`;
