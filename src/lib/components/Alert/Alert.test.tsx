import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Alert, AlertProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<Alert {...args} />);

// Define unit tests
describe('Alert', () => {
  afterEach(cleanup);

  const args: AlertProps = {
    text: 'This is a test'
  };

  it('should render', () => {
    const result = render(<Alert {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
