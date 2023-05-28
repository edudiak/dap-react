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
    <div className="relative flex items-center pl-[8%] pr-[2%]">
      <div className="relative z-[1] w-3/4">
        <h2
          ref={elm_1}
          className="max-w-[100rem] text-[10rem] leading-tight tracking-tighter text-[#E8DCFF]"
        >
          Enroll your dog now & join this exciting project
        </h2>
        <div
          ref={elm_2}
          className="mb-[7rem] mt-[3rem] max-w-[74rem] text-[2.8rem] leading-snug text-[#E8DCFF]"
        >
          <p className="mb-[4rem]">
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
          className="inline-block rounded-full bg-[#F7F3FF] px-[4rem] py-[2.133rem] text-[2.4rem] font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF]"
        >
          Enroll Your Dog
        </Link>
      </div>
      <div
        data-speed={1.07}
        className="absolute -top-[5%] right-[4%] flex max-w-[75rem] items-center justify-center"
      >
        <div className="absolute -right-[3.2rem] flex h-[calc(100%+6.4rem)] w-[calc(100%+6.4rem)] text-transparent">
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
        className="absolute right-[41%] top-[69%] flex max-w-[20%] items-center justify-center"
      >
        <div className="absolute right-[-3rem] flex h-[calc(100%+6rem)] w-[calc(100%+6rem)] text-transparent">
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
