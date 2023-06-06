/* eslint @next/next/no-img-element: "off" */
/* eslint no-nested-ternary: "off" */
/* eslint indent: "off" */
/* eslint react/no-array-index-key: "off" */
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
          { scale: 0.7, opacity: 0 },
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
      <div className="flex w-full items-center bg-[#AF4A40] px-5 lg:w-1/2 lg:px-[4%]">
        <div className="py-16 lg:py-[6rem]">
          <h2
            ref={elm_1}
            className="text-5xl leading-tight tracking-tight text-[#FFDADA] lg:text-[8rem] lg:leading-none"
          >
            Join the effort to extend the lifespan of pets and their owners.
          </h2>
          <div
            ref={elm_2}
            className="pb-10 pt-6 text-xl leading-normal text-[#FFDADA] lg:pb-[10rem] lg:pt-[7rem] lg:text-[2.4rem]"
          >
            We have established the Dog Aging Project as an engine for
            innovation. While core research activities are supported by the
            National Institute on Aging, a division of the National Institutes
            of Health, we are actively seeking additional support to sustain and
            expand our existing initiatives and to develop new, cutting-edge
            programs that will benefit dogs and people too.
          </div>
          <div ref={elm_3} className="text-center">
            <Link
              href="#"
              className="inline-block rounded-full bg-[#F7F3FF] px-8 py-4 font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
            >
              Donate Now
            </Link>
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
