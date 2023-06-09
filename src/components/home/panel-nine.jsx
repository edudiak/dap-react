import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomePanelNine() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);
  const elm_4 = useRef(null);
  const elm_5 = useRef(null);
  const elm_6 = useRef(null);
  const elm_7 = useRef(null);
  const elm_8 = useRef(null);

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
          { y: 40, scale: 1.05, opacity: 0 },
          {
            y: 0,
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
          { x: 140, opacity: 0 },
          {
            x: 0,
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
          { x: 140, opacity: 0 },
          {
            x: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_4.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_4.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_5.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_5.current,
          { x: -140, opacity: 0 },
          {
            x: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_6.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_6.current,
          { x: -140, opacity: 0 },
          {
            x: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_7.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_7.current,
          { x: -140, opacity: 0 },
          {
            x: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_8.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_8.current,
          { x: 140, opacity: 0 },
          {
            x: 0,
            opacity: 1,
          },
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="bg-[#6543A5] px-[4%] py-[10%]"
      style={{
        backgroundImage: 'url(/images/dap-bg-noise-20.png)',
        backgroundBlendMode: 'overlay, normal, normal',
      }}
    >
      <h2
        ref={elm_1}
        className="mb-14 ml-auto max-w-[585px] text-4xl tracking-tight text-[#D8C4FF] md:text-5xl lg:mb-[10rem] lg:mr-[5%] lg:max-w-[98rem] lg:text-[8rem]"
      >
        Our Stats Show the Scale & Scope of Our Project
      </h2>
      <div ref={elm_2} className="flex items-start">
        <p className="mr-4 text-[100px] font-medium leading-none text-[#D1BD8F] lg:mr-[7rem] lg:text-[24rem]">
          65,000K+
        </p>
        <p className="mt-2 max-w-[180px] font-medium leading-normal text-[#FFF3D8] lg:mt-[3rem] lg:max-w-[40rem] lg:text-[2.8rem]">
          Dogs currently enrolled in our studies
        </p>
      </div>
      <div ref={elm_3} className="ml-auto mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[14rem]">
          240+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[1.5rem] lg:max-w-[40rem] lg:text-[2.8rem]">
          Research projects using data from the Dog Aging Project Terra Platform
        </p>
      </div>
      <div ref={elm_4} className="mx-auto mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[14rem]">
          5 Years
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[1.5rem] lg:max-w-[40rem] lg:text-[2.8rem]">
          Of collecting data from our Community Scientists to grow our results
        </p>
      </div>
      <div ref={elm_5} className="mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[14rem]">
          700+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[1.5rem] lg:max-w-[40rem] lg:text-[2.8rem]">
          Dog breeds enrolled in our studies (and we always need more! Maybe
          yours?)
        </p>
      </div>
      <div
        ref={elm_6}
        className="my-8 flex items-start justify-end lg:my-[4rem]"
      >
        <p className="mr-4 text-[100px] font-medium leading-none text-[#D1BD8F] lg:mr-[7rem] lg:text-[24rem]">
          6000+
        </p>
        <p className="mt-2 max-w-[240px] font-medium leading-normal text-[#FFF3D8] lg:mt-[3rem] lg:max-w-[40rem] lg:text-[2.8rem]">
          Dogs who have been part of the project into their very senior years
          (11-22)
        </p>
      </div>
      <div ref={elm_7} className="max-w-fit">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[14rem]">
          Over 12
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[1.5rem] lg:max-w-[44rem] lg:text-[2.8rem]">
          Different primary activity categories for Dog Pack members (companion,
          service, assistance, working, agility, show, breeding, rescue, etc.)
        </p>
      </div>
      <div ref={elm_8} className="ml-auto mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[14rem]">
          10K+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[1.5rem] lg:max-w-[40rem] lg:text-[2.8rem]">
          Dogs who have been adopted from shelter, enrolled in our project
        </p>
      </div>
    </div>
  );
}
