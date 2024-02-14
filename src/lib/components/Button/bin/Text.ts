import styled from 'styled-components';

type Props = {
  align: 'left' | 'center';
};

export const ButtonText = styled.span<Props>`
  overflow: hidden;
  text-align: ${({ align }) => align};
  text-overflow: ellipsis;
  white-space: nowrap;
`;
