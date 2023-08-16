/* eslint operator-linebreak: "off" */
/* eslint react/jsx-no-constructed-context-values: "off" */
/* eslint react-hooks/exhaustive-deps: "off" */
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { createContext, useEffect, useState } from 'react';

export const ViewportContext = createContext({});

export function ViewportProvider({ children }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  let resizeID;

  const calculateGlobalRem = () => {
    const rem =
      width * 0.5625 > height ? (height / 1080) * 10 : (width / 1920) * 10;
    return rem;
  };

  const doneResizing = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    calculateGlobalRem();
  };

  const handleWindowResize = () => {
    clearTimeout(resizeID);
    resizeID = setTimeout(doneResizing, 10);
  };

  useIsomorphicLayoutEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    const rem = calculateGlobalRem();
    document.documentElement.style.setProperty('--rem', `${rem}px`);
  }, []);

  useEffect(() => {
    const rem = calculateGlobalRem();
    document.documentElement.style.setProperty('--rem', `${rem}px`);

    // Trigger on window resize function
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  });

  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  );
}
