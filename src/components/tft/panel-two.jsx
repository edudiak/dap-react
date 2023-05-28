import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function TFTPanelTwo() {
  const panel = useRef(null);
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel.current,
            start: 'top 85%',
            end: 'bottom 70%',
            scrub: 1,
          },
        })
        .fromTo(
          elm_1.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
          },
          '<=',
        )
        .fromTo(
          elm_2.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          '<=',
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="mb-[25%] px-[4%]">
      <div
        ref={panel}
        className="panel relative flex w-full gap-[6rem] pb-[12rem]"
      >
        <div
          ref={elm_1}
          className="flex w-1/2 items-center rounded-[4rem] p-[5.33rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="text-[#250A60]">
            <h3 className="text-[3.6rem] uppercase leading-none">
              What is triad?
            </h3>
            <div className="mb-[6.5rem] mt-[2.5rem] text-[2.8rem] leading-snug">
              The Test of Rapamycin in Aging Dogs (TRIAD) is a clinical trial
              being conducted by the Dog Aging Project.
            </div>
            <h3 className="text-[3.6rem] uppercase leading-none">
              What is its purpose?
            </h3>
            <div className="mt-[2.5rem] text-[2.8rem] leading-snug">
              The goal of TRIAD is to assess the effects of the medication
              Rapamycin on health and aging in dogs.
            </div>
          </div>
        </div>
        <div ref={elm_2} className="w-1/2">
          <div className="mb-[2.5rem] text-[2.4rem] font-bold leading-snug">
            Possible benefits of Rapamycin may include the following:
          </div>
          <ul className="mb-[3rem] flex list-disc flex-col gap-y-[1.4rem] pl-[5rem] text-[2.8rem]">
            <li>Better Heart Health</li>
            <li>Improved Mobility</li>
            <li>Prolonged Cognitive Function</li>
            <li>Increased Lifespan</li>
          </ul>
          <div
            className="flex w-full items-center rounded-[4rem] p-[5.33rem]"
            style={{
              background:
                'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
              backgroundBlendMode: 'overlay, normal, normal',
              boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="text-[2.8rem] leading-snug">
              The goal of TRIAD is to assess the effects of the medication
              Rapamycin on health and aging in dogs.
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link
          ref={elm_3}
          href="/#"
          className="inline-block rounded-full bg-[#F7F3FF] px-[4rem] py-[2.133rem] text-[2.4rem] font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] hover:bg-[#250A60] hover:text-[#F7F3FF]"
        >
          View Requirements
        </Link>
      </div>
    </div>
  );
}
