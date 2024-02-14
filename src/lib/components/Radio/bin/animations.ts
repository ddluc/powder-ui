import { keyframes } from 'styled-components';

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.2);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
