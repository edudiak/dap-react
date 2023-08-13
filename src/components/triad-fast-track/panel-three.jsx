import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PanelThree() {
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
          gsap
            .timeline({
              scrollTrigger: {
                trigger: panel.current,
                start: isDesktop ? 'top 85%' : 'top bottom',
                end: isDesktop ? 'bottom 70%' : 'bottom bottom',
                scrub: 1,
              },
            })
            .fromTo(
              '.for-your-dog',
              { y: 10, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.1,
              },
            )
            .fromTo(
              '.for-you',
              { y: 10, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.1,
              },
              '<=',
            );
        },
      );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={panel}
      className="panel flex w-full flex-1 flex-wrap items-start px-5 pb-10 md:pb-6 lg:flex-nowrap lg:px-[4%] lg:pb-[10rem]"
    >
      <div className="mb-10 w-full lg:mb-0 lg:w-[30%]">
        <h3 className="text-4xl leading-none text-[#F7F3FF] md:text-5xl lg:text-[6.267rem] lg:leading-none">
          Requirements:
        </h3>
      </div>
      <div className="w-full md:w-1/2 lg:w-[35%] lg:pr-[2%]">
        <h3 className="text-3xl leading-none text-[#F7F3FF] lg:text-[6.267rem] lg:leading-none">
          For your dog
        </h3>
        <div className="mt-6 flex flex-col gap-y-3 text-lg text-[#500000] md:mt-10 lg:mt-[4rem] lg:gap-y-[2rem] lg:text-[2.8rem] lg:leading-snug">
          <div className="for-your-dog flex gap-x-3 lg:gap-x-[2rem]">
            <span className="flex w-20 shrink-0 items-center rounded-full bg-[#500000] px-3 py-2 text-xs uppercase text-white lg:w-[13.4rem] lg:px-[2.3rem] lg:py-[0.667rem] lg:text-[2.133rem] lg:leading-none">
              Age:
            </span>
            <span>At least 7 years old</span>
          </div>
          <div className="for-your-dog flex gap-x-3 lg:gap-x-[2rem]">
            <span className="flex w-20 shrink-0 items-center rounded-full bg-[#500000] px-3 py-2 text-xs uppercase text-white lg:w-[13.4rem] lg:px-[2.3rem] lg:py-[0.667rem] lg:text-[2.133rem] lg:leading-none">
              Weight:
            </span>
            <span>Between 44 and 120 lbs</span>
          </div>
          <div className="for-your-dog flex gap-x-3 lg:gap-x-[2rem]">
            <span className="flex w-20 shrink-0 items-center rounded-full bg-[#500000] px-3 py-2 text-xs uppercase text-white lg:w-[13.4rem] lg:px-[2.3rem] lg:py-[0.667rem] lg:text-[2.133rem] lg:leading-none">
              Mood:
            </span>
            <span>Cooperative during vet visits</span>
          </div>
          <div className="for-your-dog flex gap-x-3 lg:gap-x-[2rem]">
            <span className="flex w-20 shrink-0 items-center rounded-full bg-[#500000] px-3 py-2 text-xs uppercase text-white lg:w-[13.4rem] lg:px-[2.3rem] lg:py-[0.667rem] lg:text-[2.133rem] lg:leading-none">
              Fixed:
            </span>
            <span>Spayed or Neutered</span>
          </div>
          <div className="for-your-dog flex gap-x-3 lg:gap-x-[2rem]">
            <span className="flex w-20 shrink-0 items-center rounded-full bg-[#500000] px-3 py-2 text-xs uppercase text-white lg:w-[13.4rem] lg:px-[2.3rem] lg:py-[0.667rem] lg:text-[2.133rem] lg:leading-none">
              Health:
            </span>
            <span>Meet specific health and behavioral criteria</span>
          </div>
          <div className="for-your-dog flex gap-x-3 lg:gap-x-[2rem]">
            <span className="flex w-20 shrink-0 items-center rounded-full bg-[#500000] px-3 py-2 text-xs uppercase text-white lg:w-[13.4rem] lg:px-[2.3rem] lg:py-[0.667rem] lg:text-[2.133rem] lg:leading-none">
              Records:
            </span>
            <span>Veterinary electronic medical records must be provided</span>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full md:mt-0 md:w-1/2 lg:w-[35%]">
        <h3 className="text-3xl leading-none text-[#F7F3FF] lg:text-[6.267rem] lg:leading-none">
          For you
        </h3>
        <div className="mt-6 flex flex-col gap-y-3 text-lg text-[#500000] md:mt-10 lg:mt-[4rem] lg:gap-y-[2rem] lg:text-[2.8rem] lg:leading-snug">
          <div className="for-you flex items-start gap-x-3 lg:gap-x-[2rem]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#500000] text-sm uppercase text-white lg:h-[3.6rem] lg:w-[3.6rem] lg:text-[2.133rem] lg:leading-none">
              1
            </span>
            <span>Visit a clinical site every 6 months</span>
          </div>
          <div className="for-you flex items-start gap-x-3 lg:gap-x-[2rem]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#500000] text-sm uppercase text-white lg:h-[3.6rem] lg:w-[3.6rem] lg:text-[2.133rem] lg:leading-none">
              2
            </span>
            <span>Participate for a total of 3 years</span>
          </div>
          <div className="for-you flex items-start gap-x-3 lg:gap-x-[2rem]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#500000] text-sm uppercase text-white lg:h-[3.6rem] lg:w-[3.6rem] lg:text-[2.133rem] lg:leading-none">
              3
            </span>
            <span>Give your dog a heartworm preventive</span>
          </div>
          <div className="for-you flex items-start gap-x-3 lg:gap-x-[2rem]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#500000] text-sm uppercase text-white lg:h-[3.6rem] lg:w-[3.6rem] lg:text-[2.133rem] lg:leading-none">
              4
            </span>
            <span>Keep your dog up-to-date on vaccines</span>
          </div>
          <div className="for-you flex items-start gap-x-3 lg:gap-x-[2rem]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#500000] text-sm uppercase text-white lg:h-[3.6rem] lg:w-[3.6rem] lg:text-[2.133rem] lg:leading-none">
              5
            </span>
            <span>Administer the study medication weekly</span>
          </div>
          <div className="for-you flex items-start gap-x-3 lg:gap-x-[2rem]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#500000] text-sm uppercase text-white lg:h-[3.6rem] lg:w-[3.6rem] lg:text-[2.133rem] lg:leading-none">
              6
            </span>
            <span>Complete all surveys and activities</span>
          </div>
        </div>
      </div>
    </div>
  );
}
