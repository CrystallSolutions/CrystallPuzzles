'use client';
import { RefObject, useEffect } from 'react';

export function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  callback: (e: MouseEvent) => void,
  deps: any[] = [],
) {
  useEffect(() => {
    const eventTypes = [
      'mousedown',
      'mouseup',
      'focusin',
      'focusout',
      'touchstart',
      'touchend',
    ];

    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    eventTypes.forEach((eventType) =>
      document.addEventListener(eventType, listener),
    );

    return () => {
      eventTypes.forEach((eventType) =>
        document.removeEventListener(eventType, listener),
      );
    };
  }, [ref, callback, ...deps]);
}