import { keyframes } from 'styled-components';

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1.4);
  }
  75% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
