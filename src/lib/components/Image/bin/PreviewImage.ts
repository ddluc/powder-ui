import styled from 'styled-components';

interface Props {
  opacity: number;
  blur: number;
}

export const PreviewImage = styled.img<Props>`
  position: absolute;
  left: 0px;
  top: 0px;
  filter: ${({ blur = 5 }: { blur: number }) => `blur(${blur}px)`};
  opacity: ${({ opacity = 1 }: { opacity: number }) => opacity};
  transition: opacity ease-in 200ms;
  clip-path: inset(0);
`;
