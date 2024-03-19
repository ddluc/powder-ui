import styled from 'styled-components';
import { DefaultButton } from './DefaultButton';

export interface Props {
  color?: string;
  fluid?: boolean;
}

// Defined a styled component implmementation
export const MinimalButton = styled(DefaultButton)<Props>`
  gap: 0px ${({ theme }) => theme.spacing[1]};
  padding: 0px;
  background-color: transparent;
  color: ${({ theme, color }) => color || theme.palette.neutral[1]};
  fill: ${({ theme, color }) => color || theme.palette.neutral[1]};
  border: none;

  &:focus {
    border: none;
    box-shadow: ${({ theme }) => theme.palette.neutral[3]} 0px 0px 0px 2px;
    color: ${({ theme }) => theme.palette.primary.main};
    fill: ${({ theme }) => theme.palette.primary.main};
  }

  &:hover {
    border: none;
    box-shadow: none;
    color: ${({ theme }) => theme.palette.primary.main};
    fill: ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;
  }

  &:disabled {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.neutral[2]};
    fill: ${({ theme }) => theme.palette.neutral[2]};
    border: none;
    box-shadow: none;
    cursor: not-allowed;
  }
`;
