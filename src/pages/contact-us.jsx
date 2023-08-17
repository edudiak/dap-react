import axios from 'axios';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);
  const formRef = useRef(null);

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
          { opacity: 0 },
          { opacity: 1 },
          'section1_Start+=0.3',
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const GF_API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/gf/v2/forms/5/submissions`;

    setIsLoading(true);

    try {
      const { data: res } = await axios.post(GF_API_URL, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setIsLoading(false);
      if (res.is_valid) {
        setMessage(
          'Thanks for contacting us! We will get in touch with you shortly.',
        );
        formRef.current.reset();
      }
    } catch (error) {
      const { data: errData } = error.response;
      console.log('error', errData);
      setMessage('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div
        className="relative pb-36 pt-28 md:pt-36 lg:pb-[30rem] lg:pt-[22rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png) repeat, url(/images/footer-bg.png) 0 0 / cover no-repeat, #6543A5',
          backgroundBlendMode: 'overlay, normal, normal',
        }}
      >
        <div className="mx-auto w-full lg:max-w-[122rem]">
          <div className="md:pb-18 relative z-[1] flex flex-wrap-reverse items-center px-5 pb-12 text-white lg:flex-nowrap lg:px-0 lg:pb-[13.333rem]">
            <div className="w-full lg:mt-0 lg:w-3/4">
              <h1
                ref={elm_1}
                className="text-4xl leading-tight md:text-5xl lg:max-w-[92rem] lg:text-[10.667rem] lg:leading-none"
              >
                We’d love to hear from you!
              </h1>
              <div
                ref={elm_2}
                className="mt-6 text-lg leading-snug md:text-xl lg:mt-[4rem] lg:max-w-[67rem] lg:text-[3.6rem] lg:leading-snug"
              >
                If you have comments, questions, requests or media inquiries,
                please use the form below to drop us a note!
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-[90%] items-center justify-center md:max-w-[70%] lg:absolute lg:right-[2%] lg:top-[6%] lg:mx-0 lg:max-w-[75rem]">
            <div className="relative p-4 lg:p-14">
              <div className="absolute left-0 top-0 h-full w-full rotate-[110deg] transform rounded-full border-[7px] border-[#532EA4] border-b-transparent" />
              <div className="overflow-hidden rounded-full">
                <Image
                  src="/images/contact-thumb.png"
                  alt="dog-13"
                  width={1000}
                  height={1000}
                  priority
                  className="overflow-hidden rounded-full"
                />
              </div>
            </div>
          </div>
          <div
            ref={elm_3}
            className="mx-5 mt-16 rounded-3xl px-3 py-8 sm:px-6 lg:mt-0 lg:rounded-[5.333rem] lg:px-[4rem] lg:py-[5.333rem]"
            style={{
              boxShadow:
                '0px 0px 0px 0px rgba(0, 0, 0, 0.10), 2px 3px 8px 0px rgba(0, 0, 0, 0.10), 8px 12px 14px 0px rgba(0, 0, 0, 0.09), 18px 26px 19px 0px rgba(0, 0, 0, 0.05), 31px 46px 22px 0px rgba(0, 0, 0, 0.01), 49px 73px 25px 0px rgba(0, 0, 0, 0.00)',
              background:
                'url(/images/dap-bg-noise-20.png) repeat, linear-gradient(228deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(132deg, rgba(255, 255, 255, 0.41) 0%, rgba(255, 255, 255, 0.48) 49.48%, rgba(255, 255, 255, 0.09) 100%)',
              backgroundBlendMode: 'overlay, normal, normal',
              backdropFilter: 'blur(20px)',
            }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-4 lg:gap-x-[5.333rem] lg:gap-y-[8rem]"
            >
              <div className="relative col-span-4 sm:col-span-3 lg:col-span-2">
                <input
                  type="text"
                  id="input_1"
                  {...register('input_1', {
                    required: 'First Name is required!',
                  })}
                  placeholder="First Name"
                  className="h-12 w-full border-b-2 border-b-[#E5D8FF] bg-transparent text-lg font-medium text-[#7048C6] placeholder:text-[#7048C6] focus-visible:border-b-[#7048C6] focus-visible:outline-none lg:h-[6.667rem] lg:border-b-[0.267rem] lg:text-[3.6rem]"
                />
                <div className="absolute right-0 top-[25%] flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#7048C6] text-[#7048C6] lg:h-[3.333rem] lg:w-[3.333rem]">
                  <span className="h-[12px] text-xl leading-none lg:h-[2.667rem] lg:text-[4.667rem]">
                    *
                  </span>
                </div>

                {errors.input_1 && (
                  <p className="mt-3 text-red-900 lg:mt-[1.6rem] lg:text-[2.4rem]">
                    {errors?.input_1?.message}
                  </p>
                )}
              </div>
              <div className="relative col-span-4 sm:col-span-3 lg:col-span-2">
                <input
                  type="text"
                  id="input_2"
                  {...register('input_2')}
                  placeholder="Last Name"
                  className="h-12 w-full border-b-2 border-b-[#E5D8FF] bg-transparent text-lg font-medium text-[#7048C6] placeholder:text-[#7048C6] focus-visible:border-b-[#7048C6] focus-visible:outline-none lg:h-[6.667rem] lg:border-b-[0.267rem] lg:text-[3.6rem]"
                />
              </div>
              <div className="relative col-span-4 sm:col-span-3">
                <input
                  type="text"
                  id="input_4"
                  {...register('input_4', {
                    required: 'Email is required!',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Invalid email address!',
                    },
                  })}
                  placeholder="your.address@email.com"
                  className="h-12 w-full border-b-2 border-b-[#E5D8FF] bg-transparent text-lg font-medium text-[#7048C6] placeholder:text-[#7048C6] focus-visible:border-b-[#7048C6] focus-visible:outline-none lg:h-[6.667rem] lg:border-b-[0.267rem] lg:text-[3.6rem]"
                />
                <div className="absolute right-0 top-[25%] flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#7048C6] text-[#7048C6] lg:h-[3.333rem] lg:w-[3.333rem]">
                  <span className="h-[12px] text-xl leading-none lg:h-[2.667rem] lg:text-[4.667rem]">
                    *
                  </span>
                </div>
                {errors.input_4 && (
                  <p className="mt-3 text-red-900 lg:mt-[1.6rem] lg:text-[2.4rem]">
                    {errors?.input_4?.message}
                  </p>
                )}
              </div>
              <div className="relative col-span-4 sm:col-span-3">
                <input
                  type="text"
                  id="input_5"
                  {...register('input_5', {
                    required: 'Subject is required!',
                  })}
                  placeholder="Subject - a few words about your message"
                  className="h-12 w-full border-b-2 border-b-[#E5D8FF] bg-transparent text-lg font-medium text-[#7048C6] placeholder:text-[#7048C6] focus-visible:border-b-[#7048C6] focus-visible:outline-none lg:h-[6.667rem] lg:border-b-[0.267rem] lg:text-[3.6rem]"
                />
                <div className="absolute right-0 top-[25%] flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#7048C6] text-[#7048C6] lg:h-[3.333rem] lg:w-[3.333rem]">
                  <span className="h-[12px] text-xl leading-none lg:h-[2.667rem] lg:text-[4.667rem]">
                    *
                  </span>
                </div>
                {errors.input_5 && (
                  <p className="mt-3 text-red-900 lg:mt-[1.6rem] lg:text-[2.4rem]">
                    {errors?.input_5?.message}
                  </p>
                )}
              </div>
              <div className="relative col-span-4">
                <textarea
                  type="text"
                  id="input_6"
                  {...register('input_6', {
                    required: 'Message is required!',
                  })}
                  placeholder="Write your message here, in the length of a tweet - about 140 characters up to 400"
                  className="h-40 w-full rounded-lg border-2 border-b-[#E5D8FF] bg-transparent text-lg font-medium leading-snug text-[#7048C6] placeholder:text-[#7048C6] focus-visible:border-[#7048C6] focus-visible:outline-none lg:h-[41rem] lg:rounded-[1.333rem] lg:border-[0.267rem] lg:p-[2rem] lg:text-[3.6rem]"
                />
                <div className="absolute bottom-4 right-4 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#7048C6] text-[#7048C6] lg:bottom-[2rem] lg:right-[2rem] lg:h-[3.333rem] lg:w-[3.333rem]">
                  <span className="h-[12px] text-xl leading-none lg:h-[2.667rem] lg:text-[4.667rem]">
                    *
                  </span>
                </div>
                {errors.input_6 && (
                  <p className="mt-3 text-red-900 lg:mt-[1.6rem] lg:text-[2.4rem]">
                    {errors?.input_6?.message}
                  </p>
                )}
              </div>
              <div className="col-span-4 flex items-center justify-end text-right">
                {isLoading ? (
                  <div className="lds-dual-ring mr-4 h-6 w-6 after:h-5 after:w-5 lg:mr-[3rem] lg:h-[7rem] lg:w-[7rem] lg:after:h-[5.333rem] lg:after:w-[5.333rem]" />
                ) : (
                  ''
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-6 inline-block rounded-full bg-[#F7F3FF] px-6 py-3 text-center font-semibold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-white disabled:pointer-events-none disabled:opacity-40 md:mt-0 lg:px-[2.667rem] lg:py-[2rem] lg:text-[2.4rem]"
                >
                  Submit
                </button>
              </div>
              {message ? (
                <div className="col-span-4 text-center text-xl font-medium text-[#7048C6] lg:text-[3.6rem]">
                  {message}
                </div>
              ) : (
                ''
              )}
            </form>
          </div>

          <div className="mt-14 px-5 text-white md:mt-24 lg:mt-[20rem] lg:px-[4%]">
            <h2 className="mb-4 text-4xl font-medium leading-none lg:mb-[3.2rem] lg:text-[4.8rem] lg:-tracking-[0.114rem]">
              Media Relation Inquiries
            </h2>
            <div className="leading-normal lg:text-[2.4rem]">
              <p className="mb-4 lg:mb-[2.667rem]">
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
