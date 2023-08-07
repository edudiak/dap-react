import { gsap } from 'gsap';
import Image from 'next/image';
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
    <div className="relative mb-16 flex flex-wrap-reverse items-center px-5 md:mb-20 lg:mb-[30rem] lg:flex-nowrap lg:pl-[8%] lg:pr-[2%]">
      <div className="z-[1] mt-16 w-full md:mt-20 lg:mt-0 lg:w-3/4">
        <h1
          ref={elm_1}
          className="text-4xl leading-tight text-[#fff] md:text-5xl lg:text-[10.667rem] lg:leading-none"
        >
          Our Supporters
        </h1>
        <div
          ref={elm_2}
          className="mt-6 text-lg leading-snug text-[#fff] md:text-xl lg:mt-[5.333rem] lg:max-w-[92rem] lg:text-[3.6rem] lg:leading-snug"
        >
          The Dog Aging Project would not be here today without the individuals
          and organizations who believe in and share our vision. We would like
          to express our sincere gratitude for the generous support of donors
          who have helped make this project a reality!
        </div>
      </div>
      <div className="mx-auto flex max-w-[90%] items-center justify-center md:max-w-[70%] lg:mx-0 lg:max-w-[75rem] xl:absolute xl:-top-[5%] xl:right-[4%]">
        <div className="relative p-4 lg:p-14">
          <div className="absolute left-0 top-0 h-full w-full rotate-[120deg] transform rounded-full border-[7px] border-[#250A60] border-b-transparent" />
          <Image
            src="/images/our-supporters.jpg"
            alt="dog-13"
            width={2000}
            height={2000}
            className="overflow-hidden rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
