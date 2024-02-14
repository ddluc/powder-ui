import { keyframes } from 'styled-components';

export const OVERLAY_ANIMATION_DURATION = 500;

const fadeIn = keyframes`

  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.7;
  }

`;

const fadeOut = keyframes`

  0% { 
    opacity: 0.7;
  }

  100% { 
    opacity: 0
  }
`;

const animations = { fadeIn, fadeOut };

export default animations;
