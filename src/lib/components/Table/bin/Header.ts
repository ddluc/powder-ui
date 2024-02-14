/* eslint-disable max-len */

import styled from 'styled-components';
import { PaletteOption } from '../../../types';

export type Props = {
  border?: PaletteOption;
};

export const Header = styled.thead<Props>`
  border-bottom: solid 1px ${({ theme, border }) => border || theme.palette.neutral[0]};
`;
