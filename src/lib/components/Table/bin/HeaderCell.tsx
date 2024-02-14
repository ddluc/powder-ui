/* eslint-disable max-len */
import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '../../Flex';

import animations from './animations';

import { TableDataColumn } from '../types';

export const BaseHeaderCell = styled.th<{ width?: number; sortable: boolean; active: boolean }>`
  width: ${(props) => (props.width ? `${props.width}%` : 'auto')};
  font-weight: normal;
  &:hover {
    ${({ sortable }) => (sortable ? 'cursor: pointer;' : '')};
    span {
      ${({ sortable, active }) => (!active && sortable ? 'opacity: 0.6' : '')};
    }
    div.icon {
      opacity: ${({ active }) => (active ? '1' : '0.6')};
    }
  }
  color: ${({ active, theme }) =>
    active ? theme.palette.accent.shades[1] : theme.palette.foreground};
  ${({ active }) => (active ? 'font-weight: bold' : '')};
  text-align: left;
`;

const SortIcon = styled.div<{ isActiveSort: boolean; sortDirection: string }>`
  display: flex;
  justify-content: center;
  // Initially hidden unless active
  opacity: ${({ isActiveSort }) => (isActiveSort ? 1 : 0)};
  width: 20px;
  height: 20px;
  ${({ isActiveSort, sortDirection }) => {
    if (isActiveSort && sortDirection === 'desc') {
      return css`
        animation: 200ms ease-in 0ms forwards ${animations.flipDown};
      `;
    }
    return css`
      animation: 200ms ease-in 0ms forwards ${animations.flipUp};
    `;
  }};
  transform-origin: center; // Ensure rotation happens around the center
  transition: transform 0.3s ease;
`;

type Props = {
  column: TableDataColumn;
  sortColumn: string;
  sortDirection: string;
  onClick: () => void;
};

export const HeaderCell = ({ column, sortColumn, sortDirection, onClick }: Props): JSX.Element => {
  const { key, sortable, header, width } = column;
  const isActiveSort = () => sortColumn === key;

  const onHeaderClick = () => {
    if (sortable) onClick();
  };

  return (
    <BaseHeaderCell
      width={width}
      onClick={onHeaderClick}
      sortable={sortable}
      active={isActiveSort()}
    >
      <Flex wrap="nowrap" gap="2px" alignItems="center">
        <span>{header}</span>
        {sortable && (
          <SortIcon className="icon" isActiveSort={isActiveSort()} sortDirection={sortDirection}>
            {isActiveSort() ? '↑' : '↕'}
          </SortIcon>
        )}
      </Flex>
    </BaseHeaderCell>
  );
};
