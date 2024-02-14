import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Scroll } from './index';

describe('Scale', () => {
  afterEach(cleanup);

  it('should render with overflow-x', () => {
    const result = render(<Scroll direction="x" />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });

  it('should render with overflow-y', () => {
    const result = render(<Scroll direction="y" />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
