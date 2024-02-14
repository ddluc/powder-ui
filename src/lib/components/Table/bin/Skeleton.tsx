import React from 'react';
import { Skeleton, BaseSkeletonProps } from '../../Skeleton';
import { Flex } from '../../Flex';

export interface TableSkeletonProps extends BaseSkeletonProps {
  rowCount?: number;
  colCount?: number;
  spacing: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export const TableSkeleton = ({ rowCount = 5, colCount = 5, spacing }: TableSkeletonProps) => (
  <Flex column gap="20px">
    <Flex row gap="20px" justifyContent="space-between">
      {Array.from({ length: colCount }).map((i: string) => (
        <Skeleton key={i} type="box" height={spacing * 8} width={250} />
      ))}
    </Flex>
    <Skeleton type="box" height={80 * rowCount} fluid />
  </Flex>
);
