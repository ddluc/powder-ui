import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Toggle, ToggleProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<Toggle {...args} />);

// Define unit tests
describe('Toggle', () => {
  afterEach(cleanup);

  const args: ToggleProps = {
    text: 'This is a test'
  };

  it('should render', () => {
    const result = render(<Toggle {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
