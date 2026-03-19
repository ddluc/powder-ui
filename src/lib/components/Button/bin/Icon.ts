import { styled } from '../../../styled';

type Props = {
  size: 'sm' | 'lg';
};

export const ButtonIcon = styled.span<Props>`
  display: flex;
  align-self: center;
  height: ${({ size }) => (size === 'lg' ? '24px' : '16px')};
  width: ${({ size }) => (size === 'lg' ? '24px' : '16px')};
`;
