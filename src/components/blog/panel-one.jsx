/* eslint @next/next/no-img-element: "off" */
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function PanelOne() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);

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
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative flex flex-wrap-reverse items-center px-5 pb-16 md:pb-20 lg:flex-nowrap lg:pb-[16rem] lg:pl-[8%] lg:pr-[2%]">
      <div className="mt-16 w-full md:mt-20 lg:mt-0 lg:w-3/4">
        <h1
          ref={elm_1}
          className="text-4xl leading-tight text-[#532EA4] md:text-5xl lg:max-w-[112rem] lg:text-[10.667rem] lg:leading-none"
        >
          Our Science Explained
        </h1>
        <div
          ref={elm_2}
          className="mt-6 text-lg leading-snug text-[#250A60] md:text-xl lg:mt-[5.333rem] lg:max-w-[112rem] lg:text-[3.6rem] lg:leading-snug"
        >
          Our participants and their dogs make our science possible. The
          articles here explain our research design and scientific discoveries
          in clear, concise language that is accessible to all.
        </div>
      </div>
    </div>
  );
}
