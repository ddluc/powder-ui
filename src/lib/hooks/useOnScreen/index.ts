import React, { useRef, useEffect, useState } from 'react';
import { debounce } from '../../util';

/**
 * Check if an element is in viewport
 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
export const useOnScreen = <Element extends HTMLElement>(
  offset = 0
): [boolean, React.RefObject<Element>] => {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = useRef<Element>();

  const onScroll = debounce(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const { top } = currentElement.current.getBoundingClientRect();
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
  });

  React.useEffect(() => {
    onScroll();
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  });

  return [isVisible, currentElement];
};
