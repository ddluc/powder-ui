import { keyframes } from 'styled-components';

export const pulse = keyframes`

  0% { 
    opacity: 1
  }

  25% { 
    opacity: 0
  }

  50% { 
    opacity: 1
  }

  75% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

`;
