import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

import Footer from './footer';
import Header from './header';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({ children }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      });
    }, root); // <- scopes all selector text to the root element
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} id="smooth-wrapper">
      <div id="smooth-content">
        <div className="page-container">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
