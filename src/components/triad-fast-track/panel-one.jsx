import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function PanelOne() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);
  const elm_4 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .addLabel('section1_Start')
        .fromTo(
          elm_1.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start',
        )
        .fromTo(
          elm_2.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start+=0.1',
        )
        .fromTo(
          elm_3.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start+=0.15',
        )
        .fromTo(
          elm_4.current,
          { y: 100, opacity: 0 },
          { y: 10, opacity: 1 },
          'section1_Start+=0.1',
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="panel pb-16 sm:pb-16 md:pb-24  lg:pb-[16%] lg:pt-[5%]">
      <div className="relative flex flex-wrap-reverse items-center px-5 lg:flex-nowrap lg:pl-[8%] lg:pr-[4%]">
        <div className="z-[1] mt-16 w-full md:mt-20 lg:mt-0 lg:w-3/4">
          <h1
            ref={elm_1}
            className="text-4xl leading-tight text-[#F7F3FF] md:text-5xl lg:max-w-[92rem] lg:text-[10.667rem] lg:leading-[1.1]"
          >
            Are you interested in enrolling your dog in TRIAD?
          </h1>
          <div
            ref={elm_2}
            className="mb-10 mt-6 text-lg leading-snug text-[#F7F3FF] md:mb-20 md:text-xl lg:mb-[13rem] lg:mt-[5.333rem] lg:max-w-[88rem] lg:text-[3.6rem] lg:leading-snug"
          >
            Here’s what you need to know!
          </div>
          <a
            ref={elm_3}
            href="https://portal.dogagingproject.org/nomination"
            className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
          >
            Get Started
          </a>
        </div>
        <div className="mx-auto flex max-w-[90%] items-center justify-center md:max-w-[70%] lg:absolute lg:-top-[20%] lg:right-[4%] lg:mx-0 lg:max-w-[85rem]">
          <div ref={elm_4} className="relative">
            <div className="overflow-hidden rounded-full shadow-[inset_0px_0px_7px_rgba(0,0,0,0.7)]">
              <video muted autoPlay playsInline loop>
                <source src="/videos/fast-track.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
