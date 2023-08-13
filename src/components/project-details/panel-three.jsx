import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';

export default function PanelThree() {
  const panel_1 = useRef(null);
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);
  const panel_2 = useRef(null);
  const elm_4 = useRef(null);
  const elm_5 = useRef(null);
  const elm_6 = useRef(null);
  const panel_3 = useRef(null);
  const elm_7 = useRef(null);
  const elm_8 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_1.current,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: true,
          },
        })
        .fromTo(elm_1.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(elm_2.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(elm_3.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_2.current,
            start: 'top 85%',
            end: 'bottom 80%',
            scrub: true,
          },
        })
        .fromTo(elm_4.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(elm_5.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(elm_6.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_3.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
          },
        })
        .fromTo(elm_7.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(elm_8.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 });
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative -mt-[30px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-white pb-20 text-[#250A60] lg:-mt-[10.667rem] lg:rounded-tl-[10.667rem] lg:rounded-tr-[10.667rem] lg:pb-[30rem]">
      <div
        ref={panel_1}
        className="px-5 pb-10 pt-20 lg:px-[8%] lg:pb-[10rem] lg:pt-[21.333rem]"
      >
        <h2
          ref={elm_1}
          className="mb-8 text-4xl leading-none lg:mb-[8rem] lg:max-w-[73rem] lg:text-[8.133rem] lg:tracking-[0.114rem]"
        >
          The world’s largest companion dog dataset
        </h2>

        <h3
          ref={elm_2}
          className="font-plex-mono mb-5 text-2xl font-medium uppercase leading-tight -tracking-[0.036rem] sm:leading-none md:text-3xl lg:mb-[4rem] lg:text-[4.8rem]"
        >
          The Terra Platform
        </h3>

        <div ref={elm_3} className="text-xl leading-snug lg:text-[3.6rem]">
          We use a proprietary research platform powered by REDCap to collect a
          wide range of data types, including survey data, veterinary electronic
          medical records, activity data, geocoded environmental data,
          biological samples, and raw data from sample processing (such as
          genomic sequence data).
        </div>
      </div>
      <div
        ref={panel_2}
        className="mb-16 flex flex-wrap items-center px-5 pl-[4%] pr-[8%] lg:mb-[12rem] lg:flex-nowrap"
      >
        <div className="md:pr-[3%] lg:w-1/2">
          <div className="relative">
            <Image
              src="/images/data-access-map.png"
              alt="dog-13"
              // fill
              width={700}
              height={700}
            />
          </div>
        </div>
        <div className="mt-14 md:mt-20 lg:mt-0 lg:w-1/2">
          <div>
            <h3
              ref={elm_4}
              className="font-plex-mono mb-5 text-xl font-medium uppercase leading-none -tracking-[0.036rem] md:text-2xl lg:mb-[4rem] lg:text-[3.6rem]"
            >
              Data Access
            </h3>
            <div
              ref={elm_5}
              className="mb-8 text-lg leading-snug lg:mb-[6rem] lg:text-[2.8rem]"
            >
              The Dog Aging Project is an open science project committed to
              facilitating public access to de-identified data for many kinds of
              scientific inquiry. Researchers around the world can access Dog
              Aging Project data via Terra, a cloud computing platform hosted by
              the Broad Institute of MIT and Harvard.
            </div>
            <Link
              ref={elm_6}
              href="#"
              className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-bold leading-none shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
            >
              Request Data Access
            </Link>
          </div>
        </div>
      </div>
      <div
        ref={panel_3}
        className="flex flex-wrap-reverse items-center px-5 pl-[8%] pr-[4%] lg:flex-nowrap"
      >
        <div className="mt-14 w-full md:mt-20 lg:mt-0 lg:w-1/2">
          <div>
            <h3
              ref={elm_7}
              className="font-plex-mono mb-5 text-xl font-medium uppercase leading-tight -tracking-[0.036rem] sm:leading-none md:text-2xl lg:mb-[4rem] lg:text-[3.6rem]"
            >
              Dog Aging Project Biobank
            </h3>
            <div
              ref={elm_8}
              className="mb-8 text-lg leading-snug lg:mb-[6rem] lg:text-[2.8rem]"
            >
              Biological samples collected from dogs in the Precision and TRIAD
              cohorts are banked at the Dog Aging Project Biobank housed at the
              Cornell University Veterinary Biobank. Any researcher who wants to
              use samples collected by our project can apply for access through
              the Dog Aging Project. This kind of sharing is critically
              important for the advancement of science because it allows for new
              hypotheses to be tested as new research tools become available.
            </div>
          </div>
        </div>
        <div className="w-full md:pl-[3%] lg:w-1/2">
          <div className="relative">
            <Image
              src="/images/bio-bank.png"
              alt="dog-13"
              // fill
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
