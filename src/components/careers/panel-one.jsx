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
    <>
      <div className="relative flex flex-wrap-reverse items-center px-5 pb-16 md:pb-20 lg:flex-nowrap lg:pb-[16rem] lg:pl-[8%] lg:pr-[2%]">
        <div className="z-[1] mt-16 w-full md:mt-20 lg:mt-0 lg:w-3/4">
          <h1
            ref={elm_1}
            className="text-4xl leading-tight text-[#250A60] md:text-5xl lg:max-w-[92rem] lg:text-[10.667rem] lg:leading-none"
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
        <div className="mx-auto flex max-w-[90%] items-center justify-center md:max-w-[70%] lg:mx-0 lg:max-w-[75rem] xl:absolute xl:-top-[5%] xl:right-[4%]">
          <div className="relative p-14">
            <div className="absolute left-0 top-0 h-full w-full rotate-[120deg] transform rounded-full border-[7px] border-[#250A60] border-b-transparent" />
            <Image
              src="/images/careers-thumb.jpg"
              alt="dog-13"
              width={2000}
              height={2000}
              className="overflow-hidden rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-[8%]">
        <div className="flex text-lg leading-snug text-[#250A60] md:text-xl lg:text-[3.6rem] lg:leading-snug">
          <div className="w-1/2 lg:pr-[2%]">
            <div>
              At the Dog Aging Project, we value diversity in identity and
              perspective. Our ability to achieve our scientific goals is
              enhanced when our team consists of people from different
              backgrounds and life experiences, who can bring a wide variety of
              strengths to the project.
            </div>
          </div>
          <div className="w-1/2 lg:pl-[2%]">
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
