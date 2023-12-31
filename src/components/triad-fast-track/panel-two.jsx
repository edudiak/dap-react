import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function PanelTwo() {
  const panel = useRef(null);
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;
          gsap
            .timeline({
              scrollTrigger: {
                trigger: panel.current,
                start: isDesktop ? 'top bottom' : 'top bottom',
                end: isDesktop ? 'bottom 90%' : 'bottom 80%',
                scrub: 1,
              },
            })
            .fromTo(
              elm_1.current,
              { y: isDesktop ? 100 : 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
              },
              '<=',
            )
            .fromTo(
              elm_2.current,
              { y: isDesktop ? 100 : 40, opacity: 0 },
              { y: 0, opacity: 1 },
              '<=',
            );
        },
      );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="mb-[20%] px-5 lg:px-[4%]">
      <div
        ref={panel}
        className="panel relative flex w-full flex-wrap gap-12 pb-10 lg:flex-nowrap lg:gap-[6rem] lg:pb-[12rem]"
      >
        <div
          ref={elm_1}
          className="flex w-full flex-col justify-between lg:w-1/2"
        >
          <div
            className="flex w-full items-center rounded-3xl p-6 lg:rounded-[4rem] lg:p-[5.33rem]"
            style={{
              background:
                'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
              backgroundBlendMode: 'overlay, normal, normal',
              boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="text-[#250A60]">
              <h3 className="font-plex-mono text-2xl uppercase leading-tight sm:leading-none md:text-3xl lg:text-[3.6rem]">
                What is triad?
              </h3>
              <div className="mt-2 leading-snug md:text-xl lg:mt-[2.5rem] lg:text-[2.8rem] lg:leading-snug">
                The Test of Rapamycin in Aging Dogs (TRIAD) is a clinical trial
                being conducted by the Dog Aging Project.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-x-5 pt-16 lg:gap-x-[2.667rem] lg:pt-0">
            <div className="rounded-full bg-[#3A1982] px-3 py-2 leading-none text-[#F7F3FF] shadow-[0px_0px_14px_3px_rgba(0,0,0,0.30)] md:text-xl lg:px-[2rem] lg:py-[1.333rem] lg:text-[2.8rem] lg:leading-none">
              Note
            </div>
            <div className="leading-snug md:text-xl lg:text-[2.8rem] lg:leading-snug">
              Studies like this typically do not directly benefit the dogs who
              are enrolled, but what we learn in TRIAD will benefit future
              generations of dogs.
            </div>
          </div>
        </div>
        <div
          ref={elm_2}
          className="flex w-full items-center rounded-3xl p-6 lg:w-1/2 lg:rounded-[4rem] lg:p-[5.33rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="text-[#250A60]">
            <h3 className="font-plex-mono text-2xl uppercase leading-tight sm:leading-none md:text-3xl lg:text-[3.6rem]">
              What is its purpose?
            </h3>
            <div className="mt-2 leading-snug md:text-xl lg:mt-[2.5rem] lg:text-[2.8rem] lg:leading-snug">
              The goal of TRIAD is to assess the effects of the medication
              Rapamycin on health and aging in dogs. This study is designed to
              test if Rapamycin treatment leads to any of the following
              benefits:
              <ul className="ml-4 mt-4 list-inside list-disc lg:ml-[2rem] lg:mt-[2rem]">
                <li>Better Heart Health</li>
                <li>Improved Mobility</li>
                <li>Prolonged Cognitive Function</li>
                <li>Increased Lifespan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link
          ref={elm_3}
          href="/#"
          className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-medium leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
        >
          View Requirements
        </Link>
      </div>
    </div>
  );
}
