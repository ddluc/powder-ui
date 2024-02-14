/* eslint-disable */
import { renderHook, act } from '@testing-library/react-hooks';
import { useOnScreen } from './index';

describe('#useOnScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should indicate whether the element is on screen', () => {
    const { result } = renderHook(() => useOnScreen());
    act(() => {
      result.current[0] = true;
    });
    const [isVisible, ElementRef] = result.current;
    expect(isVisible).toEqual(true);
  });
});
