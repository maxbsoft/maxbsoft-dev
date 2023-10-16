/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

const useEventListener = (
  eventType: any,
  callback: any,
  element: Window | boolean = typeof window !== 'undefined' && window,
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e: any) => callbackRef.current(e);
    if (typeof element !== 'boolean') {
      element.addEventListener(eventType, handler);
    }

    return () => {
      if (typeof element !== 'boolean') {
        element.removeEventListener(eventType, handler);
      }
    };
  }, [eventType, element]);
};

export default useEventListener;
