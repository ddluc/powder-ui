import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Palette } from './index';
import withTheme from '../../../../test/withTheme';

// Define unit tests
describe('Palette', () => {
  afterEach(cleanup);

  it('should render with defined props', () => {
    const result = withTheme(<Palette />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
