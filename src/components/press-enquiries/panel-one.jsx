import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

import ArrowDownIcon from '@assets/images/icons/arrow-down-small.svg';

export default function PanelOne() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(elm_1.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(
          elm_2.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          '<+=0.1',
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  const logos = [
    {
      image: '/images/logos/dap/all-black-notag.png',
      png: {
        title: 'Logo Art',
        url: '/images/logos/dap/all-black-notag.png',
      },
      svg: {
        title: 'Color Mark, No Tagline, Black Copy',
        url: '/images/logos/dap/all-black-notag.png',
      },
    },
    {
      image: '/images/logos/dap/white-notag.png',
      png: {
        title: 'Logo Art',
        url: '/images/logos/dap/white-notag.png',
      },
      svg: {
        title: 'Color Mark, No Tagline, White Copy',
        url: '/images/logos/dap/white-notag.png',
      },
    },
    {
      image: '/images/logos/dap/all-white-notag.png',
      png: {
        title: 'Logo Art',
        url: '/images/logos/dap/all-white-notag.png',
      },
      svg: {
        title: 'White Mark & Copy, No Tagline',
        url: '/images/logos/dap/all-white-notag.png',
      },
    },
    {
      image: '/images/logos/dap/all-black-tag.png',
      png: {
        title: 'Logo Art',
        url: '/images/logos/dap/all-black-tag.png',
      },
      svg: {
        title: 'Color Mark, Black Copy & Tagline',
        url: '/images/logos/dap/all-black-tag.png',
      },
    },
    {
      image: '/images/logos/dap/white-tag.png',
      png: {
        title: 'Logo Art',
        url: '/images/logos/dap/white-tag.png',
      },
      svg: {
        title: 'Color Mark, White Copy & Tagline',
        url: '/images/logos/dap/white-tag.png',
      },
    },
    {
      image: '/images/logos/dap/all-white-tag.png',
      png: {
        title: 'Logo Art',
        url: '/images/logos/dap/all-white-tag.png',
      },
      svg: {
        title: 'White Mark, Copy & Tagline',
        url: '/images/logos/dap/all-white-tag.png',
      },
    },
  ];

  return (
    <>
      <div className="relative flex flex-wrap-reverse items-center px-5 pb-16 md:pb-24 lg:flex-nowrap lg:pb-[20rem] lg:pl-[8%] lg:pr-[2%]">
        <div className="w-full lg:mt-0">
          <h1
            ref={elm_1}
            className="flex flex-wrap items-center gap-x-2 gap-y-4 text-4xl leading-tight text-[#514730] md:flex-nowrap md:gap-x-0 md:text-5xl lg:text-[10.667rem] lg:leading-none"
          >
            DAP Resources{' '}
            <a
              href="#"
              className="inline-block rounded-full bg-[#F7F3FF] px-6 py-3 text-center text-xl font-medium leading-none text-[#847553] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-white hover:shadow-[0px_0px_14px_3px_rgba(0,0,0,0.30)] md:ml-[2.6rem] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
            >
              Contact Media Relations
            </a>
          </h1>
          <div
            ref={elm_2}
            className="mt-6 text-lg leading-snug text-[#514730] md:text-xl lg:mt-[5.333rem] lg:max-w-[113rem] lg:text-[3.6rem] lg:leading-snug"
          >
            The UW Medicine Media Relations team handles media inquiries for the
            Dog Aging Project. They respond to journalists’ requests for
            interviews with topic experts and spokespersons, background
            information, fact-checking, records requests, filming access,
            official statements and other communications. Please reach the Media
            Relations team.
          </div>
        </div>
      </div>
      <div className="px-5 pb-24 md:pb-40 lg:px-[8%] lg:pb-[20rem]">
        <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-[10rem] lg:gap-y-[8rem]">
          <div className="w-full">
            <h2 className="mb-4 text-4xl leading-none text-[#514730] lg:mb-[4rem] lg:text-[6.267rem] lg:-tracking-[0.114rem]">
              The DAP Logo
            </h2>
            <div className="leading-normal text-[#514730] lg:text-[2.4rem]">
              <p className="mb-4 lg:mb-[2rem]">
                The Dog Aging Project logo comes in 2 styles, each with three
                optional color variations. The first set appears without our
                brand tagline ‘Longer, healthier lives. Together.’ and is used
                more prevalently across media. The version with the tagline is
                great for more prominent positioning with greater allowance for
                space.
              </p>
              <p>
                There are white copy and black copy color variations with the
                brand color logo mark which we prefer to be used in most cases.
                The final variation with white copy and artwork can be used as
                needed on sites with strict color branding of their own.
              </p>
            </div>
          </div>

          {logos.map((logo) => (
            <div key={logo.image} className="w-full">
              <div>
                <img src={logo.image} alt="white-notag" className="w-full" />
              </div>
              <div className="mt-5 flex flex-col gap-y-3 font-bold leading-none md:gap-y-[3rem] lg:mt-[4rem] lg:text-[2.4rem]">
                <a
                  href={logo.png.url}
                  className="flex items-center justify-between"
                >
                  <div className="text-[#6543A5]">{logo.png.title}</div>
                  <div className="flex items-center text-black">
                    Download PNG
                    <div className="svg_icon ml-2 w-4 lg:ml-[1rem] lg:w-[1.7rem]">
                      <ArrowDownIcon />
                    </div>
                  </div>
                </a>
                <a
                  href={logo.svg.url}
                  className="flex items-center justify-between"
                >
                  <div className="text-[#6543A5]">{logo.svg.title}</div>
                  <div className="flex items-center text-black">
                    Download SVG
                    <div className="svg_icon ml-2 w-4 lg:ml-[1rem] lg:w-[1.7rem]">
                      <ArrowDownIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
          <div className="flex w-full items-end">
            <div className="flex max-w-[47rem] flex-col gap-y-3 lg:gap-y-[2.6rem]">
              <a
                href="#"
                className="mt-6 inline-block rounded-full bg-[#F7F3FF] px-6 py-3 text-center font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-white md:mt-0 lg:px-[2.667rem] lg:py-[2rem] lg:text-[2.4rem]"
              >
                Download Full PNG Logo Package
              </a>
              <a
                href="#"
                className="mt-6 inline-block rounded-full bg-[#F7F3FF] px-6 py-3 text-center font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-white md:mt-0 lg:px-[2.667rem] lg:py-[2rem] lg:text-[2.4rem]"
              >
                Download Full PNG Logo Package
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
