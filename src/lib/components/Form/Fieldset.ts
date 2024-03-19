import styled from 'styled-components';

interface Props {
  border?: boolean;
  indent?: boolean;
  error?: boolean;
  direction?: 'horizontal' | 'vertical';
  gap?: string;
}

const Fieldset = styled.fieldset<Props>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'horizontal' ? 'row' : 'column')};
  padding: ${({ theme, indent = true }) => indent && `${theme.spacing[3]} ${theme.spacing[2]}`};
  row-gap: ${({ theme, gap }) => gap || theme.spacing[2]};
  column-gap: ${({ theme, gap }) => gap || theme.spacing[4]};
  border: ${({ theme, border }) => (border ? `solid ${theme.border.width}` : 'none')};
  border-color: ${({ theme, error }) =>
    error ? theme.palette.danger.main : theme.palette.neutral[2]};
  border-radius: ${({ theme }) => theme.border.radius.sm};
`;

export default Fieldset;
