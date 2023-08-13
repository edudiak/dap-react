import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';

export default function PanelOne() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);
  const panel_1 = useRef(null);
  const elm_4 = useRef(null);
  const elm_5 = useRef(null);
  const elm_6 = useRef(null);
  const panel_2 = useRef(null);
  const elm_7 = useRef(null);
  const elm_8 = useRef(null);
  const elm_9 = useRef(null);
  const elm_10 = useRef(null);

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
            trigger: panel_1.current,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: true,
          },
        })
        .fromTo(elm_4.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(elm_5.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(elm_6.current, { x: 40, opacity: 0 }, { x: 0, opacity: 1 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_2.current,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: true,
          },
        })
        .fromTo(elm_7.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(elm_8.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(elm_9.current, { x: 40, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(
          '.what-to-expect-list',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 },
        )
        .fromTo(elm_10.current, { x: 40, opacity: 0 }, { x: 0, opacity: 1 });
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="panel">
      <div className="relative mb-16 flex flex-wrap-reverse items-center px-5 md:mb-20 lg:mb-[30rem] lg:flex-nowrap lg:pl-[8%] lg:pr-[4%]">
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
        <div className="mx-auto flex max-w-[90%] items-center justify-center md:max-w-[70%] lg:absolute lg:-top-[24%] lg:right-[4%] lg:mx-0 lg:max-w-[85rem]">
          <div ref={elm_3} className="relative p-4 lg:p-14">
            <div className="absolute left-0 top-0 h-full w-full rotate-[90deg] transform rounded-full border-[7px] border-[#250A60] border-b-transparent" />
            <div className="overflow-hidden rounded-full shadow-[inset_0px_0px_7px_rgba(0,0,0,0.7)]">
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
      </div>

      <div
        ref={panel_1}
        className="relative mb-14 px-5 md:mb-20 lg:mb-[16rem] lg:px-[8%]"
      >
        <h2
          ref={elm_4}
          className="mb-8 text-3xl leading-snug text-[#F7F3FF] md:text-4xl lg:mb-[6.667rem] lg:w-1/2 lg:text-[6.267rem] lg:leading-tight"
        >
          Supporting clients in the Dog Aging Project
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2">
            <div
              ref={elm_5}
              className="text-lg leading-snug text-[#250A60] lg:text-[2.8rem] lg:leading-snug"
            >
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
              ref={elm_6}
              className="mt-8 rounded-3xl p-6 md:mt-20 lg:mt-[25.333rem] lg:rounded-[4rem] lg:p-[5.33rem]"
              style={{
                background:
                  'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
                backgroundBlendMode: 'overlay, normal, normal',
                boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="text-lg leading-snug  text-[#250A60] md:text-2xl lg:text-[3.6rem] lg:leading-normal">
                We consider veterinary professionals like yourself key partners
                in our scientific study.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={panel_2}
        className="relative my-14 flex flex-wrap items-center px-5 md:mb-20 lg:my-[10rem] lg:flex-nowrap lg:pl-[6%] lg:pr-[8%]"
      >
        <div className="w-full lg:w-1/2 lg:pr-[5%]">
          <div className="flex items-center justify-center">
            <div ref={elm_7} className="relative">
              <Image
                src="/images/what-to-expect.png"
                alt="what-to-expect"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="mt-14 w-full md:mt-20 lg:mt-0 lg:w-1/2">
          <h3
            ref={elm_8}
            className="font-plex-mono mb-4 text-xl font-medium uppercase leading-snug text-[#F7F3FF] md:text-2xl lg:mb-[4rem] lg:text-[3.6rem] lg:leading-snug"
          >
            What to Expect
          </h3>
          <ul
            ref={elm_9}
            className="flex flex-col flex-wrap gap-y-5 leading-snug text-[#250A60] lg:gap-y-[4rem] lg:text-[2.4rem]"
          >
            <li className="what-to-expect-list flex items-start">
              <div className="mr-2 mt-2 flex h-2 w-2 shrink-0 items-center justify-center rounded-full border-2 border-[#250A60] lg:mr-[1.333rem] lg:mt-[.8rem] lg:h-[1.8rem] lg:w-[1.8rem]">
                <div className="h-[.6rem] w-[.6rem] rounded-full bg-[#250A60]" />
              </div>
              Your client will ask you to provide veterinary electronic medical
              records, which they will upload themselves into their personal
              research portal at the Dog Aging Project.
            </li>
            <li className="what-to-expect-list flex items-start">
              <div className="mr-2 mt-2 flex h-2 w-2 shrink-0 items-center justify-center rounded-full border-2 border-[#250A60] lg:mr-[1.333rem] lg:mt-[.8rem] lg:h-[1.8rem] lg:w-[1.8rem]" />
              If your clinic is IDEXX-connected, we will send you an email
              requesting your consent to share veterinary records. Please follow
              the directions in that email to do so.
            </li>
            <li className="what-to-expect-list flex items-start">
              <div className="mr-2 mt-2 flex h-2 w-2 shrink-0 items-center justify-center rounded-full border-2 border-[#250A60] lg:mr-[1.333rem] lg:mt-[.8rem] lg:h-[1.8rem] lg:w-[1.8rem]">
                <div className="h-[.6rem] w-[.6rem] rounded-full bg-[#250A60]" />
              </div>
              <div>
                Depending on the specific study cohort in which your client is
                enrolled, they may ask you for help collecting biological
                samples for analysis in Dog Aging Project labs. For more
                detailed information, please refer to our{' '}
                <a href="#" className="underline">
                  FAQ for veterinarians
                </a>
                .
              </div>
            </li>
            <li className="what-to-expect-list flex items-start">
              <div className="mr-2 mt-2 flex h-2 w-2 shrink-0 items-center justify-center rounded-full border-2 border-[#250A60] lg:mr-[1.333rem] lg:mt-[.8rem] lg:h-[1.8rem] lg:w-[1.8rem]">
                <div className="h-[.6rem] w-[.6rem] rounded-full bg-[#250A60]" />
              </div>
              Your client may ask you to help complete a Chronic Disease
              Inventory. This survey collects information about chronic health
              conditions experienced by the dog. Our team uses this information
              to construct a multimorbidity index.
            </li>
            <li className="what-to-expect-list flex items-start">
              <div className="mr-2 mt-2 flex h-2 w-2 shrink-0 items-center justify-center rounded-full border-2 border-[#250A60] lg:mr-[1.333rem] lg:mt-[.8rem] lg:h-[1.8rem] lg:w-[1.8rem]">
                <div className="h-[.6rem] w-[.6rem] rounded-full bg-[#250A60]" />
              </div>
              <div>
                If you have questions for our team or need assistance with any
                of these tasks, please contact us
                <Link
                  href="/contact-us"
                  className="mt-2 block font-bold lg:mt-[1rem]"
                >
                  Contact the Team
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative px-5 lg:pl-[6%] lg:pr-[8%]">
        <div ref={elm_10} className="w-full lg:w-1/2">
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
