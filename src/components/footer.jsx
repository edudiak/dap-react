/* eslint no-unused-vars: "off" */
import { Gradient } from '@/lib/Gradient';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import FacebookIcon from '@assets/images/icons/facebook.svg';
import InstagramIcon from '@assets/images/icons/instagram.svg';
import LinkedInIcon from '@assets/images/icons/linkedin.svg';
import TiktokIcon from '@assets/images/icons/tiktok.svg';
import TwitterIcon from '@assets/images/icons/twitter.svg';
import YoutubeIcon from '@assets/images/icons/youtube.svg';
import axios from 'axios';

export default function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Create your instance
    const gradient = new Gradient();
    // Call `initGradient` with the selector to your canvas
    gradient.initGradient('#footer-gradient-canvas');
  }, []);

  const onSubmit = async (data) => {
    const GF_API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/gf/v2/forms/2/submissions`;

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
    <footer
      className="footer relative -mt-20 overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-cover bg-left-top bg-no-repeat px-5 pb-[2%] pt-40 lg:-mt-[5.556vw] lg:rounded-tl-[5.556vw] lg:rounded-tr-[5.556vw] lg:px-[4%] lg:pt-[20.694vw]"
      style={{
        background:
          'url(/images/dap-bg-noise-20.png), url(/images/footer-bg.png), #6543A5',
      }}
    >
      <canvas
        id="footer-gradient-canvas"
        data-transition-in
        className="pointer-events-none absolute left-0 top-0 h-full w-full"
      />
      <div className="relative">
        <div
          className="rounded-3xl p-6 lg:rounded-[2.778vw] lg:p-[2.083vw]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(80.98deg, rgba(255, 255, 255, 0) 6.08%, rgba(255, 255, 255, 0.13) 45.05%, rgba(255, 255, 255, 0.09) 77.02%, rgba(255, 255, 255, 0) 96.22%), linear-gradient(94.77deg, rgba(255, 255, 255, 0.28) 0.31%, rgba(255, 255, 255, 0.22) 0.32%, rgba(255, 255, 255, 0.08) 25.37%, rgba(255, 255, 255, 0.04) 52.95%, rgba(255, 255, 255, 0.09) 73.8%, rgba(255, 255, 255, 0.17) 97.85%)',
            backgroundBlendMode: 'overlay, normal, normal',
            backdropFilter: 'blur(40px)',
            boxShadow:
              '0px 0px 0px 0px rgba(0, 0, 0, 0.10), 2px 3px 8px 0px rgba(0, 0, 0, 0.10), 8px 12px 14px 0px rgba(0, 0, 0, 0.09), 18px 26px 19px 0px rgba(0, 0, 0, 0.05), 31px 46px 22px 0px rgba(0, 0, 0, 0.01), 49px 73px 25px 0px rgba(0, 0, 0, 0.00)',
          }}
        >
          <div className="flex flex-wrap gap-y-6 md:flex-nowrap md:gap-x-10 md:gap-y-0 lg:gap-x-[2.778vw]">
            <div className="w-full md:w-1/2">
              <div className="mb-3 text-xl font-medium leading-tight text-white md:text-3xl lg:mb-[1.042vw] lg:text-[1.875vw] lg:leading-tight">
                Sign up for Email Updates
              </div>
              <div className="leading-snug text-[#F7F3FF] lg:text-[1.389vw]">
                There are two ways to stay informed on the latest Dog Aging
                Project news and grow with our amazing community. Just check the
                boxes you wish to follow and add your email address below.
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <label
                  htmlFor="signUpForBlog"
                  className="mb-3 flex items-center lg:mb-[1.563vw]"
                >
                  <input
                    id="signUpForBlog"
                    type="checkbox"
                    {...register('input_2')}
                    value={1}
                    checked
                  />
                  <div className="ml-3 text-[#F8F4FF] lg:ml-[0.521vw] lg:text-[1.111vw] lg:leading-none">
                    Sign me up for blog updates
                  </div>
                </label>
                <label
                  htmlFor="signUpForNewsletter"
                  className="flex items-center"
                >
                  <input
                    id="signUpForNewsletter"
                    type="checkbox"
                    {...register('input_2')}
                    value={1}
                    checked
                  />
                  <div className="ml-3 text-[#F8F4FF] lg:ml-[0.521vw] lg:text-[1.111vw] lg:leading-none">
                    Sign me up for the newsletter
                  </div>
                </label>

                <div className="relative mt-4 flex items-center md:mt-6 lg:mt-[1.146vw]">
                  <div className="relative w-full pr-4 lg:pr-[1.042vw]">
                    <input
                      type="text"
                      {...register('input_1', {
                        required: 'Email is required!',
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: 'Invalid email address!',
                        },
                      })}
                      placeholder="your.address@email.com"
                      className="h-[50px] w-full border-b-2 border-b-[#E5D8FF] bg-transparent text-lg text-[#7048C6] placeholder:text-[#7048C6] focus:outline-none focus-visible:border-b-[#7048C6] md:text-xl lg:h-[3.472vw] lg:text-[1.875vw]"
                    />
                    <div className="absolute right-0 top-[30%] flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#7048C6] text-[#7048C6] lg:right-[1.042vw] lg:h-[1.736vw] lg:w-[1.736vw]">
                      <span className="h-[12px] text-xl leading-none lg:h-[1.389vw] lg:text-[2.431vw]">
                        *
                      </span>
                    </div>
                    {errors.input_1 && (
                      <p className="mt-3 text-red-900 lg:mt-[0.833vw] lg:text-[1.250vw]">
                        {errors?.input_1?.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-full bg-[#F7F3FF] px-8 py-4 font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#6543A5] hover:text-[#F7F3FF] lg:px-[2.083vw] lg:py-[1.111vw] lg:text-[1.250vw]"
                  >
                    Submit
                  </button>
                </div>
                {message ? (
                  <div className="col-span-4 text-center text-xl font-medium text-[#7048C6] lg:text-[1.875vw]">
                    {message}
                  </div>
                ) : (
                  ''
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full lg:ml-auto lg:mt-[4.167vw] lg:w-1/2 lg:pl-[1.389vw]">
          <div className="flex flex-wrap justify-between gap-y-8 md:flex-nowrap md:gap-y-0">
            <div className="w-1/2 md:w-auto">
              <h4 className="mb-4 text-xl font-bold text-[#EEEEEE] lg:mb-[1.042vw] lg:text-[1.111vw]">
                The Project
              </h4>
              <ul className="flex flex-col gap-y-3 text-white md:gap-y-4 lg:gap-y-[0.694vw] lg:text-[0.972vw]">
                <li>
                  <Link href="/triad-fast-track" className="hover:underline">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/veterinarians" className="hover:underline">
                    Veterinarians
                  </Link>
                </li>
                <li>
                  <Link href="/our-supporters" className="hover:underline">
                    Supporters
                  </Link>
                </li>
                <li>
                  <Link href="/our-team" className="hover:underline">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-auto">
              <h4 className="mb-4 text-xl font-bold text-[#EEEEEE] lg:mb-[1.042vw] lg:text-[1.111vw]">
                Research
              </h4>
              <ul className="flex flex-col gap-y-3 text-white md:gap-y-4 lg:gap-y-[0.694vw] lg:text-[0.972vw]">
                <li>
                  <Link href="/publications" className="hover:underline">
                    Publications
                  </Link>
                </li>
                <li>
                  <Link href="/data-access" className="hover:underline">
                    Data Access
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-auto">
              <h4 className="mb-4 text-xl font-bold text-[#EEEEEE] lg:mb-[1.042vw] lg:text-[1.111vw]">
                Blog
              </h4>
              <ul className="flex flex-col gap-y-3 text-white md:gap-y-4 lg:gap-y-[0.694vw] lg:text-[0.972vw]">
                <li>
                  <Link
                    href="/blog/category/scientific-results"
                    className="hover:underline"
                  >
                    Scientific Results
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/category/inside-science"
                    className="hover:underline"
                  >
                    Inside Science
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/category/inside-cognition"
                    className="hover:underline"
                  >
                    Inside Cognition
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/category/inside-foundation"
                    className="hover:underline"
                  >
                    Inside Foundation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/category/inside-precision"
                    className="hover:underline"
                  >
                    Inside Precision
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/category/senior-dog-care"
                    className="hover:underline"
                  >
                    Senior Dog Care
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-auto">
              <h4 className="mb-4 text-xl font-bold text-[#EEEEEE] lg:mb-[1.042vw] lg:text-[1.111vw]">
                Media
              </h4>
              <ul className="flex flex-col gap-y-3 text-white md:gap-y-4 lg:gap-y-[0.694vw] lg:text-[0.972vw]">
                <li>
                  <Link href="/media" className="hover:underline">
                    News coverage
                  </Link>
                </li>
                <li>
                  <Link href="/press-resources" className="hover:underline">
                    Press Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-auto">
              <h4 className="mb-4 text-xl font-bold text-[#EEEEEE] lg:mb-[1.042vw] lg:text-[1.111vw]">
                FAQ
              </h4>
              <ul className="flex flex-col gap-y-3 text-white md:gap-y-4 lg:gap-y-[0.694vw] lg:text-[0.972vw]">
                <li>
                  <Link href="#" className="hover:underline">
                    Project FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Owner FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Veterinarian FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-4 gap-y-5 md:flex-nowrap md:gap-y-0 lg:mt-0 lg:gap-x-[1.389vw]">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h4 className="text-xl text-white md:text-2xl lg:text-[1.875vw] lg:leading-tight">
              Join the Project
            </h4>
            <div className="mt-2 border-t border-t-[#B894FF] pt-2 md:mt-3 md:pt-3 lg:mt-[0.781vw] lg:pt-[1.563vw]">
              <a
                href="https://portal.dogagingproject.org/nomination"
                className="text-xl font-bold text-[#D1BD8F] lg:text-[1.250vw]"
              >
                Enroll Your Dog
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h4 className="text-xl text-white md:text-2xl lg:text-[1.875vw] lg:leading-tight">
              Follow Us
            </h4>
            <div className="mt-2 border-t border-t-[#B894FF] pt-2 md:mt-3 md:pt-3 lg:mt-[0.781vw] lg:pt-[1.563vw]">
              <div className="flex items-center justify-between lg:pr-[2.083vw]">
                <a
                  href="https://www.facebook.com/dogagingproject/"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D1BD8F] text-[#D1BD8F] hover:bg-[#D1BD8F] hover:text-white lg:h-[2.292vw] lg:w-[2.292vw]"
                >
                  <div className="svg_icon w-[11px] lg:w-[0.833vw]">
                    <FacebookIcon />
                  </div>
                </a>
                <a
                  href="https://twitter.com/dogagingproject"
                  target="_blank"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D1BD8F] text-[#D1BD8F] hover:bg-[#D1BD8F] hover:text-white lg:h-[2.292vw] lg:w-[2.292vw]"
                  rel="noreferrer"
                >
                  <div className="svg_icon w-[14px] lg:w-[0.972vw]">
                    <TwitterIcon />
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCprnBPHZ8VYgzVfIkP1H7dQ/videos"
                  target="_blank"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D1BD8F] text-[#D1BD8F] hover:bg-[#D1BD8F] hover:text-white lg:h-[2.292vw] lg:w-[2.292vw]"
                  rel="noreferrer"
                >
                  <div className="svg_icon w-[14px] lg:w-[0.972vw]">
                    <YoutubeIcon />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/dogagingproject"
                  target="_blank"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D1BD8F] text-[#D1BD8F] hover:bg-[#D1BD8F] hover:text-white lg:h-[2.292vw] lg:w-[2.292vw]"
                  rel="noreferrer"
                >
                  <div className="svg_icon w-[14px] lg:w-[0.972vw]">
                    <LinkedInIcon />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/dogagingproject/"
                  target="_blank"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D1BD8F] text-[#D1BD8F] hover:bg-[#D1BD8F] hover:text-white lg:h-[2.292vw] lg:w-[2.292vw]"
                  rel="noreferrer"
                >
                  <div className="svg_icon w-[14px] lg:w-[0.972vw]">
                    <InstagramIcon />
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@dogagingproject"
                  target="_blank"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D1BD8F] text-[#D1BD8F] hover:bg-[#D1BD8F] hover:text-white lg:h-[2.292vw] lg:w-[2.292vw]"
                  rel="noreferrer"
                >
                  <div className="svg_icon w-[14px] lg:w-[0.972vw]">
                    <TiktokIcon />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/2">
            <div className="mt-4 flex flex-wrap gap-y-2 border-t border-t-[#B894FF] pt-3 text-sm font-bold text-[#D1BD8F] md:mt-11 lg:mt-[3.125vw] lg:flex-nowrap lg:gap-x-[2.083vw] lg:gap-y-0 lg:pt-[1.563vw] lg:text-[1.111vw]">
              <a
                href="https://dogpark.dogagingproject.org/"
                target="_blank"
                className="block w-full lg:inline lg:w-auto"
                rel="noreferrer"
              >
                The Dog Park
              </a>
              <a
                href="https://portal.dogagingproject.org/"
                target="_blank"
                className="block w-full lg:inline lg:w-auto"
                rel="noreferrer"
              >
                Portal Access
              </a>
              <a
                href="https://portal.dogagingproject.org/nomination"
                className="block w-full lg:inline lg:w-auto"
              >
                Enroll Your Dog
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-10 lg:mt-[6.250vw] lg:flex-nowrap lg:gap-x-[2.778vw]">
          <div className="w-full lg:w-1/2">
            <div className="flex gap-x-[1.563vw]">
              <div className="w-1/2">
                <img
                  src="/images/washington.png"
                  alt="University of Washington"
                  className="lg:h-[1.389vw]"
                />
              </div>
              <div className="w-1/2">
                <img
                  src="/images/texas.png"
                  alt="Texas A&M"
                  className="lg:h-[1.389vw]"
                />
              </div>
            </div>
            <p className="mt-[1.042vw] text-xs leading-snug text-[#C0A3FE] lg:text-[0.972vw] lg:leading-snug">
              The Dog Aging Project is supported by U19 grant AG057377 from the
              National Institute on Aging, a part of the National Institutes of
              Health, and by private donations.
            </p>
          </div>
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2">
            <div className="flex items-center gap-x-[1.563vw] lg:items-stretch">
              <div className="w-3/4 lg:border-t lg:border-t-[#B894FF]">
                <p className="text-sm leading-snug text-[#C0A3FE] lg:mt-[2.292vw] lg:text-[1.042vw] lg:leading-snug">
                  Copyright © 2018 - 2023 The Dog Aging Project
                  <Link href="/privacy-policy" className="block">
                    Project Privacy Policy
                  </Link>
                </p>
              </div>
              <div className="w-1/4">
                <Link href="/">
                  <img src="/images/dap-logo-white.png" alt="Texas A&M" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
