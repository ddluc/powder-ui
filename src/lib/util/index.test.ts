/* eslint-disable no-plusplus */

import { debounce, px, transparentize } from './index';

// Tell Jest to mock all timeout functions
jest.useFakeTimers();

describe('debounce', () => {
  let func: jest.Mock;
  let debouncedFunc: Function;
  beforeEach(() => {
    func = jest.fn();
  });
  it('should execute just once', () => {
    debouncedFunc = debounce(func, 1000);
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }
    // Fast-forward time
    jest.runAllTimers();
    expect(func).toBeCalledTimes(1);
  });
  it('should execute the leading call', () => {
    const leading = true;
    debouncedFunc = debounce(func, 1000, leading);
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }
    // Fast-forward time
    jest.runAllTimers();
    expect(func).toBeCalledTimes(1);
  });
});

describe('px', () => {
  it('should append a pixel unit to a numeric digit', () => {
    const pixels = px(10);
    expect(pixels).toEqual('10px');
  });
});

describe('transparentize', () => {
  it('it should add opacity of 0.5 to a hex color code', () => {
    const color = transparentize('#EDEDED', 0.5);
    expect(color).toEqual('#EDEDED80');
  });
  it('it should add opacity of 1 to a hex color code', () => {
    const color = transparentize('#EDEDED', 1);
    expect(color).toEqual('#EDEDEDFF');
  });
  it('it should add opacity of 0 to a hex color code', () => {
    const color = transparentize('#EDEDED', 0);
    expect(color).toEqual('#EDEDED');
  });
});
