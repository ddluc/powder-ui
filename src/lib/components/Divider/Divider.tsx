import styled, { Theme } from 'styled-components';

export interface Props {
  color?: string;
  size?: 1 | 2 | 3 | 4 | 5;
  width?: string;
  height?: string;
  spacing?: {
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
  };
  alignment?: 'right' | 'center' | 'left';
  dashed?: boolean;
  solid?: boolean;
  type?: 'horizontal' | 'vertical';
}

interface ThemedProps extends Props {
  theme: Theme;
}

const Divider = styled.hr<Props>`
  position: relative;
  ${({ type = 'horizontal', solid = true, dashed = false, size = 1 }: ThemedProps) => {
    let border;
    if (solid) border = `solid ${size}px`;
    if (dashed) border = `dashed ${size}px`;
    if (type === 'horizontal') return `border-bottom: ${border}`;
    return `border-left: ${border}`;
  }};
  border-color: ${({ theme, color }) => color || theme.palette.neutral[3]};
  ${({ type, height = '200px', width = '100%', spacing = {}, alignment = 'left' }: ThemedProps) => {
    if (type === 'vertical') {
      return `
        border-bottom: none; 
        border-top: none; 
        border-right: none; 
        height: ${height}; 
        width: 0px; 
        margin-left: ${spacing ? spacing.left : '5px'}; 
        margin-right: ${spacing ? spacing.right : '5px'}; 
      `;
    }
    return `
      border-top: none; 
      border-right: none; 
      border-left: none; 
      height: 0px; 
      width: ${width};
      margin-top: ${spacing ? spacing.top : '5px'};
      margin-bottom: ${spacing ? spacing.bottom : '5px'};
      margin-left: ${alignment === 'left' ? '0px' : 'auto'};
      margin-right: ${alignment === 'right' ? '0px' : 'auto'};
    `;
  }};
`;

// Export the component as the default export
export default Divider;
