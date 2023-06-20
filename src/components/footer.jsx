/* eslint jsx-a11y/label-has-associated-control: "off" */
/* eslint @next/next/no-img-element: "off" */
import { useEffect } from 'react';
import { Gradient } from '@/lib/Gradient';

import FacebookIcon from '@assets/images/icons/facebook.svg';
import TwitterIcon from '@assets/images/icons/twitter.svg';
import YoutubeIcon from '@assets/images/icons/youtube.svg';
import LinkedInIcon from '@assets/images/icons/linkedin.svg';
import InstagramIcon from '@assets/images/icons/instagram.svg';
import TiktokIcon from '@assets/images/icons/tiktok.svg';

export default function Footer() {
  useEffect(() => {
    // Create your instance
    const gradient = new Gradient();
    // Call `initGradient` with the selector to your canvas
    gradient.initGradient('#footer-gradient-canvas');
  }, []);

  return (
    <footer
      className="footer relative bg-cover bg-left-top bg-no-repeat px-5 pb-[2%] pt-[10%] lg:px-[4%]"
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
          className="rounded-3xl p-6 lg:rounded-[5.333rem] lg:p-[4rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(80.98deg, rgba(255, 255, 255, 0) 6.08%, rgba(255, 255, 255, 0.13) 45.05%, rgba(255, 255, 255, 0.09) 77.02%, rgba(255, 255, 255, 0) 96.22%), linear-gradient(94.77deg, rgba(255, 255, 255, 0.28) 0.31%, rgba(255, 255, 255, 0.22) 0.32%, rgba(255, 255, 255, 0.08) 25.37%, rgba(255, 255, 255, 0.04) 52.95%, rgba(255, 255, 255, 0.09) 73.8%, rgba(255, 255, 255, 0.17) 97.85%)',
            backgroundBlendMode: 'overlay, normal, normal',
            backdropFilter: 'blur(40px)',
          }}
        >
          <div className="flex flex-wrap gap-y-6 md:flex-nowrap md:gap-x-10 md:gap-y-0 lg:gap-x-[5.333rem]">
            <div className="w-full md:w-1/2">
              <div className="mb-3 text-xl font-medium leading-tight text-white md:text-3xl lg:mb-[2rem] lg:text-[3.6rem] lg:leading-tight">
                Sign up for Email Updates
              </div>
              <div className="leading-snug text-[#F7F3FF] lg:text-[2.6rem]">
                There are two ways to stay informed on the latest Dog Aging
                Project news and grow with our amazing community. Just check the
                boxes you wish to follow and add your email address below.
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <form action="">
                <label
                  htmlFor="signUpForBlog"
                  className="mb-3 flex items-center lg:mb-[3rem]"
                >
                  <input
                    id="signUpForBlog"
                    type="checkbox"
                    value=""
                    name="signUpForBlog"
                  />
                  <div className="ml-3 text-[#F8F4FF] lg:ml-[1rem] lg:text-[2.133rem] lg:leading-none">
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
                    value=""
                    name="signUpForNewsletter"
                  />
                  <div className="ml-3 text-[#F8F4FF] lg:ml-[1rem] lg:text-[2.133rem] lg:leading-none">
                    Sign me up for the newsletter
                  </div>
                </label>

                <div className="mt-4 md:mt-6 lg:mt-[2.2rem]">
                  <input
                    type="text"
                    placeholder="your.address@email.com"
                    className="h-[50px] w-full border-b-2 border-b-[#E5D8FF] bg-transparent text-lg text-[#7048C6] placeholder:opacity-50 focus:outline-none focus-visible:border-b-[#7048C6] md:text-xl lg:h-[6.667rem] lg:text-[3.6rem]"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full lg:ml-auto lg:mt-[8rem] lg:w-1/2 lg:pl-[2.667rem]">
          <div className="flex flex-wrap justify-between gap-y-8 md:flex-nowrap md:gap-y-0">
            <div className="w-1/2 md:w-auto">
              <h4 className="mb-4 text-xl font-bold text-[#D2BEFF] lg:mb-[2rem] lg:text-[2.133rem]">
                The Project
              </h4>
              <ul className="flex flex-col gap-y-3 text-white md:gap-y-4 lg:gap-y-[1.333rem] lg:text-[1.867rem]">
                <li>
                  <a href="#" className="hover:underline">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Veterinarians
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Supporters
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-auto">
              <h4 className="mb-4 text-xl font-bold text-[#D2BEFF] lg:mb-[2rem] lg:text-[2.133rem]">
                Research
              </h4>
              <ul className="flex flex-col gap-y-3 text-white md:gap-y-4 lg:gap-y-[1.333rem] lg:text-[1.867rem]">
                <li>
                  <a href="#" className="hover:underline">
                    Publications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Data Access
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-auto">
              <h4 className="mb-4 text-xl font-bold text-[#D2BEFF] lg:mb-[2rem] lg:text-[2.133rem]">
                Blog
              </h4>
              <ul className="flex flex-col gap-y-3 text-white md:gap-y-4 lg:gap-y-[1.333rem] lg:text-[1.867rem]">
                <li>
                  <a href="#" className="hover:underline">
                    Scientific Results
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Inside Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Inside Cognition
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Inside Foundation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Inside Precision
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Aging Dog Care
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-auto">
              <h4 className="mb-4 text-xl font-bold text-[#D2BEFF] lg:mb-[2rem] lg:text-[2.133rem]">
                Media
              </h4>
              <ul className="flex flex-col gap-y-3 text-white md:gap-y-4 lg:gap-y-[1.333rem] lg:text-[1.867rem]">
                <li>
                  <a href="#" className="hover:underline">
                    News coverage
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-auto">
              <h4 className="mb-4 text-xl font-bold text-[#D2BEFF] lg:mb-[2rem] lg:text-[2.133rem]">
                FAQ
              </h4>
              <ul className="flex flex-col gap-y-3 text-white md:gap-y-4 lg:gap-y-[1.333rem] lg:text-[1.867rem]">
                <li>
                  <a href="#" className="hover:underline">
                    Project FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Owner FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Veterinarian FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-4 gap-y-5 md:flex-nowrap md:gap-y-0 lg:mt-0 lg:gap-x-[2.667rem]">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h4 className="text-xl text-white md:text-2xl lg:text-[3.6rem] lg:leading-tight">
              Join the Project
            </h4>
            <div className="mt-2 border-t border-t-[#B894FF] pt-2 md:mt-3 md:pt-3 lg:mt-[1.5rem] lg:pt-[3rem]">
              <a
                href="#"
                className="text-xl font-bold text-[#D1BD8F] lg:text-[2.4rem]"
              >
                Enroll Your Dog
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h4 className="text-xl text-white md:text-2xl lg:text-[3.6rem] lg:leading-tight">
              Follow Us
            </h4>
            <div className="mt-2 border-t border-t-[#B894FF] pt-2 md:mt-3 md:pt-3 lg:mt-[1.5rem] lg:pt-[3rem]">
              <div className="flex items-center justify-between lg:pr-[4rem]">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D1BD8F] text-[#D1BD8F] hover:bg-[#D1BD8F] hover:text-white lg:h-[4.4rem] lg:w-[4.4rem]"
                >
                  <div className="svg_icon w-[11px] lg:w-[1.6rem]">
                    <FacebookIcon />
                  </div>
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D1BD8F] text-[#D1BD8F] hover:bg-[#D1BD8F] hover:text-white lg:h-[4.4rem] lg:w-[4.4rem]"
                >
                  <div className="svg_icon w-[14px] lg:w-[1.9rem]">
                    <TwitterIcon />
                  </div>
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D1BD8F] text-[#D1BD8F] hover:bg-[#D1BD8F] hover:text-white lg:h-[4.4rem] lg:w-[4.4rem]"
                >
                  <div className="svg_icon w-[14px] lg:w-[1.9rem]">
                    <YoutubeIcon />
                  </div>
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D1BD8F] text-[#D1BD8F] hover:bg-[#D1BD8F] hover:text-white lg:h-[4.4rem] lg:w-[4.4rem]"
                >
                  <div className="svg_icon w-[14px] lg:w-[1.9rem]">
                    <LinkedInIcon />
                  </div>
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D1BD8F] text-[#D1BD8F] hover:bg-[#D1BD8F] hover:text-white lg:h-[4.4rem] lg:w-[4.4rem]"
                >
                  <div className="svg_icon w-[14px] lg:w-[1.9rem]">
                    <InstagramIcon />
                  </div>
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D1BD8F] text-[#D1BD8F] hover:bg-[#D1BD8F] hover:text-white lg:h-[4.4rem] lg:w-[4.4rem]"
                >
                  <div className="svg_icon w-[14px] lg:w-[1.9rem]">
                    <TiktokIcon />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/2">
            <div className="mt-4 flex flex-wrap gap-y-2 border-t border-t-[#B894FF] pt-3 text-sm font-bold text-[#D1BD8F] md:mt-11 lg:mt-[6rem] lg:flex-nowrap lg:gap-x-[4rem] lg:gap-y-0 lg:pt-[3rem] lg:text-[2.13rem]">
              <a href="#" className="block w-full lg:inline lg:w-auto">
                The Dog Park
              </a>
              <a href="#" className="block w-full lg:inline lg:w-auto">
                Portal Access
              </a>
              <a href="#" className="block w-full lg:inline lg:w-auto">
                Enroll Your Dog
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-10 lg:mt-[12rem] lg:flex-nowrap lg:gap-x-[5.333rem]">
          <div className="w-full lg:w-1/2">
            <div className="flex gap-x-[3rem]">
              <div className="w-1/2">
                <img
                  src="/images/washington.png"
                  alt="University of Washington"
                  className="lg:h-[2.667rem]"
                />
              </div>
              <div className="w-1/2">
                <img
                  src="/images/texas.png"
                  alt="Texas A&M"
                  className="lg:h-[2.667rem]"
                />
              </div>
            </div>
            <p className="mt-[2rem] text-xs leading-snug text-[#C0A3FE] lg:text-[1.867rem] lg:leading-snug">
              The Dog Aging Project is supported by U19 grant AG057377 from the
              National Institute on Aging, a part of the National Institutes of
              Health, and by private donations.
            </p>
          </div>
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2">
            <div className="flex items-center gap-x-[3rem] lg:items-stretch">
              <div className="w-3/4 lg:border-t lg:border-t-[#B894FF]">
                <p className="text-sm leading-snug text-[#C0A3FE] lg:mt-[4.4rem] lg:text-[2rem] lg:leading-snug">
                  Copyright © 2018 - 2028 The Dog Aging
                  <a href="#" className="block">
                    Project Privacy Policy
                  </a>
                </p>
              </div>
              <div className="w-1/4">
                <img
                  src="/images/dap-logo-white.png"
                  alt="Texas A&M"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
