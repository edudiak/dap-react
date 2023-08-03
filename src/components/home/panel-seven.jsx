/* eslint @next/next/no-img-element: "off" */
/* eslint no-nested-ternary: "off" */
/* eslint indent: "off" */
/* eslint react/no-array-index-key: "off" */
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import ArrowRight from '@assets/images/icons/arrow-right.svg';

gsap.registerPlugin(ScrollTrigger);

export default function HomePanelSeven() {
  const elm_1 = useRef(null);

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
          { x: 60, scale: 1.05, opacity: 0 },
          {
            x: 0,
            scale: 1,
            opacity: 1,
          },
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="px-5 pb-[5%] pt-[25%] lg:px-0">
      <h2
        ref={elm_1}
        className="mb-10 text-4xl leading-none tracking-tight text-[#6543A5] md:text-5xl lg:mb-0 lg:ml-auto lg:mr-[4%] lg:max-w-[100rem] lg:text-[8rem] lg:text-[#6543A5]"
      >
        Our data is already advancing new discoveries
      </h2>
      <div className="flex flex-wrap gap-5 md:flex-nowrap lg:gap-[4rem] lg:pl-[4%]">
        {[...Array(3)].map((card, index) => (
          <div
            key={index}
            data-speed={1.0 + index * 0.05}
            className={`relative w-full shrink-0 transform overflow-hidden rounded-[20px] bg-white md:flex-1 lg:rounded-[4rem] ${
              index === 0
                ? ''
                : index === 1
                ? 'translate-y-8 lg:translate-y-[7rem]'
                : 'translate-y-8 md:-mr-[20%] md:translate-y-16 lg:translate-y-[14rem]'
            }`}
          >
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[20px] shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)] lg:rounded-[4rem]" />
            <div className="p-5 lg:p-[2.667rem]">
              <div className="flex justify-between text-xs uppercase text-[#532EA4] lg:text-[1.867rem]">
                <div>09.12.2022</div>
                <div>Scientific Results</div>
              </div>
              <h4 className="mb-3 mt-3 text-xl font-medium leading-tight text-[#250A60] lg:mb-[3rem] lg:mt-[2rem] lg:text-[3.6rem]">
                Demographic factor associated with joint supplement use in dogs
                from the Dog Aging Project
              </h4>
              <div className="mb-3 leading-tight text-[#7B7B7B] lg:mb-[4rem] lg:text-[2.133rem]">
                As dogs age, their risk of developing osteoarthritis (OA)
                increases. Similar to OA in humans, OA in dogs has no cure,
                limiting treatment options to those that reduce...
              </div>
              <Link
                href="#"
                className="flex items-center font-bold text-[#532EA4] lg:text-[2.133rem]"
              >
                Read More
                <div className="svg_icon ml-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#532EA4] text-transparent lg:ml-[1rem] lg:h-[3.3rem] lg:w-[3.3rem]">
                  <div className="w-[10px] lg:w-[1.7rem]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className="pointer-events-none overflow-hidden rounded-tl-full rounded-tr-full lg:-mt-[4rem]">
              <img
                src={`/images/blog/blog-grid-${index + 1}.jpg`}
                alt="blog-grid-1"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[5%] flex flex-wrap gap-5 md:flex-nowrap lg:gap-[4rem] lg:pl-[4%]">
        {[...Array(3)].map((card, index) => (
          <div
            key={index}
            data-speed={1.0 + index * 0.05}
            className={`relative w-full shrink-0 transform overflow-hidden rounded-[20px] bg-white md:flex-1 lg:rounded-[4rem] ${
              index === 0
                ? ''
                : index === 1
                ? 'translate-y-8 lg:translate-y-[7rem]'
                : '-mr-[20%] translate-y-16 lg:translate-y-[14rem]'
            }`}
          >
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)]" />
            <div className="p-5 lg:p-[2.667rem]">
              <div className="flex justify-between text-xs uppercase text-[#532EA4] lg:text-[1.867rem]">
                <div>09.12.2022</div>
                <div>Scientific Results</div>
              </div>
              <h4 className="mb-3 mt-3 text-xl font-medium leading-tight text-[#250A60] lg:mb-[3rem] lg:mt-[2rem] lg:text-[3.6rem]">
                Demographic factor associated with joint supplement use in dogs
                from the Dog Aging Project
              </h4>
              <div className="mb-3 leading-tight text-[#7B7B7B] lg:mb-[4rem] lg:text-[2.133rem]">
                As dogs age, their risk of developing osteoarthritis (OA)
                increases. Similar to OA in humans, OA in dogs has no cure,
                limiting treatment options to those that reduce...
              </div>
              <Link
                href="#"
                className="flex items-center font-bold text-[#532EA4] lg:text-[2.133rem]"
              >
                Read More
                <div className="svg_icon ml-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#532EA4] text-transparent lg:ml-[1rem] lg:h-[3.3rem] lg:w-[3.3rem]">
                  <div className="w-[10px] lg:w-[1.7rem]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className="pointer-events-none overflow-hidden rounded-tl-full rounded-tr-full lg:-mt-[4rem]">
              <img
                src={`/images/blog/blog-grid-${index + 1}.jpg`}
                alt="blog-grid-1"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
