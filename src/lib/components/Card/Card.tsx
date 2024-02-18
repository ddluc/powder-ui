import styled from 'styled-components';
import { BaseCSSProperties, ElevationLevel } from '../../types';
import { baseCSS } from '../Block';
import { px, transparentize } from '../../util';

export interface Props extends BaseCSSProperties {
  elevation?: ElevationLevel;
  border?: string;
  children?: React.ReactNode;
  gloss?: {
    color: string;
    blur: number;
  };
}

const Card = styled.div<Props>`
  ${baseCSS}
  min-height: 20px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: ${({ elevation }) => {
    if (!elevation) return '';
    if (elevation === 1) {
      return `
        rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, 
        rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, 
        rgba(0, 0, 0, 0.12) 0px 1px 3px 0px
      `;
    }
    if (elevation === 2) {
      return `
        rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, 
        rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, 
        rgba(0, 0, 0, 0.12) 0px 1px 5px 0px
      `;
    }
    if (elevation === 3) {
      return `
        rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, 
        rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, 
        rgba(0, 0, 0, 0.12) 0px 1px 8px 0px
      `;
    }
    if (elevation === 4) {
      return `
        rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, 
        rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, 
        rgba(0, 0, 0, 0.12) 0px 1px 10px 0px
      `;
    }
    if (elevation === 6) {
      return `
        rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, 
        rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, 
        rgba(0, 0, 0, 0.12) 0px 1px 18px 0px
      `;
    }
    if (elevation === 8) {
      return `
        rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, 
        rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, 
        rgba(0, 0, 0, 0.12) 0px 3px 14px 2px
      `;
    }
    if (elevation === 12) {
      return `
        rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, 
        rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, 
        rgba(0, 0, 0, 0.12) 0px 5px 22px 4px
      `;
    }
    if (elevation === 16) {
      return `
        rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, 
        rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, 
        rgba(0, 0, 0, 0.12) 0px 6px 30px 5px
      `;
    }
    return '';
  }};

  ${({ gloss }) => {
    if (gloss) {
      return `
        background: linear-gradient(145deg, ${transparentize(gloss.color, 0.2)}, ${transparentize(gloss.color, 0.4)});
        backdrop-filter: blur(${px(gloss.blur)});
      `;
    }
  }}

  ${({ theme, elevation, border }) => {
    if (border) return `border: ${border}`;
    if (elevation) return `border: solid ${theme.border.width} ${theme.palette.neutral[5]}`;
    return `border: solid ${theme.border.width} ${theme.palette.neutral[4]}`;
  }};

  border-radius: ${({ theme }) => theme.border.radius.sm};
  padding: ${({ p }) => (p ? p : '10px')};
`;

export default Card;
