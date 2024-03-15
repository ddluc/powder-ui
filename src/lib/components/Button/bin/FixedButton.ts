import styled from 'styled-components';
import { DefaultButton } from './DefaultButton';

// Example component Props
export interface Props {}

// Defined a styled component implmementation
export const FixedButton = styled(DefaultButton)<Props>`
  &:focus {
    transform: none;
  }
  &:hover {
    transform: none;
  }
`;
