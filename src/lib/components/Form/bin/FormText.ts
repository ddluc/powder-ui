import styled from 'styled-components';
import { px } from '../../../util';

interface Props {
  error?: string;
  help?: string;
  touched?: boolean;
}

export const FormText = styled.div<Props>`
  font-style: italic;
  margin-top: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => px(theme.fonts.size.small - 2)};
  font-family: ${({ theme }) => theme.fonts.family.body};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ error, touched, theme }) =>
    error && touched ? theme.palette.danger.main : theme.palette.neutral[1]};
  height: 20px;
  transition:
    display 100ms ease,
    color 100ms ease;
`;
