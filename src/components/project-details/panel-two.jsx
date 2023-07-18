/* eslint @next/next/no-img-element: "off" */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function PanelTwo() {
  const elm_1 = useRef(null);
  const panel = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;
          gsap.timeline({
            scrollTrigger: {
              trigger: elm_1.current,
              start: isDesktop ? '-100px top' : 'top top',
              pin: elm_1.current,
            },
          });
        },
      );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={panel}
      className="relative flex px-5 pt-[10%] md:pt-[15%] lg:flex-nowrap lg:pl-[4%] lg:pr-[8%]"
    >
      <div className="w-1/2">
        <h2 className="mb-16 text-lg leading-snug tracking-normal text-[#F7F3FF] md:text-2xl lg:mb-[21.333rem] lg:text-[14rem] lg:leading-none lg:tracking-[0.42rem]">
          TRIAD Clinical Trial
        </h2>
        <div
          ref={elm_1}
          className="mb-20 rounded-3xl p-6 lg:mb-[33.333rem] lg:rounded-[4rem] lg:p-[5.33rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <h3 className="font-plex-mono text-2xl font-medium uppercase leading-none -tracking-[0.036rem] text-[#250A60] md:text-3xl lg:text-[3.6rem]">
            About the study
          </h3>
          <div className="mt-2 leading-snug text-[#F7F3FF] md:text-xl lg:mt-[3.2rem] lg:text-[2.8rem] lg:leading-normal">
            The Test of Rapamycin In Aging Dogs (TRIAD) is a double-blind,
            placebo-controlled clinical trial of the mTOR inhibitor rapamycin,
            which at low doses has been shown to increase lifespan and delay or
            reverse many age-related disorders in mice. This is the third and
            largest trial of rapamycin that our group has conducted to date.
          </div>
        </div>
        <div
          ref={elm_1}
          className="rounded-3xl p-6 lg:rounded-[4rem] lg:p-[5.33rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <h3 className="font-plex-mono text-2xl font-medium uppercase leading-none -tracking-[0.036rem] text-[#250A60] md:text-3xl lg:text-[3.6rem]">
            Eligibility
          </h3>
          <div className="mb-5 mt-2 leading-snug text-[#F7F3FF] md:text-xl lg:mb-[4rem] lg:mt-[3.2rem] lg:text-[2.8rem] lg:leading-normal">
            <p className="mb-10">
              Eligible dogs must be healthy dogs at least 7 years of age and at
              least 44 pounds (20 kg) in weight whose owners are willing to
              bring their dogs to one of our participating clinical sites
              regularly.
            </p>
            <p>
              To find out if your dog is eligible for TRIAD, complete the TRIAD
              Rapid Eligibility Assessment.
            </p>
          </div>
          <Link
            href="#"
            className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
          >
            Take the Survey
          </Link>
        </div>
      </div>
      <div className="w-1/2 pl-[2%]">
        <div ref={elm_1} className="flex justify-end">
          <div className="relative">
            <Image
              src="/images/molecule.png"
              alt="dog-13"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
