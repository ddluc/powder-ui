import styled from 'styled-components';

type Props = object;

export const Input = styled.input<Props>`
  order: 1;
  opacity: 0;
  position: absolute;
  margin: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
