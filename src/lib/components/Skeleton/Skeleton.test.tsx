import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Skeleton, SkeletonProps } from './index';
import withTheme from '../../../../test/withTheme';

// Define unit tests
describe('Skeleton', () => {
  afterEach(cleanup);

  describe('as a box', () => {
    const args: SkeletonProps = {
      skeleton: true,
      type: 'box',
      height: 100,
      width: 200
    };

    it('should render with wave animation', () => {
      const result = withTheme(<Skeleton {...args} animation="wave" />);
      const component = result.container.firstChild;
      expect(component).toMatchSnapshot();
    });
    it('should render with pulse animation', () => {
      const result = withTheme(<Skeleton {...args} animation="pulse" />);
      const component = result.container.firstChild;
      expect(component).toMatchSnapshot();
    });

    it('should render with shimmer animation', () => {
      const result = withTheme(<Skeleton {...args} animation="shimmer" />);
      const component = result.container.firstChild;
      expect(component).toMatchSnapshot();
    });
  });

  describe('as a circle', () => {
    const args: SkeletonProps = {
      skeleton: true,
      type: 'circle',
      size: 200,
      animation: 'wave'
    };
    it('should render as circle', () => {
      const result = withTheme(<Skeleton {...args} />);
      const component = result.container.firstChild;
      expect(component).toMatchSnapshot();
    });
  });
});
