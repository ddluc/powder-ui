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
  action?: boolean;
}>`
  width: ${(props) => (props.width ? `${props.width}%` : 'auto')};
  font-weight: bold;
  font-size: 14px;
  &:hover {
    ${({ sortable }) => (sortable ? 'cursor: pointer;' : '')};
    div {
      ${({ sortable, active }) => (!active && sortable ? 'opacity: 0.6' : '')};
    }
  }
  color: ${({ active, theme }) =>
    active ? theme.palette.accent.shades[1] : theme.palette.foreground};
  ${({ active }) => active && 'font-weight: bold'};
  ${({ action }) => action && 'padding: 0px!important;'};
`;

const SortIcon = styled.div<{ isActiveSort: boolean; sortDirection: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  // Initially hidden unless active
  opacity: ${({ isActiveSort }) => (isActiveSort ? 1 : 0.6)};
  width: 8px;
  height: 12px;
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
  sortColumn?: Nullable<string>;
  sortDirection?: string;
  align?: 'left' | 'center' | 'right';
  action?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const HeaderCell = ({
  children,
  column,
  sortColumn,
  sortDirection,
  align,
  action,
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
      action={action}
    >
      <Flex wrap="nowrap" gap="6px" alignItems="center" justifyContent={getAlignment()}>
        <Block>{children || header}</Block>
        {sortable ? (
          <SortIcon className="icon" isActiveSort={isActiveSort()} sortDirection={sortDirection}>
            {isActiveSort() ? '↑' : '↕'}
          </SortIcon>
        ) : (
          !action && <Block height="12px" />
        )}
      </Flex>
    </BaseHeaderCell>
  );
};
