import styled, { css, Theme } from 'styled-components';
import animations from './animations';
import { AlertPaletteItem } from './Palette';

export type AlertCardProps = {
  state: 'pending' | 'active' | 'complete';
  palette: AlertPaletteItem;
};

export interface ThemedProps extends AlertCardProps {
  theme: Theme;
}

export const AlertCard = styled.div<ThemedProps>`
  min-height: 20px;
  max-width: 320px;
  padding: 20px;
  margin: 10px auto;
  background-color: ${({ palette }) => palette.background};
  border-radius: ${(props: ThemedProps) => props.theme.border.radius.sm};
  border-top: solid 3px;
  border-color: ${(props: ThemedProps) => props.palette.border};

  ${({ theme }: ThemedProps) => {
    if (theme.mode === 'dark') return '';
    return 'box-shadow: 8px 9px 10px 2px rgba(0,0,0,0.1);';
  }}

  fill: ${(props: ThemedProps) => props.palette.icon};

  ${({ state }: ThemedProps) => {
    if (state === 'active' || state === 'pending') {
      return css`
        animation: 500ms ease-in-out ${animations.open} forwards;
      `;
    }
    if (state === 'complete') {
      return css`
        animation: 500ms ease-in-out ${animations.close} forwards;
      `;
    }
    return '';
  }}

  h6, p {
    color: ${({ palette }) => palette.text};
  }
`;
