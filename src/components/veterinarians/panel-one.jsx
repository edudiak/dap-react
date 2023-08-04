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
    <div className="panel">
      <div className="relative mb-16 flex flex-wrap-reverse items-center px-5 md:mb-20 lg:mb-[30rem] lg:flex-nowrap lg:pl-[8%] lg:pr-[2%]">
        <div className="z-[1] mt-16 w-full md:mt-20 lg:mt-0 lg:w-3/4">
          <h1
            ref={elm_1}
            className="text-4xl leading-tight text-[#fff] md:text-5xl lg:text-[10.667rem] lg:leading-none"
          >
            Veterinary Geroscience
          </h1>
          <div
            ref={elm_2}
            className="mt-6 text-lg leading-snug text-[#fff] md:text-xl lg:mt-[5.333rem] lg:max-w-[92rem] lg:text-[3.6rem] lg:leading-snug"
          >
            While veterinary medicine has many specialty areas in common with
            human medicine, veterinary geroscience is not, as of yet,
            well-defined. The research team at the Dog Aging Project aims to
            define the aging phenotype in companion dogs and develop
            interventions to help companion dogs stay healthy and vigorous until
            late in life.
          </div>
        </div>
        <div className="mx-auto flex max-w-[90%] items-center justify-center md:max-w-[70%] lg:mx-0 lg:max-w-[75rem] xl:absolute xl:-top-[5%] xl:right-[4%]">
          <div className="relative p-14">
            <div className="absolute left-0 top-0 h-full w-full rotate-[120deg] transform rounded-full border-[7px] border-[#250A60] border-b-transparent" />
            <Image
              src="/images/veterinary-geroscience.jpg"
              alt="dog-13"
              width={2000}
              height={2000}
              className="overflow-hidden rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="relative mb-14 px-5 md:mb-20 lg:mb-[16rem] lg:px-[8%]">
        <h2 className="mb-8 text-3xl leading-snug text-[#F7F3FF] md:text-4xl lg:mb-[6.667rem] lg:w-1/2 lg:text-[6.267rem] lg:leading-snug">
          Supporting clients in the Dog Aging Project
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2">
            <div className="text-lg leading-snug text-[#250A60] lg:text-[2.8rem] lg:leading-relaxed">
              <p className="mb-4 lg:mb-[2.8rem]">
                If you are a primary care veterinarian and your client is part
                of our research study, we will be relying on you to help provide
                some of the key data we collect from our participants.
              </p>
              <p>
                Our team disseminates our research findings to the broader
                veterinary community through publications in top veterinary
                journals and frequent presentations a regional and national
                conferences.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-[5%]">
            <div
              ref={elm_1}
              className=" mt-8 md:mt-20 rounded-3xl p-6 lg:mt-[25.333rem] lg:rounded-[4rem] lg:p-[5.33rem]"
              style={{
                background:
                  'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
                backgroundBlendMode: 'overlay, normal, normal',
                boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="leading-snug text-[#250A60]  text-lg md:text-2xl lg:text-[3.6rem] lg:leading-normal">
                We consider veterinary professionals like yourself key partners
                in our scientific study.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mb-20 relative my-14 flex flex-wrap gap-y-9 items-center px-5 lg:my-[10rem] lg:flex-nowrap lg:pl-[6%] lg:pr-[8%]">
        <div className="w-full lg:w-1/2 lg:pr-[5%]">
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src="/images/what-to-expect.png"
                alt="what-to-expect"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="font-plex-mono mb-4 text-xl font-medium uppercase leading-snug text-[#F7F3FF] md:text-2xl lg:mb-[4rem] lg:text-[3.6rem] lg:leading-snug">
            What to Expect
          </h3>
          <ul className="ml-5 flex list-outside list-disc flex-col flex-wrap gap-y-5 leading-snug text-[#250A60] lg:ml-[3rem] lg:gap-y-[4rem] lg:text-[2.4rem]">
            <li>
              Your client will ask you to provide veterinary electronic medical
              records, which they will upload themselves into their personal
              research portal at the Dog Aging Project.
            </li>
            <li>
              If your clinic is IDEXX-connected, we will send you an email
              requesting your consent to share veterinary records. Please follow
              the directions in that email to do so.
            </li>
            <li>
              Depending on the specific study cohort in which your client is
              enrolled, they may ask you for help collecting biological samples
              for analysis in Dog Aging Project labs. For more detailed
              information, please refer to our FAQ for veterinarians.
            </li>
            <li>
              Your client may ask you to help complete a Chronic Disease
              Inventory. This survey collects information about chronic health
              conditions experienced by the dog. Our team uses this information
              to construct a multimorbidity index.
            </li>
            <li>
              If you have questions for our team or need assistance with any of
              these tasks, please contact us
            </li>
          </ul>
        </div>
      </div>

      <div className="relative px-5 lg:pl-[6%] lg:pr-[8%]">
        <div className="w-full lg:w-1/2">
          <h3 className="font-plex-mono text-xl font-medium uppercase leading-snug text-[#F7F3FF] md:text-2xl lg:text-[3.6rem] lg:leading-snug">
            Want to Know More?
          </h3>
          <div className="my-4 leading-snug text-[#250A60] lg:my-[4rem] lg:text-[2.4rem]">
            Everything you ever wanted to know about being a veterinary partner
            with the Dog Aging Project is in our FAQs. We are grateful for the
            collaborative support from veterinary professionals around the
            country!
          </div>
          <Link
            className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
            href="#"
          >
            Visit Veterinarian FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
