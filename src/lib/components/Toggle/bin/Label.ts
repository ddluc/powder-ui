import styled from 'styled-components';
import { px } from '../../../util';

interface Props {
  disabled?: boolean;
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
  alignment?: 'row' | 'column' | 'center';
}

const fontSize = {
  sm: 12,
  md: 14,
  lg: 16
};

export const Label = styled.label<Props>`
  display: flex;
  flex-direction: ${({ alignment }) => {
    if (alignment === 'column') return 'column';
    if (alignment === 'row') return 'row';
    if (alignment === 'center') return 'column';
  }};
  align-items: ${({ alignment }) => {
    if (alignment === 'center') return 'center';
    if (alignment === 'row') return 'center';
    if (alignment === 'column') return 'flex-start';
  }};
  justify-content: ${({ alignment }) => {
    if (alignment === 'center') return 'center';
    if (alignment === 'row') return 'flex-start';
    if (alignment === 'column') return 'center';
  }};
  gap: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ size }) => px(fontSize[size])};
  color: ${({ theme, error, disabled }) => {
    if (disabled) {
      return theme.palette.neutral[2];
    }
    if (error) {
      return theme.palette.danger.main;
    }
    return theme.palette.neutral[0];
  }};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
