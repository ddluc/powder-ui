/* eslint-disable */
import { renderHook, act } from '@testing-library/react-hooks';
import { useContentCache } from './index';

describe('#useOnScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set a react node to a cache state', () => {
    const { result } = renderHook(() => useContentCache());
    act(() => {
      result.current.setContentCache('foo', 'bar');
    });
    const { getContentCache } = result.current;
    const content = getContentCache('foo');
    expect(content).toEqual('bar');
  });
});
