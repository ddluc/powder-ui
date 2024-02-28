import styled from 'styled-components';
import { px } from '../../../util';

interface Props {
  disabled?: boolean;
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
  alignment?: 'row' | 'column';
}

const fontSize = {
  sm: 12,
  md: 14,
  lg: 16
};

export const Label = styled.label<Props>`
  display: flex;
  flex-direction: ${({ alignment }) => alignment};
  align-items: ${({ alignment }) => (alignment === 'row' ? 'center' : 'flex-start')};
  justify-items: ${({ alignment }) => (alignment === 'row' ? 'flex-start' : 'center')};
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
