/* eslint-disable max-len */

import styled from 'styled-components';
import { PaletteOption } from '../../../types';

export type Props = {
  borderColor?: PaletteOption;
  topBorder?: boolean;
  bottomBorder?: boolean;
};

export const Header = styled.thead<Props>`
  ${({ theme, borderColor, bottomBorder = true }) =>
    bottomBorder && `border-bottom: solid 1px ${borderColor || theme.palette.neutral[0]}`};
  ${({ theme, borderColor, topBorder = false }) =>
    topBorder && `border-top: solid 1px ${borderColor || theme.palette.neutral[0]}`};
`;
