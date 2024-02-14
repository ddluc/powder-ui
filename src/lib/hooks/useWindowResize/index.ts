import React from 'react';

export interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = React.useState<WindowSize>({
    width: undefined,
    height: undefined
  });

  const handleResize = React.useCallback(() => {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  React.useEffect(() => {
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};
