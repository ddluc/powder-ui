/* eslint-disable max-len */
import styled, { Theme } from 'styled-components';
import { px } from '../../../util';

type Props = {
  size: number;
  position: string;
  error?: boolean;
  disabled: boolean;
};

const getIndicatorColor = (theme: Theme, error: boolean, disabled: boolean) => {
  if (disabled) return theme.palette.neutral[3];
  if (error) return theme.palette.danger.shades[2];
  if (theme.mode === 'dark') return theme.palette.neutral[4];
  if (theme.mode === 'light') return theme.palette.primary.shades[4];
};

export const Indicator = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 18px;
  width: ${({ size }) => px(size)};
  padding: 2px 4px;
  font-size: 12px;
  background-color: ${({ theme, error, disabled }) => getIndicatorColor(theme, error, disabled)};
  color: ${({ theme }) => theme.palette.foreground};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  text-align: center;
  position: absolute;
  top: 4px;
  transform: translateX(-50%);
  will-change: left;
  left: ${({ position }) => position};
  opacity: ${({ disabled }) => (disabled ? 0 : 1)};

  span:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid
      ${({ theme, error, disabled }) => getIndicatorColor(theme, error, disabled)};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    top: 100%;
    left: 50%;
    margin-left: -8px;
    margin-top: -1px;
  }
`;
