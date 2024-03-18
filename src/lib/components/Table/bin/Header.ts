/* eslint-disable max-len */

import styled from 'styled-components';

export type Props = {
  borderColor?: string;
  topBorder?: boolean;
  bottomBorder?: boolean;
  headerColor?: string;
};

export const Header = styled.thead<Props>`
  background-color: ${({ headerColor, theme }) => headerColor || theme.palette.background};
  ${({ theme, borderColor, bottomBorder = true }) =>
    bottomBorder && `border-bottom: solid 1px ${borderColor || theme.palette.neutral[0]}`};
  ${({ theme, borderColor, topBorder = false }) =>
    topBorder && `border-top: solid 1px ${borderColor || theme.palette.neutral[0]}`};
`;
