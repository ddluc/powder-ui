import React, { useEffect, useRef } from 'react';

interface FocusTrapProps {
  children: React.ReactNode;
}

const FocusTrap: React.FC<FocusTrapProps> = ({ children }) => {
  const focusTrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableContent = focusTrapRef.current?.querySelectorAll(
      focusableElements
    ) as NodeListOf<HTMLElement>;
    const firstFocusableElement = focusableContent[0];
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    // Set initial focus to the first focusable element
    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }

    function trapFocus(e: KeyboardEvent) {
      if (e.key !== 'Tab') {
        return;
      }

      if (e.shiftKey) {
        /* shift + tab */
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        /* tab */
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }

    document.addEventListener('keydown', trapFocus);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', trapFocus);
    };
  }, []);

  return (
    <div ref={focusTrapRef} tabIndex={-1}>
      {children}
    </div>
  );
};

export default FocusTrap;
