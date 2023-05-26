import { useLayoutEffect, useState } from 'react';

import SmoothScroll from './smoothscroll';
import useViewport from '@/hooks/useViewport';

export default function Layout({ children }) {
  const { width, height } = useViewport();
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    if (width !== 0 && height !== 0) {
      setIsLoaded(true); // This is to fix the hydration issue with the useLayoutEffect.
    }
  }, [width, height]);

  return isLoaded ? (
    <SmoothScroll>{children}</SmoothScroll>
  ) : (
    <div className="fixed inset-0 h-full w-full bg-red-300">Loading</div>
  );
}
