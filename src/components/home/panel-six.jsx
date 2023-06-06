/* eslint @next/next/no-img-element: "off" */
import Link from 'next/link';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import BorderPurple200 from '@assets/images/icons/border-purple-200.svg';
import BorderPurple200Small from '@assets/images/icons/border-purple-200-small.svg';

gsap.registerPlugin(ScrollTrigger);

export default function HomePanelSix() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_1.current,
            start: 'top 90%',
            end: 'bottom+=100 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_1.current,
          { x: 40, scale: 1.05, opacity: 0 },
          {
            x: 0,
            scale: 1,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_2.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_2.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_3.current,
            start: 'top 90%',
            end: 'bottom+=100 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_3.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
          },
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative flex flex-wrap items-center px-5 lg:flex-nowrap lg:pl-[8%] lg:pr-[2%]">
      <div className="relative z-[1] pb-20 lg:w-3/4 lg:pb-0">
        <h2
          ref={elm_1}
          className="text-5xl leading-tight tracking-tighter text-[#E8DCFF] lg:max-w-[100rem] lg:text-[10rem]"
        >
          Enroll your dog now & join this exciting project
        </h2>
        <div
          ref={elm_2}
          className="mb-16 mt-5 text-xl leading-snug text-[#E8DCFF] lg:mb-[7rem] lg:mt-[3rem] lg:max-w-[74rem] lg:text-[2.8rem]"
        >
          <p className="mb-5 lg:mb-[4rem]">
            At the Dog Aging Project, we know how important dogs are for the
            health and wellbeing of their owners. They give us comfort, joy, and
            unconditional love. Being a part of this study, gives each and every
            one of us a chance to enhance the lives of future generations of
            dogs.
          </p>

          <p>Will you join us?</p>
        </div>
        <Link
          ref={elm_3}
          href="#"
          className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
        >
          Enroll Your Dog
        </Link>
      </div>
      <div
        data-speed={1.07}
        className="mx-auto ml-[25%] flex max-w-[70%] items-center justify-center lg:absolute lg:-top-[5%] lg:right-[4%] lg:mx-0 lg:max-w-[75rem]"
      >
        <div className="absolute flex h-[calc(100%+3rem)] w-[calc(100%+3rem)] text-transparent lg:-right-[3.2rem] lg:h-[calc(100%+6.4rem)] lg:w-[calc(100%+6.4rem)]">
          <div className="svg_icon h-full w-full">
            <BorderPurple200 />
          </div>
        </div>
        <div className="overflow-hidden rounded-full shadow-[inset_0px_0px_7px_rgba(0,0,0,0.7)]">
          <Image
            src="/images/person-with-dog-1.jpg"
            alt="Dog in a field"
            width={584 * 2}
            height={584 * 2}
          />
        </div>
      </div>
      <div
        data-speed={1.07}
        className="absolute left-[6%] top-[84%] flex max-w-[25%] items-center justify-center lg:right-[41%] lg:top-[69%] lg:max-w-[20%]"
      >
        <div className="absolute -right-4 flex h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-transparent lg:right-[-3rem] lg:h-[calc(100%+6rem)] lg:w-[calc(100%+6rem)]">
          <div className="svg_icon h-full w-full">
            <BorderPurple200Small />
          </div>
        </div>
        <div className="overflow-hidden rounded-full shadow-[inset_0px_0px_7px_rgba(0,0,0,0.7)]">
          <Image
            src="/images/person-with-dog-2.jpg"
            alt="Dog in a field"
            width={584 * 2}
            height={584 * 2}
          />
        </div>
      </div>
    </div>
  );
}
