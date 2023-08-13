import { gsap } from 'gsap';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

export default function PanelOne() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .addLabel('section1_Start')
        .fromTo(
          elm_3.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          'section1_Start',
        )
        .fromTo(
          elm_1.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start+=0.1',
        )
        .fromTo(
          elm_2.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start+=0.2',
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="panel relative mb-8 mt-16 px-5 md:mb-10 md:mt-20 lg:mb-[10.667rem] lg:mt-0 lg:px-[4%]">
      <div ref={elm_3}>
        <Image
          src="/images/our-team-group.jpeg"
          width={1324 * 2}
          height={454 * 2}
          className="rounded-xl lg:rounded-[4rem]"
        />
      </div>
      <div className="mt-5 flex flex-wrap lg:mt-[4rem] lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <h1
            ref={elm_1}
            className="text-4xl leading-tight -tracking-[2.4px] text-[#F7F3FF] md:text-5xl lg:text-[10.667rem] lg:leading-none lg:-tracking-[0.32rem]"
          >
            Our Team
          </h1>
        </div>
        <div ref={elm_2} className="w-full lg:w-1/2">
          <div className=" mt-6 text-xl leading-snug -tracking-[1.35px] text-[#F8F4FF] md:text-2xl lg:text-[3.6rem] lg:leading-snug lg:-tracking-[0.18rem]">
            Our team includes expert researchers from diverse disciplines who
            are global leaders in their fields. Our robust culture of
            collaboration fosters creative partnerships and attracts top
            students. Our goal is to assemble the strongest possible team of
            veterinarians and scientists so that together we can unlock the
            secrets of aging and accelerate medical breakthroughs for dogs and
            humans.
          </div>
        </div>
      </div>
    </div>
  );
}
