import gsap from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import useViewport from '@/hooks/useViewport';
import { useRouter } from 'next/router';

import SmoothScroll from './smoothscroll';
import MobileHeader from './header/mobile-header';

export default function Layout({ children }) {
  const router = useRouter();
  const wrapper = useRef(null);
  const overlay_1 = useRef(null);
  const overlay_2 = useRef(null);
  const overlay_3 = useRef(null);

  const { width, height } = useViewport();
  const [isLoading, setIsLoaded] = useState(true);

  useLayoutEffect(() => {
    if (width !== 0 && height !== 0) {
      setIsLoaded(false); // This is to fix the hydration issue with the useLayoutEffect.
    }
  }, [width, height]);

  const onPageEnter = () => {
    gsap
      .timeline()
      .addLabel('start')
      .to(
        wrapper.current,
        {
          autoAlpha: 1,
          duration: 0,
          backgroundColor: 'transparent',
        },
        '<=',
      )
      .fromTo(
        overlay_1.current,
        {
          duration: 0.5,
          xPercent: 100,
        },
        {
          duration: 0.5,
          xPercent: 200,
        },
        '<=',
      )
      .fromTo(
        overlay_2.current,
        {
          duration: 0.5,
          xPercent: -100,
        },
        {
          duration: 0.5,
          xPercent: -200,
        },
        '<=',
      )
      .fromTo(
        overlay_3.current,
        {
          duration: 0.5,
          xPercent: 100,
        },
        {
          duration: 0.5,
          xPercent: 200,
        },
        '<=',
      )
      .to(
        wrapper.current,
        {
          autoAlpha: 0,
          duration: 0,
        },
        '<+.6',
      );
  };

  const onPageExit = () => {
    gsap
      .timeline()
      .addLabel('start')
      .to(overlay_1.current, {
        duration: 0.5,
        xPercent: 100,
      })
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
      .to(
        wrapper.current,
        {
          autoAlpha: 1,
          duration: 0.2,
          backgroundColor: '#fff',
        },
        '<=',
      );
  };

  return isLoading ? (
    <div className="fixed inset-0 z-20 h-full w-full" />
  ) : (
    <div className="page-container overflow-hidden">
      <MobileHeader />
      <SwitchTransition>
        <Transition
          key={router.pathname}
          timeout={1000}
          in
          onEnter={onPageEnter}
          onExit={onPageExit}
        >
          <>
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
            </div>
            <SmoothScroll>{children}</SmoothScroll>
          </>
        </Transition>
      </SwitchTransition>
    </div>
  );
}
