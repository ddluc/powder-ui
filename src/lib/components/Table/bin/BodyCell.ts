/* eslint-disable max-len */

import styled from 'styled-components';

export interface Props {
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export const BodyCell = styled.td<Props>`
  vertical-align: middle;
  text-align: ${({ align = 'left' }) => align};
  width: ${(props) => props.width || 'auto'};
  font-size: 12px;
`;
