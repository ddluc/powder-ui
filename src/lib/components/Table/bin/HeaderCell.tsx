/* eslint-disable max-len */
import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '../../Flex';
import { Block } from '../../Block';
import animations from './animations';
import { TableDataColumn } from '../types';
import { Nullable } from '../../../types';

export const BaseHeaderCell = styled.th<{
  width?: number;
  sortable: boolean;
  active: boolean;
  align?: 'left' | 'right' | 'center';
}>`
  width: ${(props) => (props.width ? `${props.width}%` : 'auto')};
  font-weight: normal;
  &:hover {
    ${({ sortable }) => (sortable ? 'cursor: pointer;' : '')};
    div {
      ${({ sortable, active }) => (!active && sortable ? 'opacity: 0.6' : '')};
    }
  }
  color: ${({ active, theme }) =>
    active ? theme.palette.accent.shades[1] : theme.palette.foreground};
  ${({ active }) => (active ? 'font-weight: bold' : '')};
`;

const SortIcon = styled.div<{ isActiveSort: boolean; sortDirection: string }>`
  display: flex;
  justify-content: center;
  // Initially hidden unless active
  opacity: ${({ isActiveSort }) => (isActiveSort ? 1 : 0.6)};
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

export type Props = {
  column: TableDataColumn;
  sortColumn: Nullable<string>;
  sortDirection: string;
  align?: 'left' | 'center' | 'right';
  onClick: () => void;
};

export const HeaderCell = ({
  column,
  sortColumn,
  sortDirection,
  align,
  onClick
}: Props): JSX.Element => {
  const { key, sortable, header, width } = column;
  const isActiveSort = () => sortColumn === key;

  const onHeaderClick = () => {
    if (sortable) onClick();
  };

  const getAlignment = () => {
    if (align === 'right') return 'flex-end';
    if (align === 'center') return 'center';
    return 'flex-start';
  };

  return (
    <BaseHeaderCell
      width={width}
      onClick={onHeaderClick}
      sortable={sortable}
      active={isActiveSort()}
    >
      <Flex wrap="nowrap" gap="2px" alignItems="center" justifyContent={getAlignment()}>
        <Block>{header}</Block>
        {sortable && (
          <SortIcon className="icon" isActiveSort={isActiveSort()} sortDirection={sortDirection}>
            {isActiveSort() ? '↑' : '↕'}
          </SortIcon>
        )}
      </Flex>
    </BaseHeaderCell>
  );
};
