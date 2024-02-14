import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Label, LabelProps } from './index';
import withTheme from '../../../../test/withTheme';

// Define unit tests
describe('Label', () => {
  afterEach(cleanup);

  describe('as a static label', () => {
    const args: LabelProps = {
      value: 'First Name',
      htmlFor: 'first-name',
      animated: false
    };
    it('should render', () => {
      const result = withTheme(<Label {...args} />);
      const component = result.container.firstChild;
      expect(component).toMatchSnapshot();
    });
    it('should render with disabled state', () => {
      const result = withTheme(<Label {...args} disabled />);
      const component = result.container.firstChild;
      expect(component).toMatchSnapshot();
    });
    it('should render with active state', () => {
      const result = withTheme(<Label {...args} isActive />);
      const component = result.container.firstChild;
      expect(component).toMatchSnapshot();
    });
    it('should render with error state', () => {
      const result = withTheme(<Label {...args} error />);
      const component = result.container.firstChild;
      expect(component).toMatchSnapshot();
    });
  });

  describe('as an animated label', () => {
    const args: LabelProps = {
      value: 'First Name',
      htmlFor: 'first-name',
      animated: true,
      position: { x: 1, y: 2 },
      transpose: { x: 0, y: -20 }
    };
    it('should render', () => {
      const result = withTheme(<Label {...args} />);
      const component = result.container.firstChild;
      expect(component).toMatchSnapshot();
    });
  });
});
