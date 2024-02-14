import styled from 'styled-components';
import { DefaultButton } from './DefaultButton';

export interface Props {
  color?: string;
  fluid?: boolean;
}

// Defined a styled component implmementation
export const MinimalButton = styled(DefaultButton)<Props>`
  padding: 2px 4px;
  background-color: transparent;
  color: ${({ theme, color }) => color || theme.palette.neutral[1]};
  fill: ${({ theme, color }) => color || theme.palette.neutral[1]};
  border: none;

  &:focus {
    border: none;
    box-shadow: ${({ theme }) => theme.palette.neutral[3]} 0px 0px 0px 2px;
  }

  &:hover {
    border: none;
    box-shadow: none;
    transform: translate(0px, -2px);
    cursor: pointer;
  }

  &:disabled {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.neutral[2]};
    fill: ${({ theme }) => theme.palette.neutral[2]};
    border: none;
    box-shadow: none;
    transform: translate(0px, 0px);
    cursor: not-allowed;
  }
`;
