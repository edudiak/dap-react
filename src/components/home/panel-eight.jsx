import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HomePanelEight() {
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
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_3.current,
          { scale: 0.7, opacity: 0, transformOrigin: '0 0' },
          {
            scale: 1,
            opacity: 1,
          },
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-wrap-reverse lg:flex-nowrap">
      <div className="flex w-full items-center bg-[#500000] px-5 lg:w-1/2 lg:px-[8%]">
        <div className="py-10 md:py-16 lg:py-[3.125vw]">
          <h2
            ref={elm_1}
            className="text-4xl leading-tight tracking-tight text-[#FF9494] md:text-5xl lg:text-[4.167vw] lg:leading-tight"
          >
            Support Our Science
          </h2>
          <div
            ref={elm_2}
            className="pb-6 text-lg leading-normal text-[#FF9494] md:pt-6 lg:mt-[1.389vw] lg:pb-[3.125vw] lg:text-[1.458vw] lg:leading-normal"
          >
            We have established the Dog Aging Project as an engine for
            innovation. While core research activities are supported by the
            National Institute on Aging, a division of the National Institutes
            of Health, we are actively seeking additional support to sustain and
            expand our existing initiatives and to develop new, cutting-edge
            programs that will benefit dogs and people too.
          </div>
          <div ref={elm_3} className="">
            <a
              href="https://dogagingproject.org/donate"
              target="_blank"
              className="inline-block rounded-full bg-[#F7F3FF] px-8 py-4 font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#6543A5] hover:text-[#F7F3FF] lg:px-[2.083vw] lg:py-[1.111vw] lg:text-[1.250vw]"
              rel="noreferrer"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <video className="w-full" autoPlay loop muted>
          <source src="/videos/red-dog.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
