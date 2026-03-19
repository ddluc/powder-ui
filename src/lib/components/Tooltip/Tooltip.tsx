import React, { useState, useRef, useCallback, useId } from 'react';
import { TooltipWrapper, TooltipBubble } from './bin';

export interface Props {
  content: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'hover' | 'focus' | 'click' | 'hover-focus';
  delay?: number;
  color?: string;
  textColor?: string;
  offset?: number;
  children: React.ReactNode;
}

const Tooltip = ({
  content,
  placement = 'top',
  trigger = 'hover-focus',
  delay = 0,
  color,
  textColor,
  offset = 0,
  children
}: Props): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const delayRef = useRef<ReturnType<typeof setTimeout>>();
  const id = useId();
  const bubbleId = `tooltip-${id}`;

  const show = useCallback(() => {
    if (delay > 0) {
      delayRef.current = setTimeout(() => setIsVisible(true), delay);
    } else {
      setIsVisible(true);
    }
  }, [delay]);

  const hide = useCallback(() => {
    if (delayRef.current) {
      clearTimeout(delayRef.current);
    }
    setIsVisible(false);
  }, []);

  const toggle = useCallback(() => {
    if (delayRef.current) {
      clearTimeout(delayRef.current);
    }
    setIsVisible((v) => !v);
  }, []);

  const hoverHandlers =
    trigger === 'hover' || trigger === 'hover-focus'
      ? { onMouseEnter: show, onMouseLeave: hide }
      : {};

  const focusHandlers =
    trigger === 'focus' || trigger === 'hover-focus' ? { onFocus: show, onBlur: hide } : {};

  const clickHandlers = trigger === 'click' ? { onClick: toggle } : {};

  return (
    <TooltipWrapper
      aria-describedby={bubbleId}
      {...hoverHandlers}
      {...focusHandlers}
      {...clickHandlers}
    >
      {children}
      <TooltipBubble
        id={bubbleId}
        role="tooltip"
        placement={placement}
        visible={isVisible}
        color={color}
        textColor={textColor}
        offset={offset}
      >
        {content}
      </TooltipBubble>
    </TooltipWrapper>
  );
};

export default Tooltip;
