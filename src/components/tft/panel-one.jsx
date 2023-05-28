import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function TFTPanelOne() {
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
    <div className="panel pb-[20%] pt-[5%]">
      <div className="relative mb-[6vw] flex items-center pl-[8%] pr-[2%]">
        <div className="z-[1] w-3/4">
          <h1
            ref={elm_1}
            className="max-w-[92rem] text-[10.667rem] leading-none text-[#F7F3FF]"
          >
            Are you interested in enrolling your dog in TRIAD?
          </h1>
          <div
            ref={elm_2}
            className="mb-[13rem] mt-[5.333rem] text-[3.6rem] leading-snug text-[#F7F3FF]"
          >
            Here’s what you need to know!
          </div>
          <Link
            ref={elm_3}
            href="/#"
            className="inline-block rounded-full bg-[#F7F3FF] px-[4rem] py-[2.133rem] text-[2.4rem] font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] hover:bg-[#250A60] hover:text-[#F7F3FF]"
          >
            Enroll Your Dog
          </Link>
        </div>
        <div
          ref={elm_4}
          className="absolute -top-[25%] right-[8%] flex max-w-[90rem] items-center justify-center"
        >
          <div className="overflow-hidden rounded-full shadow-[inset_0px_0px_7px_rgba(0,0,0,0.7)]">
            <video muted autoPlay playsInline loop>
              <source src="/videos/fast-track.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
