import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import Footer from './footer';
import Header from './header';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({ children }) {
  const root = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 1.2,
        effects: true,
        normalizeScroll: true,
      });
    }, root); // <- scopes all selector text to the root element
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} id="smooth-wrapper">
      <div id="smooth-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
