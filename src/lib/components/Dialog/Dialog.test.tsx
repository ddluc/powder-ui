import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Dialog, DialogProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<Dialogue {...args} />);

// Define unit tests
describe('Dialogue', () => {
  afterEach(cleanup);

  it('should render', () => {
    const result = render(<Dialog>The content!</Dialog>);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
