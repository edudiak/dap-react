import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
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
    <div className="relative flex flex-wrap-reverse items-center px-5 pb-16 md:pb-20 lg:flex-nowrap lg:pb-[30rem] lg:pl-[8%] lg:pr-[2%]">
      <div className="z-[1] mt-16 w-full md:mt-20 lg:mt-0 lg:w-3/4">
        <h1
          ref={elm_1}
          className="text-4xl leading-tight text-[#250A60] md:text-5xl lg:text-[10.667rem] lg:leading-none"
        >
          Open Data Access
        </h1>
        <div
          ref={elm_2}
          className="mt-6 text-lg leading-snug text-[#250A60] md:text-xl lg:mt-[5.333rem] lg:max-w-[92rem] lg:text-[3.6rem] lg:leading-snug"
        >
          <p className="mb-3 lg:mb-[1.5rem]">
            Dog Aging Project (DAP) data consist of an extensive set of
            anonymized variables collected from tens of thousands of dogs. Data
            types include survey data, environmental data, and biospecimen lab
            results, among other data types.
          </p>
          <p className="mb-3 lg:mb-[1.5rem]">
            Curated data are released annually via the{' '}
            <Link href="#" className="underline">
              Terra platform
            </Link>{' '}
            to researchers worldwide for use in scientific research, curricular,
            and other nonprofit uses. These data consist of an extensive set of
            anonymized variables collected from tens of thousands of dogs.
            Available data include survey responses, environment variables,
            biospecimen lab results, and other data types. Quality-checked
            codebooks are available via Terra as well as the Dog Aging Project{' '}
            <Link href="#" className="underline">
              GitHub public repository.
            </Link>
          </p>
          For more information, please review to our{' '}
          <Link href="#" className="underline">
            Open Data Initiative FAQ.
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-[90%] items-center justify-center md:max-w-[70%] lg:mx-0 lg:max-w-[75rem] xl:absolute xl:-top-[5%] xl:right-[4%]">
        <div className="relative p-14">
          <div className="absolute left-0 top-0 h-full w-full rotate-[120deg] transform rounded-full border-[7px] border-[#250A60] border-b-transparent" />
          <Image
            src="/images/dogs/dog-in-lab.jpg"
            alt="dog-13"
            width={2000}
            height={2000}
            className="overflow-hidden rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
