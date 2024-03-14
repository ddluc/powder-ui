import styled from 'styled-components';
import { px } from '../../../util';

interface Props {
  error?: boolean;
  disabled?: boolean;
  hideLabel?: boolean;
  isActive?: boolean;
  isFocused?: boolean;
}

const StaticLabelText = styled.span<Props>`
  font-size: ${({ theme }) => px(theme.fonts.size.small)};
  display: ${({ hideLabel }) => (hideLabel ? 'none' : 'block')};
  color: ${({ theme, error, disabled, isFocused }) => {
    if (error) return theme.palette.danger.main;
    if (disabled) return theme.palette.neutral[2];
    if (isFocused) return theme.palette.primary.main;
    return theme.palette.neutral[0];
  }};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export default StaticLabelText;
