/* eslint-disable indent */
import styled from 'styled-components';
import { getOutline, px, transparentize } from '../../../util';
import { pulse } from './animations';

type Props = {
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  display?: 'normal' | 'card';
};

export const Input = styled.input<Props>`
  // The base input styles
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &:disabled {
    cursor: ${({ readOnly }) => (readOnly ? 'default' : 'not-allowed')};
  }

  // The main check "box"
  & + label:before {
    content: '';
    display: inline-block;
    vertical-align: text-top;
    width: 19px;
    height: 19px;
    background-color: ${({ theme, error }) =>
      error ? theme.palette.danger.shades[2] : theme.palette.neutral[4]};
    border: solid ${({ theme }) => theme.border.width};
    border-color: ${({ theme, error }) =>
      error ? theme.palette.danger.shades[1] : theme.palette.primary.main};
    border-radius: ${({ theme }) => theme.border.radius.sm};
    transition: box-shadow 250ms ease-out;
  }

  // The checkmark svg
  & + label svg {
    position: absolute;
    pointer-events: none;
    height: 14px;
    left: 12px;
    width: 14px;
    fill: ${({ theme, error }) =>
      error ? theme.palette.danger.main : theme.palette.primary.contrastText};
    display: block;
    animation: ${pulse} 250ms ease both;
  }

  // The check mark (as chedked)
  &:checked + label svg {
  }

  // the check mark (as disabled)
  &:disabled + label svg {
    fill: ${({ theme }) => theme.palette.grey};
  }

  // The main check "box" on hover
  &:hover + label:before {
    box-shadow: ${({ theme, error }) => getOutline(error, theme)};
  }

  // The main check "box" on focus
  &:focus + label:before {
    box-shadow: ${({ theme, error }) => getOutline(error, theme)};
  }

  // The main check "box" as checked
  &:checked + label:before {
    background-color: ${({ theme, error }) =>
      error ? theme.palette.danger.shades[2] : theme.palette.primary.main};
  }

  // The main check "box" as disabled
  &:disabled + label:before {
    box-shadow: none;
    background: ${({ theme, readOnly }) =>
      readOnly ? transparentize(theme.palette.lightgrey, 0.5) : theme.palette.lightgrey};
    border-color: ${({ theme }) => theme.palette.grey};
  }
`;

// The checkmark label
export const Label = styled.label<Props>`
  display: flex;
  height: 32px;
  align-items: center;
  padding: ${({ display }) => {
    if (display === 'card') return '18px 8px';
    return '8px 8px';
  }};
  margin: ${({ display }) => {
    if (display === 'card') return '5px 0px';
    return '0px';
  }};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  color: ${({ theme, error, disabled }) => {
    if (disabled) {
      return theme.palette.neutral[2];
    }
    if (error) {
      return theme.palette.danger.main;
    }
    return theme.palette.neutral[0];
  }};
  font-size: ${({ theme }) => px(theme.fonts.size.small)};
  span {
    margin-left: ${({ theme }) => theme.spacing[2]};
  }
`;
