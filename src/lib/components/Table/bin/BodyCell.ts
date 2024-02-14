/* eslint-disable max-len */

import styled from 'styled-components';

export const BodyCell = styled.td<{ width?: string }>`
  width: ${(props) => props.width || 'auto'};
  font-size: 12px;
`;
