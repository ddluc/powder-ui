import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Divider, DividerProps } from './index';
import withTheme from '../../../../test/withTheme';

describe('Divider', () => {
  afterEach(cleanup);

  const args: DividerProps = {
    type: 'horizontal',
    solid: true
  };

  it('should render', () => {
    const result = withTheme(<Divider {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
