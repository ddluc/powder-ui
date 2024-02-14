import { keyframes } from 'styled-components';

const open = keyframes`

  0% {
    transform: translateY(-150%);
    opacity: 0;
  }

  50% {
    transform: translateY(0);
    opacity: 1;
  }

`;

const close = keyframes`

  0% { 
    transform: scale(1);
    opacity: 1;
  }

  100% { 
    transform: scale(0.9);
    opacity: 0
  }
`;

const animations = { open, close };

export default animations;
