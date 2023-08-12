/* eslint @next/next/no-img-element: "off" */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';

import ArrowRight from '@assets/images/icons/arrow-with-circle.svg';

gsap.registerPlugin(ScrollTrigger);

export default function PanelSeven() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_1.current,
            start: 'top 90%',
            end: 'bottom bottom',
            scrub: true,
            duration: 3,
          },
        })
        .fromTo(
          elm_1.current,
          { x: 60, opacity: 0 },
          {
            x: 0,
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
          { y: 40, opacity: 0 },
          {
            y: 0,
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
          '.research-data',
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
          },
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden bg-white pb-20 pt-20 lg:pb-[18.66rem] lg:pt-[18.667rem]">
      <div className="px-5 pb-10 lg:px-[8%] lg:pb-[10rem]">
        <h2
          ref={elm_1}
          className="mb-8 ml-auto text-4xl leading-none text-[#6543A5] md:max-w-[700px] lg:mb-[8rem] lg:max-w-[73rem] lg:text-[8.133rem] lg:tracking-[0.114rem]"
        >
          Our research data privacy agreement
        </h2>
        <div
          ref={elm_2}
          className="mb-8 text-xl leading-snug text-[#250A60] lg:mb-[8rem] lg:text-[3.6rem]"
        >
          The Dog Aging Project is committed to protecting our participants’
          privacy and the security of their personal information. Our online
          privacy policy is available{' '}
          <Link href="/privacy-policy" className="underline">
            HERE
          </Link>
          . Our research data privacy commitment is summarized below.
        </div>
        <ul
          ref={elm_3}
          className="mb-8 grid list-outside list-disc grid-cols-1 flex-wrap gap-y-5 text-xl leading-snug text-[#250A60] md:grid-cols-2 lg:mb-[8rem] lg:gap-y-[8rem] lg:text-[2.8rem]"
        >
          <li className="research-data mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            We respect the privacy of everyone associated with the Dog Aging
            Project and recognize that our research participants have
            volunteered to share their time and information with the DAP team in
            order to contribute to our scientific research.
          </li>
          <li className="research-data mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            The DAP will never sell or share participant contact information.
          </li>
          <li className="research-data mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            Only select DAP staff have access to the link between a dog owner’s
            personally identifying information and their dog’s health data.
          </li>
          <li className="research-data mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            The DAP will make all reasonable efforts within the law to maintain
            the privacy and confidentiality of participant data.
          </li>
          <li className="research-data mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            The personally identifying information of our participants, such as
            name and contact information, is encrypted and stored in a secure
            database.
          </li>
          <li className="research-data mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            Canine health data are stored in our secure database under a unique
            identification number. This number does not include your actual
            name, address, or personally identifying information.
          </li>
          <li className="research-data mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            When we share canine health data with our trusted research partners,
            these data do not include personally identifying information.
          </li>
          <li className="research-data mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            In the unlikely case of a security breach, we will inform
            participants promptly.
          </li>
        </ul>
        <div className="leading-snug text-[#250A60] md:text-lg lg:text-[3.6rem] lg:leading-snug">
          Read the full Research Data Privacy Policy{' '}
          <Link
            href="/privacy-policy"
            className="ml-2 inline-flex items-center font-bold lg:ml-[2rem]"
          >
            Click Here
            <div className="svg_icon ml-1 w-6 text-transparent lg:ml-[1.5rem] lg:w-[3.333rem]">
              <ArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
