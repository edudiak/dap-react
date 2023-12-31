import { gsap } from 'gsap';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

export default function PanelOne() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const panel_2 = useRef(null);
  const elm_3 = useRef(null);
  const elm_4 = useRef(null);
  const elm_5 = useRef(null);
  const panel_3 = useRef(null);
  const elm_6 = useRef(null);
  const elm_7 = useRef(null);

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

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_2.current,
            start: 'top bottom',
            end: 'bottom 80%',
            scrub: true,
          },
        })
        .fromTo(elm_3.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, 0)
        .fromTo(
          elm_4.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1 },
          '<+0.05',
        )
        .fromTo(
          elm_5.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1 },
          '<+0.05',
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_3.current,
            start: 'top bottom',
            end: 'bottom 80%',
            scrub: true,
          },
        })
        .fromTo(elm_6.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, 0)
        .fromTo(
          elm_7.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1 },
          '<+0.05',
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="panel">
      <div className="relative mb-8 px-5 md:mb-14 lg:mb-[26.667rem] lg:pl-[8%] lg:pr-[8%]">
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
          <span className="scrambled font-plex-mono text-lg font-medium uppercase text-[#250a60] md:text-xl lg:text-[4.4rem]">
            rigorous scientific research
          </span>{' '}
          designed to define, explain, and ameliorate the effects of aging. To
          achieve this mission, we have built a{' '}
          <span className="scrambled font-plex-mono text-lg font-medium uppercase text-[#250a60] md:text-xl lg:text-[4.4rem]">
            community of volunteers and researchers
          </span>{' '}
          united by a{' '}
          <span className="scrambled font-plex-mono text-lg font-medium uppercase text-[#250a60] md:text-xl lg:text-[4.4rem]">
            shared love for dogs
          </span>{' '}
          and committed to helping dogs and humans live longer, healthier lives
          — together.
        </div>
      </div>

      <div
        ref={panel_2}
        className="relative mb-8 flex flex-wrap-reverse items-center px-5 md:mb-14 lg:mb-[10rem] lg:flex-nowrap lg:pl-[8%] lg:pr-[2%]"
      >
        <div className="mt-8 w-full md:mt-14 lg:mt-0 lg:w-1/2">
          <h2
            ref={elm_3}
            className="text-3xl leading-snug text-[#250a60] md:text-4xl lg:text-[6.267rem] lg:leading-snug"
          >
            Science’s Best Friend
          </h2>
          <h3
            ref={elm_4}
            className="font-plex-mono mb-4 mt-6 text-xl font-medium uppercase leading-snug md:text-2xl lg:mb-[2rem] lg:mt-[4rem] lg:text-[3.6rem] lg:leading-snug"
          >
            Dogs & Humans
          </h3>
          <div
            ref={elm_5}
            className="text-lg leading-snug text-[#F7F3FF] lg:text-[2.8rem] lg:leading-relaxed"
          >
            Studying aging in humans is challenging and expensive, but dogs
            truly are science’s best friends. Even though they age more rapidly
            than humans, they experience the same diseases of aging, they are
            genetically diverse, and they share our environment. By studying
            aging in dogs, we can more quickly expand our knowledge of the aging
            process not just in dogs but in humans too!
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-[5%]">
          <div className="flex items-center justify-center">
            <div className="relative p-4 lg:p-14" data-speed={1.1}>
              <div className="absolute left-0 top-0 h-full w-full rotate-45 transform rounded-full border-[7px] border-[#6543A5] border-b-transparent" />
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

      <div
        ref={panel_3}
        className="relative mb-14 flex flex-wrap items-center px-5 md:mb-20 lg:mb-[10rem] lg:flex-nowrap lg:pl-[2%] lg:pr-[8%]"
      >
        <div className="w-full lg:w-1/2 lg:pr-[5%]">
          <div className="flex items-center justify-center p-1">
            <div className="relative p-4 lg:p-14" data-speed={1.1}>
              <div className="absolute left-0 top-0 h-full w-full -rotate-90 transform rounded-full border-[7px] border-[#6543A5] border-b-transparent" />
              <Image
                src="/images/dogs/family-1.jpg"
                alt="dog-13"
                width={480}
                height={480}
                className="overflow-hidden rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 w-full md:mt-14 lg:mt-0 lg:w-1/2">
          <h3
            ref={elm_6}
            className="font-plex-mono mb-4 mt-0 text-xl font-medium uppercase leading-snug md:text-2xl lg:mb-[2rem] lg:mt-[4rem] lg:text-[3.6rem] lg:leading-snug"
          >
            Maximizing Healthspan
          </h3>
          <div
            ref={elm_7}
            className="text-lg leading-snug text-[#F7F3FF] lg:text-[2.8rem] lg:leading-relaxed"
          >
            <p className="mb-6 lg:mb-[4rem]">
              At the Dog Aging Project, we’re focused on healthy aging not just
              lifespan extension. We want to understand the biological and
              environmental factors that influence aging and intervene to
              prevent debilitating decline.
            </p>
            <p>
              We imagine a future in which we maximize healthspan—the period of
              life spent in good health and free from disease—allowing us many
              more years with high quality of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
