import { keyframes } from 'styled-components';

export const shimmer = keyframes`
  0% {
    background-position: -800px 0;
  }
  
  100% {
    background-position: 800px 0; 
  }
`;
