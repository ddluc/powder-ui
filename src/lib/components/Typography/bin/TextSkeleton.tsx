import React from 'react';
import { Skeleton, BaseSkeletonProps } from '../../Skeleton';

export interface Props extends BaseSkeletonProps {
  lines?: number;
  lineHeight?: number;
  width?: number;
}

export const TextSkeleton = (props: Props): JSX.Element => {
  const { lines = 1, lineHeight = 10, width = null } = props;
  const items = Array.from(Array(lines).keys());

  const getWidth = (): number | null => {
    if (!width) return null;
    const max = width;
    const min = width - width * 0.25;
    return Math.random() * (max - min) + min;
  };

  return (
    <>
      {items.map((i: number) => (
        <Skeleton
          key={i}
          type="box"
          fluid={!width}
          width={getWidth()}
          height={lineHeight}
          margin={[10, 0, 10, 0]}
        />
      ))}
    </>
  );
};
