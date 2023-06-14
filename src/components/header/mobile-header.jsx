/* eslint no-unused-expressions : "off" */
import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MobileHeader() {
  const header = useRef(null);
  const overlay = useRef(null);
  const [tl, setTl] = useState();
  const [reversed, setReversed] = useState(true);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t = gsap
        .timeline()
        .to(overlay.current, {
          duration: 0.3,
          autoAlpha: 1,
        })
        .paused(true);

      setTl(t);
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    tl && tl.reversed(reversed);
  }, [reversed, tl]);

  return (
    <div ref={header} className="mobile-header fixed z-[2] w-full lg:hidden">
      <div className="mobile-header__logo">
        <img src="/images/dap-logo.svg" alt="DAP Logo" />
      </div>

      <button
        type="button"
        onClick={() => {
          if (tl.paused()) {
            tl.play();
          }
          setReversed(!reversed);
        }}
        className="absolute right-3 top-4 z-[12] block rounded-md bg-white p-2 lg:hidden"
      >
        menu
      </button>

      <div
        ref={overlay}
        className="invisible fixed left-0 top-0 z-[11] h-full w-full bg-white opacity-0"
      >
        some text
      </div>
    </div>
  );
}
