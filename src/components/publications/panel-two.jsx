/* eslint react/no-array-index-key: "off" */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

import SearchIcon from '@assets/images/icons/search.svg';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function PanelTwo() {
  const panel_1 = useRef(null);
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_1.current,
            start: 'top bottom',
            end: 'bottom 80%',
            scrub: true,
          },
        })
        .fromTo(elm_1.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(elm_2.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1 });
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative px-5 lg:px-[4%]">
      <div>
        <div
          ref={panel_1}
          className="mb-10 flex flex-wrap items-center justify-center sm:flex-nowrap sm:justify-end lg:mb-[5.333rem]"
        >
          <h4
            ref={elm_1}
            className="p-4 text-lg text-[#532EA4] lg:mr-[3rem] lg:text-[4.8rem]"
          >
            Search publications
          </h4>
          <div ref={elm_2} className="relative">
            <input
              type="text"
              placeholder="Enter search terms here"
              className="w-full rounded-full border-2 bg-[rgba(255,255,255,0.39)] px-5 py-3 text-lg font-bold outline-none placeholder:text-[#9169E8] lg:w-[80rem] lg:border-[0.267rem] lg:px-[2.667rem] lg:py-[1.333rem] lg:text-[2.4rem]"
            />
            <button
              type="submit"
              className="svg_icon absolute right-5 top-4 w-6 text-[#9169E8] lg:right-[2.667rem] lg:top-[1.5rem] lg:w-[3.2rem]"
            >
              <SearchIcon />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden rounded-3xl text-[#250A60] lg:rounded-[4rem] lg:p-[5.333rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {[...Array(10)].map((item, index) => (
            <article
              key={index}
              className="publication-post mb-4 border-b-2 border-b-[#C0A4FF] p-4 pb-5 sm:mb-10 lg:mb-[10.667rem] lg:border-b-[0.267rem] lg:pb-[5.333rem]"
            >
              <Link
                href="#"
                className="text-lg leading-tight text-[#250A60] lg:text-[4.8rem]"
              >
                Purpose, Partnership, and Possibilities: The Implementation of
                the Dog Aging Project Biobank
              </Link>
              <p className="text-lg leading-snug text-[#532EA4] lg:py-[2rem] lg:text-[2.8rem] lg:leading-snug">
                Mouttham L, Castelhano MG, Dog Aging Project Consortium
              </p>
              <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-4 pt-4">
                <p className="text-[#790F0F] lg:text-[2.8rem]">
                  Biomarker Insights (2022)
                </p>
                <div className="flex gap-x-4">
                  <Link
                    href="#"
                    className="rounded-full bg-[#790F0F] px-4 py-2 text-base text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.30)] md:text-xl lg:px-[2.667rem] lg:py-[1.33rem] lg:text-[2.4rem]"
                  >
                    PubMed
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full bg-[#790F0F] px-4 py-2 text-base text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.30)] md:text-xl lg:px-[2.667rem] lg:py-[1.33rem] lg:text-[2.4rem]"
                  >
                    DOI
                  </Link>
                </div>
              </div>
            </article>
          ))}

          <div className="my-4 flex items-center justify-center gap-x-[1rem] px-2 text-xl font-bold leading-none text-[#790F0F] sm:mb-10 lg:text-[2.8rem]">
            <button
              type="button"
              className="-tracking-[4px] lg:-tracking-[.5rem]"
            >
              {'<<'}
            </button>
            <button type="button" className="mx-1 md:mx-2 lg:mx-[1rem]">
              {'<'}
            </button>

            {[...Array(5)].map((item, index) => (
              <button
                key={index}
                type="button"
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#790F0F] transition hover:bg-[#FF9494] ${
                  index + 1 === 1 ? 'bg-[#FF9494]' : ''
                } lg:h-[4.267rem] lg:w-[4.267rem] lg:border-[0.267rem]`}
              >
                {index + 1}
              </button>
            ))}

            <button type="button" className="mx-1 md:mx-2 lg:mx-[1rem]">
              {'>'}
            </button>
            <button
              type="button"
              className="-tracking-[4px] lg:-tracking-[.5rem]"
            >
              {'>>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
