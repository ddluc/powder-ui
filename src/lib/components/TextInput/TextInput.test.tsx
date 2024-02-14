import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TextInput, TextInputProps } from './index';
import withTheme from '../../../../test/withTheme';

// Define unit tests
describe('TextInput', () => {
  afterEach(cleanup);

  const args: TextInputProps = {
    name: 'name',
    label: 'First Name',
    value: 'John Doe',
    onChange: (): void => {}
  };

  it('should render', () => {
    const result = withTheme(<TextInput {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
