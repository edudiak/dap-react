/* eslint @next/next/no-img-element: "off" */
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TFTPanelThree() {
  const elm_1 = useRef(null);
  const panel = useRef(null);

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
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div ref={panel} className="panel flex w-full flex-1 items-start px-[4%]">
      <div
        ref={elm_1}
        className="flex flex-1 items-center rounded-[4rem] p-[5.33rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
          backgroundBlendMode: 'overlay, normal, normal',
          boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="text-[#3A1982]">
          <h3 className="text-[6.133rem] leading-none">Ready to Enroll?</h3>
          <div className="mb-[4rem] mt-[2.5rem] text-[3.6rem] leading-snug">
            Click the link here to complete the TRIAD Rapid Eligibility
            Assessment.
          </div>

          <Link
            className="inline-block rounded-full bg-[#9169E8] px-[4rem] py-[2.133rem] text-[2.4rem] font-bold leading-none text-white shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.6)] hover:bg-[#250A60] hover:text-[#F7F3FF]"
            href="/#"
          >
            View Requirements
          </Link>
        </div>
      </div>
    </div>
  );
}
