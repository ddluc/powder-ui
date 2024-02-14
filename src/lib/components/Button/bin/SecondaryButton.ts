import styled from 'styled-components';
import { DefaultButton } from './DefaultButton';

// Example component Props
export interface Props {
  fluid?: boolean;
  iconPosition?: 'left' | 'right';
}

// Defined a styled component implmementation
export const SecondaryButton = styled(DefaultButton)<Props>`
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.neutral[0]};
  border-color: ${({ theme }) => theme.palette.neutral[1]};
  fill: ${({ theme }) => theme.palette.neutral[0]};

  &:focus {
    border-color: ${({ theme }) => theme.palette.neutral[2]};
    box-shadow: ${({ theme }) => theme.palette.neutral[3]} 0px 0px 0px 2px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.palette.neutral[1]};
    box-shadow: ${({ theme }) => theme.palette.neutral[3]} 0px 0px 0px 2px;
    transform: translate(0px, -2px);
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
