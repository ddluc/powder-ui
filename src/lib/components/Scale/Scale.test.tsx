import React from 'react';
import { cleanup } from '@testing-library/react';
import { Scale, ScaleProps } from './index';
import withTheme from '../../../../test/withTheme';

// Define unit tests
describe('Scale', () => {
  afterEach(cleanup);

  const args: ScaleProps = {
    lg: '1200px',
    md: '800px',
    sm: '200px',
    xs: '80%'
  };

  it('should render with defined props', () => {
    const result = withTheme(<Scale {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
