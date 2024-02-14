import styled, { Theme } from 'styled-components';
import { px } from '../../../util';

type HeaderProps = {
  animated?: boolean;
  open?: boolean;
  focused?: boolean;
  error?: boolean;
};

export interface ThemedProps extends HeaderProps {
  theme: Theme;
}

export const Header = styled.button<ThemedProps>`
  outline: none;
  border: none;
  position: relative;
  width: 100%;
  margin: 0px;
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-size: ${({ theme }) => px(theme.fonts.size.small)};
  text-align: left;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.foreground};

  &:hover {
    cursor: pointer;
  }
`;
