import styled from 'styled-components';
import { px } from '../../util';

interface Props {
  indent?: boolean;
  error?: boolean;
}

const Legend = styled.legend<Props>`
  font-size: ${({ theme }) => px(theme.fonts.size.small)};
  color: ${({ theme, error }) => (error ? theme.palette.danger.main : theme.palette.neutral[0])};
  padding: ${({ indent = true }) => indent && '0px 4px'};
`;

export default Legend;
