import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Sidesheet, SidesheetProps } from './index';
import withTheme from '../../../../test/withTheme';

describe('Sidesheet', () => {
  afterEach(cleanup);

  it('should render', () => {
    const result = withTheme(<Sidesheet>The content!</Sidesheet>);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
