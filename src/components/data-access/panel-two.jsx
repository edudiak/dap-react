import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function PanelTwo() {
  const panel_1 = useRef(null);
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);
  const panel_2 = useRef(null);
  const panel_3 = useRef(null);
  const elm_4 = useRef(null);
  const elm_5 = useRef(null);
  const elm_6 = useRef(null);
  const panel_4 = useRef(null);
  const elm_7 = useRef(null);
  const elm_8 = useRef(null);
  const elm_9 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_1.current,
            start: 'top bottom',
            end: 'bottom 90%',
            scrub: true,
          },
        })
        .fromTo(elm_1.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(elm_2.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(elm_3.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_2.current,
            start: 'top bottom',
            end: 'bottom 80%',
            scrub: true,
          },
        })
        .fromTo(panel_2.current, { opacity: 0 }, { opacity: 1 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_3.current,
            start: 'top bottom',
            end: 'bottom 90%',
            scrub: true,
          },
        })
        .fromTo(elm_4.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(elm_5.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(elm_6.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_4.current,
            start: 'top bottom',
            end: 'bottom 90%',
            scrub: true,
          },
        })
        .fromTo(elm_7.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(elm_8.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(elm_9.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 });
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative px-5 lg:px-[8%]">
      <div
        ref={panel_1}
        className="mb-8 ml-auto w-full lg:-mb-[32rem] lg:w-1/2"
      >
        <h2
          ref={elm_1}
          className="mb-6 text-4xl leading-none text-[#250A60] md:max-w-[700px] lg:mb-[6.667rem] lg:max-w-[60rem] lg:text-[6.267rem] lg:-tracking-[0.114rem]"
        >
          Overview of the data access process
        </h2>
        <ul
          ref={elm_2}
          class="flex list-none flex-col gap-y-3 text-xl leading-snug text-[#250A60] lg:gap-y-[2.667rem] lg:text-[2.8rem]"
        >
          <li class="flex">
            <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#532EA4] font-bold text-[#F7F3FF] md:h-7 md:w-7 md:text-lg lg:mr-[2rem] lg:h-[3.6rem] lg:w-[3.6rem] lg:text-[2.133rem]">
              1
            </span>
            <div>Complete the Application for Data Access</div>
          </li>
          <li class="flex">
            <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#532EA4] font-bold text-[#F7F3FF] md:h-7 md:w-7 md:text-lg lg:mr-[2rem] lg:h-[3.6rem] lg:w-[3.6rem] lg:text-[2.133rem]">
              2
            </span>
            <div>Review and sign the DAP Data Use Agreement</div>
          </li>
          <li class="flex">
            <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#532EA4] font-bold text-[#F7F3FF] md:h-7 md:w-7 md:text-lg lg:mr-[2rem] lg:h-[3.6rem] lg:w-[3.6rem] lg:text-[2.133rem]">
              3
            </span>
            <div>Receive data access credentials to Terra</div>
          </li>
          <li class="flex">
            <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#532EA4] font-bold text-[#F7F3FF] md:h-7 md:w-7 md:text-lg lg:mr-[2rem] lg:h-[3.6rem] lg:w-[3.6rem] lg:text-[2.133rem]">
              4
            </span>
            <div>Start doing science!</div>
          </li>
        </ul>
        <div ref={elm_3} className="mt-5 lg:mt-[4rem]">
          <Link
            href="#"
            className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-medium leading-none shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
          >
            Apply Here
          </Link>
        </div>
      </div>
      <div ref={panel_2} className="pointer-events-none w-full">
        <Image
          src="/images/data-access-graph.png"
          alt="dog-13"
          width={2384}
          height={1718}
          loading="lazy"
        />
      </div>
      <div className="mt-8 w-full lg:-mt-[45rem] lg:w-1/2 ">
        <div ref={panel_3} className="mb-10 md:mb-20 lg:mb-[12rem]">
          <h3
            ref={elm_4}
            className="mb-6 text-4xl leading-none text-[#250A60] md:max-w-[700px] lg:mb-[6.667rem] lg:max-w-[70rem] lg:text-[6.267rem] lg:-tracking-[0.114rem]"
          >
            Corporate Data Access
          </h3>
          <div
            ref={elm_5}
            className="text-lg leading-snug text-[#250A60] lg:text-[2.8rem]"
          >
            If you are affiliated with a corporate or for-profit entity and you
            intend to use these data for commercial purposes, we have a separate
            process for negotiating data use. Please contact us below. Do not
            proceed with this application.
          </div>
          <div ref={elm_6} className="mt-5 lg:mt-[4rem]">
            <Link
              href="#"
              className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-medium leading-none shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
            >
              Contact for Data Access
            </Link>
          </div>
        </div>
        <div ref={panel_4}>
          <h3
            ref={elm_7}
            className="mb-6 text-4xl leading-none text-[#250A60] md:max-w-[700px] lg:mb-[6.667rem] lg:max-w-[70rem] lg:text-[6.267rem] lg:-tracking-[0.114rem]"
          >
            Collaboration
          </h3>
          <div
            ref={elm_8}
            className="text-lg leading-snug text-[#250A60] lg:text-[2.8rem]"
          >
            If you are interested in developing a research collaboration with
            Dog Aging Project scientists, please contact{' '}
            <a href="mailto:admin@dogagingproject.org" className="underline">
              admin@dogagingproject.org
            </a>{' '}
            for more details.
          </div>
          <div ref={elm_9} className="mt-5 lg:mt-[4rem]">
            <Link
              href="#"
              className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-medium leading-none shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
            >
              Contact Ancillary Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
