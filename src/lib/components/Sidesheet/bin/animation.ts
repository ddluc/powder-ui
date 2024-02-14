import { keyframes } from 'styled-components';

const slideIn = keyframes`

  0% {
    right: -1000px;
  }

  100% {
    right: 0px;
  }

`;

const slideOut = keyframes`

  0% { 
    right: 0px; 
  }

  100% { 
    right: -1000px;
  }
`;

const animations = { slideIn, slideOut };

export default animations;
