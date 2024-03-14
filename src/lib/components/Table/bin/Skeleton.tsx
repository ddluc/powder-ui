import React from 'react';
import { Skeleton, BaseSkeletonProps } from '../../Skeleton';
import { Flex } from '../../Flex';
import { Block } from '../../Block';

export interface TableSkeletonProps extends BaseSkeletonProps {
  rowCount?: number;
  colCount?: number;
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export const TableSkeleton = ({ rowCount = 5, colCount = 5, spacing }: TableSkeletonProps) => (
  <Flex column gap="20px">
    <Flex row gap="20px" justifyContent="space-between">
      {Array.from({ length: colCount }).map((x, i) => (
        <Block key={i} basis="250px" grow={1} shrink={1}>
          <Skeleton type="box" height={spacing * 8} fluid />
        </Block>
      ))}
    </Flex>
    <Skeleton type="box" height={80 * rowCount} fluid />
  </Flex>
);
