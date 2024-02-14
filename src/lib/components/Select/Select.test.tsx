import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Select, SelectProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<Select {...args} />);

// Define unit tests
describe('Select', () => {
  afterEach(cleanup);

  const args: SelectProps = {
    text: 'This is a test'
  };

  it('should render', () => {
    const result = render(<Select {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
