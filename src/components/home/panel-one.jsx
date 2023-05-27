import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

import ArrowDown from '@assets/images/icons/arrow-down.svg';
import BorderPurplePrimary from '@assets/images/icons/border-purple-primary.svg';

export default function HomePanelOne() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);
  const elm_4 = useRef(null);
  const elm_4_circle = useRef(null);
  const elm_5 = useRef(null);

  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

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
        .to(elm_4_circle.current, {
          rotate: 360,
          duration: 6,
          repeat: -1,
          ease: 'none',
        })
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
    <div className="panel pb-[15%]">
      <div className="relative mb-[6vw] flex items-center pl-[8%] pr-[2%]">
        <div className="z-[1] w-3/4">
          <h1
            ref={elm_1}
            className="max-w-[104rem] text-[10.667rem] leading-none text-purple-100"
          >
            Discovering the Keys to a Healthy Lifespan
          </h1>
          <div
            ref={elm_2}
            className="mt-[5.333rem] max-w-[88rem] text-[3.6rem] leading-snug text-purple-100"
          >
            At the Dog Aging Project, we care deeply about the health and
            happiness of dogs. Our discoveries about healthy aging in our canine
            companions will translate into medical advances for people too.
            We’re working toward a future where dogs, and their humans, can live
            longer and stay healthier—together!
          </div>
          <div
            ref={elm_3}
            className="mt-[14rem] flex max-w-[104rem] items-center justify-between text-[2.4rem] text-white"
          >
            <div className="flex items-center gap-x-[2rem]">
              <div className="">
                <span className="will-be-dynamic mr-[3rem]">65,348,562</span>
                Dogs in the Pack
              </div>
              <div className="h-[.267rem] w-[10rem] bg-white" />
              <div>{currentDate}</div>
            </div>
            <Link
              href="#"
              className="block rounded-full bg-[#F7F3FF] px-[2.667rem] py-[1.333rem] text-[2.4rem] font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-white"
            >
              Enroll Your Dog
            </Link>
          </div>
        </div>
        <div
          ref={elm_4}
          className="absolute -top-[5%] right-[4%] flex max-w-[75rem] items-center justify-center"
        >
          <div
            ref={elm_4_circle}
            className="absolute -right-[3.2rem] flex h-[calc(100%+6.4rem)] w-[calc(100%+6.4rem)] text-transparent"
          >
            <div className="svg_icon h-full w-full">
              <BorderPurplePrimary />
            </div>
          </div>
          <div className="overflow-hidden rounded-full shadow-[inset_0px_0px_7px_rgba(0,0,0,0.7)]">
            <Image
              src="/images/banner-dog.jpg"
              alt="Dog in a field"
              width={584 * 2}
              height={584 * 2}
            />
          </div>
        </div>
      </div>
      <button
        ref={elm_5}
        type="button"
        className="relative mx-auto block text-white opacity-75"
      >
        <span className="mb-2 block">scroll</span>
        <div className="svg_icon w-[3vw]">
          <ArrowDown />
        </div>
      </button>
    </div>
  );
}
