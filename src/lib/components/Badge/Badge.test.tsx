import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Badge, BadgeProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<Badge {...args} />);

// Define unit tests
describe('Badge', () => {
  afterEach(cleanup);

  const args: BadgeProps = {
    text: 'This is a test'
  };

  it('should render', () => {
    const result = render(<Badge {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
