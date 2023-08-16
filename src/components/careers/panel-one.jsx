import { gsap } from 'gsap';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

export default function PanelOne() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);
  const elm_4 = useRef(null);
  const elm_5 = useRef(null);

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

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_4.current,
            start: 'top bottom',
            end: 'bottom 90%',
            scrub: true,
          },
        })
        .fromTo(elm_4.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_5.current,
            start: 'top bottom',
            end: 'bottom 90%',
            scrub: true,
          },
        })
        .fromTo(elm_5.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1 });
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="relative mb-20 flex flex-wrap-reverse items-center px-5 md:mb-24 lg:mb-[13.333rem] lg:flex-nowrap lg:pl-[8%] lg:pr-[4%]">
        <div className="z-[1] mt-16 w-full md:mt-20 lg:mt-0 lg:w-3/4">
          <h1
            ref={elm_1}
            className="text-4xl leading-tight text-[#250A60] md:text-5xl lg:text-[10.667rem] lg:leading-none"
          >
            Want to work with purpose, passion…
            <br />
            and puppies
          </h1>
          <div
            ref={elm_2}
            className="mt-6 text-lg leading-snug text-[#250A60] md:text-xl lg:mt-[5.333rem] lg:max-w-[92rem] lg:text-[3.6rem] lg:leading-snug"
          >
            <p className="mb-3 lg:mb-[1.5rem]">
              Do you want to work with an amazing team of humans and dogs as
              part of the most ambitious canine health study in the world? Now
              you can!
            </p>
            <p>
              Join the Dog Aging Project and be part of a fantastic,
              interdisciplinary team. This program is a partnership between the
              University of Washington and Texas A&M University and includes
              collaborators from other top research institutions around the
              world.
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-[90%] items-center justify-center md:max-w-[70%] lg:absolute lg:-top-[10%] lg:right-[4%] lg:mx-0 lg:max-w-[85rem]">
          <div ref={elm_3} className="relative p-4 lg:p-14">
            <div className="absolute left-0 top-0 h-full w-full rotate-[90deg] transform rounded-full border-[7px] border-[#250A60] border-b-transparent" />
            <div className="overflow-hidden rounded-full shadow-[inset_0px_0px_7px_rgba(0,0,0,0.7)]">
              <Image
                src="/images/careers-thumb.jpg"
                alt="dog-13"
                width={2000}
                height={2000}
                priority
                className="overflow-hidden rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 lg:px-[8%]">
        <div className="text-lg leading-snug text-[#250A60] md:text-xl lg:text-[3.6rem] lg:leading-snug">
          <div ref={elm_4} className="w-full md:w-1/2 lg:pr-[2%]">
            <div>
              At the Dog Aging Project, we value diversity in identity and
              perspective. Our ability to achieve our scientific goals is
              enhanced when our team consists of people from different
              backgrounds and life experiences, who can bring a wide variety of
              strengths to the project.
            </div>
          </div>
          <div ref={elm_5} className="w-full md:w-1/2 lg:ml-auto lg:pl-[2%]">
            <div>
              We are committed to equity and inclusion in our hiring practices
              and encourage applicants who are people of color, LGBTQIA+
              individuals, people with disabilities, and those from other
              underrepresented groups to apply.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
