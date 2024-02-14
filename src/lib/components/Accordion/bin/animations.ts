import { keyframes } from 'styled-components';

const flipUp = keyframes`

  0% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(0deg);
  }

`;

const flipDown = keyframes`

  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(180deg);
  }

`;

const animations = {
  flipUp,
  flipDown
};

export default animations;
