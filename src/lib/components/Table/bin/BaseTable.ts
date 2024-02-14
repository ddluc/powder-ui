/* eslint-disable indent */
import styled from 'styled-components';
import { px } from '../../../util';

export type Props = {
  spacing: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  gridlines?: boolean;
  scrollbar: {
    height?: number;
    color?: string;
    background?: string;
    hover?: string;
  };
  alternate: boolean;
  gridColor?: string;
  headerColor?: string;
  activeColor?: string;
  textColor?: string;
  even?: string;
  odd?: string;
};

export const BaseTable = styled.table<Props>`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.family.display};
  border-collapse: ${({ gridlines }) => (gridlines ? 'separate' : 'collapse')};
  border-spacing: 1px;
  border-radius: ${({ theme }) => `${theme.border.radius.sm}`};
  background-color: ${({ gridlines, gridColor, theme }) =>
    gridlines && gridColor ? gridColor : theme.palette.background};
  // Responsive Scrolling
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    // Custom scrollbar styles
    &::-webkit-scrollbar {
      height: ${({ scrollbar }) => px(scrollbar.height)};
      background-color: ${({ scrollbar, theme }) =>
        scrollbar.background || theme.palette.neutral[3]};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ scrollbar, theme }) => scrollbar.color || theme.palette.neutral[2]};
      border-radius: ${({ theme }) => theme.border.radius.sm};
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({ scrollbar, theme }) => scrollbar.hover || theme.palette.neutral[1]};
    }
  }
  // Header Spacing
  thead {
    th {
      padding: ${({ spacing, theme }) => theme.spacing[spacing]};
      background-color: ${({ headerColor, theme }) => headerColor || theme.palette.background};
    }
  }
  // Body Colors & Spacing
  tbody {
    // Spacing
    td {
      padding: ${({ spacing, theme }) => theme.spacing[spacing]};
      vertical-align: middle;
    }
    tr {
      background-color: ${({ alternate, theme }) =>
        !alternate ? theme.palette.background : 'none'};
      color: ${({ textColor, theme }) => textColor || theme.palette.foreground};
    }
    // Alternating Rows
    tr:nth-child(odd) {
      background-color: ${({ alternate, odd, theme }) =>
        alternate && (odd || theme.palette.background)};
      &:hover {
        background-color: ${({ theme, activeColor }) => activeColor || theme.palette.neutral[3]};
        color: ${({ theme }) => theme.palette.foreground};
      }
    }
    tr:nth-child(even) {
      background-color: ${({ alternate, even, theme }) =>
        alternate && (even || theme.palette.neutral[4])};
      &:hover {
        background-color: ${({ theme, activeColor }) => activeColor || theme.palette.neutral[3]};
        color: ${({ theme }) => theme.palette.foreground};
      }
    }
  }
`;
