import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { __Component, __ComponentProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<__Component {...args} />);

// Define unit tests
describe('__Component', () => {
  afterEach(cleanup);

  const args: __ComponentProps = {
    text: 'This is a test'
  };

  it('should render', () => {
    const result = render(<__Component {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
