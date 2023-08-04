import { gsap } from 'gsap';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

export default function PanelOne() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .addLabel('section1_Start')
        .fromTo(
          elm_1.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start',
        )
        .fromTo(
          elm_2.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start+=0.1',
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="panel relative mb-8 px-5 md:mb-10 lg:mb-[10.667rem] lg:px-[4%]">
      <div>
        <Image
          src="/images/our-team-group.jpeg"
          width={1324 * 2}
          height={454 * 2}
          className="rounded-xl lg:rounded-[4rem]"
        />
      </div>
      <div className="mt-5 flex flex-wrap lg:flex-nowrap lg:mt-[4rem]">
        <div className="w-full lg:w-1/2">
          <h1
            ref={elm_1}
            className="text-4xl leading-tight text-[#F7F3FF] md:text-5xl lg:text-[10.667rem] lg:leading-none"
          >
            Our Mission
          </h1>
        </div>
        <div className="w-full lg:w-1/2">
          <div className=" mt-6 text-xl leading-snug text-[#F8F4FF] md:text-2xl lg:text-[3.6rem] lg:leading-snug">
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
