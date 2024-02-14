import { keyframes } from 'styled-components';

const popIn = keyframes`

  0% { 
    transform: scale(0.6);
    opacity: 0;
  }

  30% {
    transform: scale(0.6);
    opacity: 0;
  }

  60% {
    transform: scale(1);
  }

  100% { 
    transform: scale(1);
    opacity: 1
  }

`;

const popOut = keyframes`

  0% { 
    transform: scale(1);
    opacity: 1;
  }

  75% { 
    transform: scale(0.6);
    opacity: 0
  }

  100% { 
    transform: scale(0.6);
    opacity: 0
  }
`;

const animations = {
  popIn,
  popOut
};

export default animations;
