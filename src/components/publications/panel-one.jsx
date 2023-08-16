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
        )
        .fromTo(
          elm_3.current,
          { y: 100, opacity: 0 },
          { y: 10, opacity: 1 },
          'section1_Start+=0.1',
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="md:mb-30 relative mb-20 flex flex-wrap-reverse items-center px-5 lg:mb-[40rem] lg:flex-nowrap lg:pl-[8%] lg:pr-[4%]">
      <div className="z-[1] mt-16 w-full md:mt-20 lg:mt-0 lg:w-3/4">
        <h1
          ref={elm_1}
          className="text-4xl leading-tight text-[#250A60] md:text-5xl lg:text-[10.667rem] lg:leading-none"
        >
          Dog Aging Project research publications
        </h1>
        <div
          ref={elm_2}
          className="mt-6 text-lg leading-snug text-[#250A60] md:text-xl lg:mt-[5.333rem] lg:max-w-[92rem] lg:text-[3.6rem] lg:leading-snug"
        >
          For fellow researchers and academic institutions we have a searchable
          list of the Dog Aging Projects research publications. If you are one
          of Pack Member owners, you will find much of the informative
          discoveries from these publications in our ‘Scientific Results’
          section of the Blog.
        </div>
      </div>
      <div className="mx-auto flex max-w-[90%] items-center justify-center md:max-w-[70%] lg:absolute lg:-top-[25%] lg:right-[4%] lg:mx-0 lg:max-w-[85rem]">
        <div ref={elm_3} className="relative p-4 lg:p-14">
          <div className="absolute left-0 top-0 h-full w-full rotate-[90deg] transform rounded-full border-[7px] border-[#250A60] border-b-transparent" />
          <div className="overflow-hidden rounded-full shadow-[inset_0px_0px_7px_rgba(0,0,0,0.7)]">
            <Image
              src="/images/publications-thumb.jpg"
              alt="dog-13"
              width={2000}
              height={2000}
              className="overflow-hidden rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
