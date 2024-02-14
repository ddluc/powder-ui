import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Spacer, SpacerProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<Spacer {...args} />);

// Define unit tests
describe('Spacer', () => {
  afterEach(cleanup);

  const args: SpacerProps = {
    text: 'This is a test'
  };

  it('should render', () => {
    const result = render(<Spacer {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
