/* eslint-disable indent */

import styled from 'styled-components';
import { px, getOutline } from '../../../util';
import { pulse } from './animations';

type Props = {
  error?: boolean;
  disabled?: boolean;
  display?: 'normal' | 'card';
};

export const Input = styled.input<Props>`
  // The base input styles
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 40px;
  cursor: pointer;

  // The main radio "container"
  & + label:before {
    content: '';
    display: inline-block;
    border-radius: 50%;
    vertical-align: text-top;
    width: 18px;
    min-width: 18px;
    height: 18px;
    background-color: ${({ theme, error }) =>
      error ? theme.palette.danger.shades[2] : theme.palette.neutral[4]};
    border: solid ${({ theme }) => theme.border.width};
    border-color: ${({ theme, error }) =>
      error ? theme.palette.danger.main : theme.palette.primary.main};
    transition: box-shadow 250ms ease-out;
  }

  // The radio "fill" icon
  & + label svg {
    content: '';
    position: absolute;
    display: inline-block;
    width: 12px;
    height: 12px;
    left: 12px;
    fill: ${({ theme, error }) => (error ? theme.palette.danger.main : theme.palette.primary.main)};
    display: block;
    animation: ${pulse} 250ms ease both;
  }

  // the radio "fill" (as checked)
  &:checked + label svg {
  }

  // the radio "fill" (as disabled)
  &:disabled + label svg {
    fill: ${({ theme }) => theme.palette.grey};
  }

  // The main radio "container" on hover
  &:hover + label:before {
    box-shadow: ${({ theme, error }) => getOutline(error, theme)};
  }

  // The main radio "container" on focus
  &:focus + label:before {
    box-shadow: ${({ theme, error }) => getOutline(error, theme)};
  }

  // The main radio "container" as checked
  &:checked + label:before {
    background-color: ${({ theme, error }) =>
      error ? theme.palette.danger.shades[2] : theme.palette.neutral[4]};
  }

  // The main radio "container" as disabled
  &:disabled + label:before {
    box-shadow: none;
    background: ${({ theme }) => theme.palette.lightgrey};
    border-color: ${({ theme }) => theme.palette.grey};
  }
`;

export const Label = styled.label<Props>`
  display: flex;
  align-items: center;
  padding: ${({ display }) => {
    if (display === 'card') return '18px 8px';
    return '8px 8px';
  }};
  margin: ${({ display }) => {
    if (display === 'card') return '5px 0px';
    return '0px';
  }};
  background-color: ${({ display, theme }) => display === 'card' && theme.palette.neutral[3]};
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
  cursor: pointer;
  span {
    margin-left: ${({ theme }) => theme.spacing[2]};
  }
`;
