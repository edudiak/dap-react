import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

import ArrowWithCircle from '@assets/images/icons/arrow-with-circle.svg';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function PanelTwo() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);

  const openPositions = [
    {
      title: 'Texas A&M University',
      department: 'Human Resources',
      remote: true,
      onSite: true,
      link: '/careers/data-scientist',
    },
    {
      title: 'University of Washington',
      department: 'Administration Assistant',
      remote: false,
      onSite: true,
      link: '/careers/data-scientist',
    },
    {
      title: 'Virginia Tech',
      department: 'Laboratory Technician',
      remote: false,
      onSite: true,
      link: '/careers/data-scientist',
    },
    {
      title: 'University of Washington',
      department: 'Data Analyst',
      remote: true,
      onSite: false,
      link: '/careers/data-scientist',
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_1.current,
            start: 'top bottom',
            end: 'bottom 90%',
            scrub: true,
          },
        })
        .fromTo(elm_1.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_2.current,
            start: 'top bottom',
            end: 'bottom 90%',
            scrub: true,
          },
        })
        .fromTo(
          '.job-item',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 },
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative px-5 pt-16 lg:pl-[8%] lg:pr-[2%] lg:pt-[13.333rem]">
      <h2
        ref={elm_1}
        className="mb-6 text-4xl leading-none text-[#250A60] lg:mb-[6.4rem] lg:text-[6.267rem] lg:-tracking-[0.114rem]"
      >
        Current Open Positions
      </h2>

      <div ref={elm_2} className="careers-table-scrollbar overflow-auto">
        {openPositions.map((position) => (
          <div
            key={position.title}
            className="job-item mb-4 flex min-w-[800px] border-b-2 border-b-[#6543A5] pb-2 text-lg font-medium leading-snug text-[#250A60] lg:mb-[4rem] lg:border-b-[0.267rem] lg:pb-[1rem] lg:text-[2.8rem]"
          >
            <div className="w-1/4">{position.title}</div>
            <div className="flex w-1/4 gap-x-[2.667rem]">
              <div>remote</div>
              <div>on-site</div>
            </div>
            <div className="w-1/4">{position.department}</div>
            <div className="flex w-1/4 items-center gap-x-2  lg:gap-x-[2rem]">
              <Link href={position.link}>View Description</Link>
              <div className="svg_icon w-5 text-transparent lg:w-[3.333rem]">
                <ArrowWithCircle />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
