import { render, cleanup } from '@testing-library/react';
import { Table, TableProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<Table {...args} />);

// Define unit tests
describe('Table', () => {
  afterEach(cleanup);

  const args: TableProps = {
    children: 'This is a test'
  };

  it('should render', () => {
    const result = render(<Table {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
