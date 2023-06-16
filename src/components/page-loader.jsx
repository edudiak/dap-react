/* eslint no-unused-expressions : "off" */
/* eslint @next/next/no-img-element: "off" */
import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function PageLoader({ loading }) {
  const wrapper = useRef(null);
  const overlay_1 = useRef(null);
  const overlay_2 = useRef(null);
  const overlay_3 = useRef(null);
  const pulseCircle = useRef(null);
  const [tl, setTl] = useState();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t = gsap
        .timeline()
        .addLabel('start')
        .to(
          wrapper.current,
          {
            autoAlpha: 1,
            duration: 0,
          },
          '<=',
        )
        .to(
          overlay_1.current,
          {
            duration: 0.5,
            xPercent: 100,
          },
          '<+.3',
        )
        .to(
          overlay_2.current,
          {
            duration: 0.5,
            xPercent: -100,
          },
          '<=',
        )
        .to(
          overlay_3.current,
          {
            duration: 0.5,
            xPercent: 100,
          },
          '<=',
        )
        .from('.ring', {
          scale: 1.75,
          opacity: 0,
          duration: 2,
          stagger: {
            each: 0.5,
            repeat: -1,
          },
        })
        .to(
          pulseCircle.current,
          {
            autoAlpha: 1,
          },
          'start+=0.7',
        );
      setTl(t);
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    tl && tl.reversed(loading);
  }, [loading, tl]);

  return (
    <div
      ref={wrapper}
      className="invisible fixed inset-0 z-50 flex items-center justify-center bg-white opacity-0"
    >
      <div
        ref={overlay_1}
        className="fixed -left-full top-0 h-1/3 w-full bg-[#6543A5]"
      />
      <div
        ref={overlay_2}
        className="fixed left-full top-1/3 h-1/3 w-full bg-[#6543A5]"
      />
      <div
        ref={overlay_3}
        className="fixed -left-full top-2/3 h-1/3 w-full bg-[#6543A5]"
      />

      <div
        ref={pulseCircle}
        className="pulse invisible relative flex h-40 w-40 items-center
        justify-center rounded-full bg-white opacity-0 lg:h-[20rem] lg:w-[20rem]"
      >
        <div className="absolute h-full w-full rounded-full bg-inherit opacity-80 ring" />
        <div className="absolute h-full w-full rounded-full bg-inherit opacity-80 ring" />
        <div className="absolute h-full w-full rounded-full bg-inherit opacity-80 ring" />
        <div className="absolute h-full w-full rounded-full bg-inherit opacity-80 ring" />
        <img
          src="/images/dap-logo.svg"
          alt="DAP Logo"
          className="relative w-[80%]"
        />
      </div>
    </div>
  );
}
