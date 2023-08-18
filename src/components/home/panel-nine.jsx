import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

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
  const elm_9 = useRef(null);
  const elm_10 = useRef(null);
  const elm_11 = useRef(null);
  const elm_12 = useRef(null);
  const elm_13 = useRef(null);
  const elm_14 = useRef(null);
  const elm_15 = useRef(null);
  const elm_16 = useRef(null);
  const elm_17 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_1.current,
            start: 'top 80%',
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

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_9.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_9.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_10.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_10.current,
          { x: -140, opacity: 0 },
          {
            x: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_11.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_11.current,
          { x: 140, opacity: 0 },
          {
            x: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_12.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_12.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_13.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_13.current,
          { x: -140, opacity: 0 },
          {
            x: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_14.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_14.current,
          { x: 140, opacity: 0 },
          {
            x: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_15.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_15.current,
          { x: -140, opacity: 0 },
          {
            x: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_16.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_16.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_17.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_17.current,
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
      className="bg-[#6543A5] px-5 py-[10%] lg:px-[4%]"
      style={{
        backgroundImage: 'url(/images/dap-bg-noise-20.png)',
        backgroundBlendMode: 'overlay, normal, normal',
      }}
    >
      <h2
        ref={elm_1}
        className="mb-14 max-w-[585px] text-4xl tracking-tight text-[#D8C4FF] md:text-5xl lg:mb-[5.208vw] lg:max-w-[40.278vw] lg:text-[4.167vw] lg:-tracking-[00.127vw]"
      >
        The scope & scale of our research
      </h2>
      <div ref={elm_2} className="flex flex-wrap items-start md:flex-nowrap">
        <p className="mr-4 text-[70px] font-medium leading-none text-[#D1BD8F] md:text-[100px] lg:mr-[1.389vw] lg:text-[12.500vw]">
          45,000+
        </p>
        <p className="mt-2 max-w-[180px] font-medium leading-normal text-[#FFF3D8] lg:mt-[1.528vw] lg:max-w-[25vw] lg:text-[1.458vw]">
          Dogs currently enrolled in the Pack
        </p>
      </div>
      <div ref={elm_3} className="ml-auto mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[7.292vw]">
          30K+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[0.833vw] lg:max-w-[20.833vw] lg:text-[1.458vw]">
          Dog with multiyear data
        </p>
      </div>
      <div ref={elm_4} className="mx-auto mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[7.292vw]">
          23K+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[0.833vw] lg:max-w-[20.833vw] lg:text-[1.458vw]">
          Veterinary records submitted
        </p>
      </div>
      <div ref={elm_5} className="mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[7.292vw]">
          22K+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[0.833vw] lg:max-w-[20.833vw] lg:text-[1.458vw]">
          Purebred dogs in the Pack
        </p>
      </div>
      <div
        ref={elm_6}
        className="my-8 flex flex-wrap items-start justify-end md:flex-nowrap lg:my-[2.083vw]"
      >
        <p className="mr-4 text-[70px] font-medium leading-none text-[#D1BD8F] md:text-[100px] lg:mr-[1.389vw] lg:text-[12.500vw]">
          22,000+
        </p>
        <p className="mt-2 max-w-[240px] font-medium leading-normal text-[#FFF3D8] lg:mt-[1.528vw] lg:max-w-[20.833vw] lg:text-[1.458vw]">
          Mixed breed dogs in the Pack
        </p>
      </div>
      <div ref={elm_7} className="max-w-fit">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[7.292vw]">
          11K+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[0.833vw] lg:max-w-[22.917vw] lg:text-[1.458vw]">
          Senior dogs in the Pack
        </p>
      </div>
      <div ref={elm_8} className="ml-auto mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[7.292vw]">
          11K+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[0.833vw] lg:max-w-[20.833vw] lg:text-[1.458vw]">
          Dog Park subscribers
        </p>
      </div>
      <div ref={elm_9} className="mx-auto mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[7.292vw]">
          72,000+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[0.833vw] lg:max-w-[26.042vw] lg:text-[1.458vw]">
          Dogs enrolled in cohort studies
        </p>
      </div>
      <div
        ref={elm_10}
        className="mt-5 flex flex-wrap items-start md:flex-nowrap lg:mt-[5.208vw]"
      >
        <p className="mr-4 text-[70px] font-medium leading-none text-[#D1BD8F] md:text-[100px] lg:mr-[1.389vw] lg:text-[12.500vw]">
          35,000+
        </p>
        <p className="mt-2 max-w-[180px] font-medium leading-normal text-[#FFF3D8] lg:mt-[1.528vw] lg:max-w-[25vw] lg:text-[1.458vw]">
          Unique mixed breed combinations represented
        </p>
      </div>
      <div ref={elm_11} className="ml-auto mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[7.292vw]">
          300+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[0.833vw] lg:max-w-[26.042vw] lg:text-[1.458vw]">
          Unique AKC breeds represented
        </p>
      </div>
      <div ref={elm_12} className="mx-auto mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[7.292vw]">
          200+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[0.833vw] lg:max-w-[26.042vw] lg:text-[1.458vw]">
          Researchers using our data
        </p>
      </div>
      <div ref={elm_13} className="mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[7.292vw]">
          100+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[0.833vw] lg:max-w-[20.833vw] lg:text-[1.458vw]">
          Team members
        </p>
      </div>
      <div ref={elm_14} className="ml-auto mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[7.292vw]">
          50+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[0.833vw] lg:max-w-[26.042vw] lg:text-[1.458vw]">
          Research publications
        </p>
      </div>
      <div ref={elm_15} className="flex flex-wrap items-start md:flex-nowrap">
        <p className="mr-4 text-[70px] font-medium leading-none text-[#D1BD8F] md:text-[100px] lg:mr-[1.389vw] lg:text-[12.500vw]">
          40+
        </p>
        <p className="mt-2 max-w-[180px] font-medium leading-normal text-[#FFF3D8] lg:mt-[1.528vw] lg:max-w-[25vw] lg:text-[1.458vw]">
          Participating institutions & clinical studies
        </p>
      </div>
      <div ref={elm_16} className="mx-auto mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[7.292vw]">
          18+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[0.833vw] lg:max-w-[26.042vw] lg:text-[1.458vw]">
          Participant appreciation events
        </p>
      </div>
      <div ref={elm_17} className="ml-auto mt-8 max-w-fit lg:mt-0">
        <p className="text-[80px] font-medium leading-none text-[#D1BD8F] lg:text-[7.292vw]">
          10+
        </p>
        <p className="mt-2 max-w-[250px] font-medium leading-normal text-[#FFF3D8] lg:mt-[0.833vw] lg:max-w-[26.042vw] lg:text-[1.458vw]">
          Project lifespan in years
        </p>
      </div>
    </div>
  );
}
