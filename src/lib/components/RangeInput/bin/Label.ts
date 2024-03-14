import styled from 'styled-components';
import { px } from '../../../util';

type Props = {
  error?: boolean;
  disabled?: boolean;
  show?: boolean;
};

export const Label = styled.label<Props>`
  color: ${({ theme, error, disabled }) => {
    if (error) {
      return theme.palette.danger.main;
    }
    if (disabled) {
      return theme.palette.neutral[2];
    }
    return theme.palette.foreground;
  }};
  font-size: ${({ theme }) => px(theme.fonts.size.small)};
  cursor: pointer;

  > span {
    display: ${({ show = true }) => (show ? 'block' : 'none')};
    height: 18px;
  }
`;
