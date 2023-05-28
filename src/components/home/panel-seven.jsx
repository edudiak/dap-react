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
    <div className="pb-[5%] pt-[25%]">
      <h2
        ref={elm_1}
        className="ml-auto mr-[4%] max-w-[100rem] text-[8rem] leading-none tracking-tight text-[#6543A5]"
      >
        Our data is already advancing new discoveries
      </h2>
      <div className="flex gap-[4rem] pl-[4%]">
        {[...Array(3)].map((card, index) => (
          <div
            key={index}
            data-speed={1.0 + index * 0.05}
            className={`relative flex-1 shrink-0 transform overflow-hidden rounded-[4rem] bg-white ${
              index === 0
                ? ''
                : index === 1
                ? 'translate-y-[7rem]'
                : '-mr-[20%] translate-y-[14rem]'
            }`}
          >
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)]" />
            <div className="p-[2.667rem]">
              <div className="flex justify-between text-[1.867rem] uppercase text-[#532EA4]">
                <div>09.12.2022</div>
                <div>Scientific Results</div>
              </div>
              <h4 className="mb-[3rem] mt-[2rem] text-[3.6rem] font-medium text-[#250A60]">
                Demographic factor associated with joint supplement use in dogs
                from the Dog Aging Project
              </h4>
              <div className="mb-[4rem] text-[2.133rem] leading-tight text-[#7B7B7B]">
                As dogs age, their risk of developing osteoarthritis (OA)
                increases. Similar to OA in humans, OA in dogs has no cure,
                limiting treatment options to those that reduce...
              </div>
              <Link
                href="#"
                className="flex items-center text-[2.133rem] font-bold text-[#532EA4]"
              >
                Read More
                <div className="svg_icon ml-[1rem] flex h-[3.3rem] w-[3.3rem] items-center justify-center rounded-full border-2 border-[#532EA4] text-transparent">
                  <div className="w-[1.7rem]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className="pointer-events-none -mt-[4rem] overflow-hidden rounded-tl-full rounded-tr-full">
              <img
                src={`/images/blog/blog-grid-${index + 1}.jpg`}
                alt="blog-grid-1"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[5%] flex gap-[4rem] pl-[5%]">
        {[...Array(3)].map((card, index) => (
          <div
            key={index}
            data-speed={1.0 + index * 0.05}
            className={`relative flex-1 shrink-0 transform overflow-hidden rounded-[4rem] bg-white ${
              index === 0
                ? ''
                : index === 1
                ? 'translate-y-[7rem]'
                : '-mr-[20%] translate-y-[14rem]'
            }`}
          >
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)]" />
            <div className="p-[2.667rem]">
              <div className="flex justify-between text-[1.867rem] uppercase text-[#532EA4]">
                <div>09.12.2022</div>
                <div>Scientific Results</div>
              </div>
              <h4 className="mb-[3rem] mt-[2rem] text-[3.6rem] font-medium text-[#250A60]">
                Demographic factor associated with joint supplement use in dogs
                from the Dog Aging Project
              </h4>
              <div className="mb-[4rem] text-[2.133rem] leading-tight text-[#7B7B7B]">
                As dogs age, their risk of developing osteoarthritis (OA)
                increases. Similar to OA in humans, OA in dogs has no cure,
                limiting treatment options to those that reduce...
              </div>
              <Link
                href="#"
                className="flex items-center text-[2.133rem] font-bold text-[#532EA4]"
              >
                Read More
                <div className="svg_icon ml-[1rem] flex h-[3.3rem] w-[3.3rem] items-center justify-center rounded-full border-2 border-[#532EA4] text-transparent">
                  <div className="w-[1.7rem]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className="pointer-events-none -mt-[4rem] overflow-hidden rounded-tl-full rounded-tr-full">
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
