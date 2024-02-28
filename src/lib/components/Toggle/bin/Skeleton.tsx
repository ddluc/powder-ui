import { Flex } from '../../Flex';
import { Skeleton } from '../../Skeleton';
import React from 'react';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  hideLabel?: boolean;
  alignment?: 'row' | 'column';
  annotations?: {
    on: string | React.ReactNode;
    off: string | React.ReactNode;
  };
}

const sliderSize = {
  sm: 36,
  md: 52,
  lg: 64
};

export const ToggleSkeleton = (props: Props): JSX.Element => {
  const { size = 'md', hideLabel, alignment } = props;
  return (
    <Flex
      row={alignment === 'row'}
      column={alignment === 'column'}
      gap="8px 4px"
      alignItems={alignment === 'column' ? 'flex-start' : 'center'}
    >
      {!hideLabel && <Skeleton {...props} type="box" height={18} width={100} />}
      <Flex row alignItems="center" gap="6px">
        <Skeleton type="box" height={sliderSize[size] / 2} width={sliderSize[size]} />
      </Flex>
    </Flex>
  );
};
