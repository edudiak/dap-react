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
    <div className="panel pb-[25%] md:pb-[30%]">
      <div className="relative mb-14 px-5 md:mb-20 lg:mb-[35rem] lg:pl-[8%] lg:pr-[8%]">
        <h1
          ref={elm_1}
          className="text-4xl leading-tight text-[#F7F3FF] md:text-5xl lg:text-[10.667rem] lg:leading-none"
        >
          Our Mission
        </h1>
        <div
          ref={elm_2}
          className="mt-6 text-justify text-lg leading-snug -tracking-[1.4px] text-[#F7F3FF] md:text-xl lg:mt-[5.333rem] lg:text-[6.267rem] lg:leading-snug"
        >
          At the Dog Aging Project, we conduct{' '}
          <span className="scrambled uppercase text-[#250a60]">
            rigorous scientific research
          </span>{' '}
          designed to define, explain, and ameliorate the effects of aging. To
          achieve this mission, we have built a{' '}
          <span className="scrambled uppercase text-[#250a60]">
            community of volunteers and researchers
          </span>{' '}
          united by a{' '}
          <span className="scrambled uppercase text-[#250a60]">
            shared love for dogs
          </span>{' '}
          and committed to helping dogs and humans live longer, healthier lives
          — together.
        </div>
      </div>

      <div className="relative mb-14 flex flex-wrap-reverse px-5 md:mb-20 lg:mb-[10rem] lg:flex-nowrap lg:pl-[8%] lg:pr-[2%]">
        <div className="w-1/2">
          <h2 className="text-lg leading-snug text-[#250a60] md:text-xl lg:text-[6.267rem] lg:leading-snug">
            Science’s Best Friend
          </h2>
          <h3 className="plex-mono mb-6 mt-4 text-xl font-medium uppercase leading-snug md:text-2xl lg:mb-[3rem] lg:mt-[2rem] lg:text-[3.6rem] lg:leading-snug">
            Dogs & Humans
          </h3>
          <div className="text-lg leading-snug text-[#F7F3FF] lg:text-[2.8rem] lg:leading-relaxed">
            Studying aging in humans is challenging and expensive, but dogs
            truly are science’s best friends. Even though they age more rapidly
            than humans, they experience the same diseases of aging, they are
            genetically diverse, and they share our environment. By studying
            aging in dogs, we can more quickly expand our knowledge of the aging
            process not just in dogs but in humans too!
          </div>
        </div>
        <div className="w-1/2 pl-[5%]">
          <div className="flex items-center justify-center">
            <div className="relative p-10">
              <div className="absolute left-0 top-0 h-full w-full rotate-45 transform rounded-full border-[5px] border-[#6543A5] border-b-transparent" />
              <Image
                src="/images/dogs/dog-13.jpg"
                alt="dog-13"
                width={480}
                height={480}
                className="overflow-hidden rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
