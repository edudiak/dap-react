import { gsap } from 'gsap';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';

export default function ContactUs() {
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
    <div>
      <div
        className="relative pb-36 pt-36 md:pb-24 lg:pb-[30rem] lg:pt-[22rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png) repeat, url(/images/footer-bg.png) 0 0 / cover no-repeat, #6543A5',
          backgroundBlendMode: 'overlay, normal, normal',
        }}
      >
        <div className="mx-auto w-full lg:max-w-[122rem]">
          <div className="md:pb-18 relative flex flex-wrap-reverse items-center px-5 pb-12 text-white lg:flex-nowrap lg:px-0 lg:pb-[13.333rem]">
            <div className="mt-16 w-full md:mt-20 lg:mt-0 lg:w-3/4">
              <h1
                ref={elm_1}
                className="text-4xl leading-tight md:text-5xl lg:max-w-[92rem] lg:text-[10.667rem] lg:leading-none"
              >
                We’d love to hear from you!
              </h1>
              <div
                ref={elm_2}
                className="mt-6 text-lg leading-snug md:text-xl lg:mt-[5.333rem] lg:text-[3.6rem] lg:leading-snug"
              >
                If you have comments, questions, requests or media inquiries,
                please use the form below to drop us a note!
              </div>
            </div>
          </div>
          <div
            className="rounded-3xl px-3 sm:px-6 mx-5 py-8 lg:rounded-[5.333rem] lg:px-[4rem] lg:py-[5.333rem]"
            style={{
              boxShadow:
                '0px 0px 0px 0px rgba(0, 0, 0, 0.10), 2px 3px 8px 0px rgba(0, 0, 0, 0.10), 8px 12px 14px 0px rgba(0, 0, 0, 0.09), 18px 26px 19px 0px rgba(0, 0, 0, 0.05), 31px 46px 22px 0px rgba(0, 0, 0, 0.01), 49px 73px 25px 0px rgba(0, 0, 0, 0.00)',
              background:
                'url(/images/dap-bg-noise-20.png) repeat, linear-gradient(228deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(132deg, rgba(255, 255, 255, 0.41) 0%, rgba(255, 255, 255, 0.48) 49.48%, rgba(255, 255, 255, 0.09) 100%)',
              backgroundBlendMode: 'overlay, normal, normal',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-4 lg:gap-x-[5.333rem] lg:gap-y-[8rem]">
              <div className="relative col-span-4 sm:col-span-3 lg:col-span-2">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="h-12 w-full border-b-2 border-b-[#E5D8FF] bg-transparent text-lg font-medium text-[#7048C6] placeholder:text-[#7048C6] focus-visible:border-b-[#7048C6] focus-visible:outline-none lg:h-[6.667rem] lg:border-b-[0.267rem] lg:text-[3.6rem]"
                />
                <div className="absolute right-0 top-[25%] flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#7048C6] text-[#7048C6] lg:h-[3.333rem] lg:w-[3.333rem]">
                  <span className="h-[12px] text-xl leading-none lg:h-[2.667rem] lg:text-[4.667rem]">
                    *
                  </span>
                </div>
              </div>
              <div className="relative col-span-4 sm:col-span-3 lg:col-span-2">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="h-12 w-full border-b-2 border-b-[#E5D8FF] bg-transparent text-lg font-medium text-[#7048C6] placeholder:text-[#7048C6] focus-visible:border-b-[#7048C6] focus-visible:outline-none lg:h-[6.667rem] lg:border-b-[0.267rem] lg:text-[3.6rem]"
                />
              </div>
              <div className="relative col-span-4 sm:col-span-3">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="your.address@email.com"
                  required
                  className="h-12 w-full border-b-2 border-b-[#E5D8FF] bg-transparent text-lg font-medium text-[#7048C6] placeholder:text-[#7048C6] focus-visible:border-b-[#7048C6] focus-visible:outline-none lg:h-[6.667rem] lg:border-b-[0.267rem] lg:text-[3.6rem]"
                />
                <div className="absolute right-0 top-[25%] flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#7048C6] text-[#7048C6] lg:h-[3.333rem] lg:w-[3.333rem]">
                  <span className="h-[12px] text-xl leading-none lg:h-[2.667rem] lg:text-[4.667rem]">
                    *
                  </span>
                </div>
              </div>
              <div className="relative col-span-4 sm:col-span-3">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="your.address@email.com"
                  required
                  className="h-12 w-full border-b-2 border-b-[#E5D8FF] bg-transparent text-lg font-medium text-[#7048C6] placeholder:text-[#7048C6] focus-visible:border-b-[#7048C6] focus-visible:outline-none lg:h-[6.667rem] lg:border-b-[0.267rem] lg:text-[3.6rem]"
                />
                <div className="absolute right-0 top-[25%] flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#7048C6] text-[#7048C6] lg:h-[3.333rem] lg:w-[3.333rem]">
                  <span className="h-[12px] text-xl leading-none lg:h-[2.667rem] lg:text-[4.667rem]">
                    *
                  </span>
                </div>
              </div>
              <div className="relative col-span-4">
                <textarea
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Write your message here, in the length of a tweet - about 140 characters up to 400"
                  required
                  className="h-40 w-full rounded-lg border-2 border-b-[#E5D8FF] bg-transparent text-lg font-medium leading-snug text-[#7048C6] placeholder:text-[#7048C6] focus-visible:border-[#7048C6] focus-visible:outline-none lg:h-[41rem] lg:rounded-[1.333rem] lg:border-[0.267rem] lg:p-[2rem] lg:text-[3.6rem]"
                />
                <div className="absolute bottom-4 right-4 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#7048C6] text-[#7048C6] lg:bottom-[2rem] lg:right-[2rem] lg:h-[3.333rem] lg:w-[3.333rem]">
                  <span className="h-[12px] text-xl leading-none lg:h-[2.667rem] lg:text-[4.667rem]">
                    *
                  </span>
                </div>
              </div>
              <div className="col-span-4 text-right">
                <Link
                  href="#"
                  className="mt-6 inline-block rounded-full bg-[#F7F3FF] px-6 py-3 text-center font-semibold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-white md:mt-0 lg:px-[2.667rem] lg:py-[2rem] lg:text-[2.4rem]"
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 px-5 text-white md:mt-24 lg:mt-[20rem]">
            <h2 className="mb-4 text-4xl font-medium leading-none lg:mb-[3.2rem] lg:text-[4.8rem] lg:-tracking-[0.114rem]">
              Media Relation Inquiries
            </h2>
            <div className="leading-normal lg:text-[2.4rem]">
              <p className="mb-4 lg:mb-[2rem]">
                The UW Medicine Media Relations team handles media inquiries for
                the Dog Aging Project along with other media requests for UW
                Medicine, including the University of Washington School of
                Medicine.
              </p>
              <p className="mb-4 lg:mb-[2rem]">
                We respond to journalists’ requests for interviews with topic
                experts and spokespersons, background information,
                fact-checking, records requests, filming access, official
                statements and other communications.
              </p>
              <p>
                Please reach us at:{' '}
                <a href="mailto:mediarelations@uw.edu">mediarelations@uw.edu</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
