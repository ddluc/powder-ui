import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Grid, Cell, Area, GridProps, CellProps, AreaProps } from './index';

afterEach(cleanup);

// Define unit tests
describe('Grid', () => {
  const args: GridProps = {
    columns: '80px 1fr 250px 2fr',
    rows: 'repeat(3, 60px)',
    rowGap: '20px',
    columnGap: '20px',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'center'
  };

  it('should render with defaults', () => {
    const result = render(<Grid />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });

  it('should render with defined props', () => {
    const result = render(<Grid {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });

  it('should render with template areas', () => {
    const areas = [
      'header header header header',
      'leftpanel content content rightpanel',
      '. footer footer .'
    ];
    const result = render(<Grid {...args} areas={areas} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});

describe('Cell', () => {
  const args: CellProps = {
    column: {
      start: 1,
      end: 'span 2'
    },
    row: {
      start: 2,
      end: 5
    },
    justify: 'end',
    align: 'stretch'
  };
  it('should render with defined props', () => {
    const result = render(<Cell {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});

describe('Area', () => {
  const args: AreaProps = {
    area: 'leftpanel',
    justify: 'center',
    align: 'end'
  };
  it('should render with defined props', () => {
    const result = render(<Area {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
