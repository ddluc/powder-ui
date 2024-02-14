import styled from 'styled-components';

type Props = {
  size: 'sm' | 'md' | 'lg';
};

export const ButtonIcon = styled.span<Props>`
  display: flex;
  align-self: center;
  height: ${({ size }) => {
    if (size === 'sm') return '16px';
    if (size === 'md') return '24px';
    if (size === 'lg') return '32px';
    return 'auto';
  }};
  width: ${({ size }) => {
    if (size === 'sm') return '16px';
    if (size === 'md') return '24px';
    if (size === 'lg') return '32px';
    return 'auto';
  }};
`;
