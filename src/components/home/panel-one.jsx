import { gsap } from 'gsap';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

import ArrowDown from '@assets/images/icons/arrow-down.svg';

export default function HomePanelOne() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);
  const elm_4 = useRef(null);
  // const elm_4_circle = useRef(null);
  const elm_5 = useRef(null);

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
        )
        // .to(elm_4_circle.current, {
        //   rotate: 360,
        //   duration: 6,
        //   repeat: -1,
        //   ease: 'none',
        // })
        .fromTo(
          elm_5.current,
          { y: 100, opacity: 0 },
          { y: 10, opacity: 1 },
          'section1_Start+=0.20',
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="panel pb-[25%] md:pb-[30%]">
      <div className="relative mb-14 flex flex-wrap-reverse items-center px-5 md:mb-20 lg:mb-[8rem] lg:flex-nowrap lg:pl-[8%] lg:pr-[2%]">
        <div className="z-[1] mt-16 w-full md:mt-20 lg:mt-0 lg:w-3/4">
          <h1
            ref={elm_1}
            className="text-4xl leading-tight -tracking-[2.4px] text-[#F8F4FF] md:text-5xl lg:max-w-[98rem] lg:text-[10.667rem] lg:leading-none lg:-tracking-[0.32rem]"
          >
            Discovering the keys to a healthy lifespan
          </h1>
          <div
            ref={elm_2}
            className="mt-6 text-lg leading-snug -tracking-[1.3px] text-[#F8F4FF] md:text-xl lg:mt-[5.333rem] lg:max-w-[83rem] lg:text-[3.6rem] lg:leading-snug lg:-tracking-[0.173rem]"
          >
            At the Dog Aging Project, we care deeply about the health and
            happiness of dogs. Our discoveries about healthy aging in our canine
            companions will translate into medical advances for people too.
            We’re working toward a future where dogs, and their humans, can live
            longer and stay healthier—together!
          </div>
          <div
            ref={elm_3}
            className="mt-10 flex flex-wrap items-center justify-between text-sm text-white md:text-base lg:mt-[16rem] lg:max-w-[96rem] lg:flex-nowrap lg:text-[2.4rem]"
          >
            <div className="flex items-center gap-x-3 md:gap-x-4 lg:gap-x-[2rem]">
              <div className="flex">
                <span className="will-be-dynamic mr-2 block md:mr-3 lg:mr-[3rem]">
                  45,202
                </span>
                <span className="block">Dogs in the Pack</span>
              </div>
              <div className="h-[2px] w-10 bg-white md:w-20 lg:h-[.267rem] lg:w-[10rem]" />
              <div>June 12th, 2023</div>
            </div>
            <div>
              <a
                href="https://portal.dogagingproject.org/nomination"
                className="mt-6 block rounded-full bg-[#F7F3FF] px-6 py-3 font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-white md:mt-0 lg:px-[2.667rem] lg:py-[1.333rem] lg:text-[2.4rem]"
              >
                Enroll Your Dog
              </a>
            </div>
          </div>
        </div>
        <div
          ref={elm_4}
          className="mx-auto flex max-w-[90%] items-center justify-center md:max-w-[70%] lg:absolute lg:-top-[12%] lg:right-[2%] lg:mx-0 lg:max-w-[90rem]"
        >
          <div className="relative p-4 lg:p-14">
            <div className="absolute left-0 top-0 h-full w-full rotate-[90deg] transform rounded-full border-[7px] border-[#6543A5] border-b-transparent" />
            <div className="overflow-hidden rounded-full shadow-[inset_0px_0px_7px_rgba(0,0,0,0.7)]">
              <Image
                src="/images/home-banner-dog.jpg"
                alt="Dog in a field"
                width={584 * 2}
                height={584 * 2}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        ref={elm_5}
        type="button"
        className="relative mx-auto flex flex-col items-center text-[#D8C4FF] opacity-75"
      >
        <span className="mb-2 block lg:text-[2.133rem]">scroll</span>
        <div className="svg_icon w-[3vw]">
          <ArrowDown />
        </div>
      </button>
    </div>
  );
}
