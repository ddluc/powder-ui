import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { RangeInput, RangeInputProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<RangeInput {...args} />);

// Define unit tests
describe('RangeInput', () => {
  afterEach(cleanup);

  const args: RangeInputProps = {
    text: 'This is a test'
  };

  it('should render', () => {
    const result = render(<RangeInput {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
