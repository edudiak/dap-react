import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function PanelTwo() {
  const panel_1 = useRef(null);
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const panel_2 = useRef(null);
  const elm_3 = useRef(null);
  const elm_4 = useRef(null);
  const panel_3 = useRef(null);
  const elm_5 = useRef(null);
  const elm_6 = useRef(null);
  const panel_4 = useRef(null);
  const elm_7 = useRef(null);
  const elm_8 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_1.current,
            start: 'top 90%',
            end: 'bottom bottom',
            scrub: 1,
          },
        })
        .fromTo(elm_1.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(elm_2.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_2.current,
            start: 'top 90%',
            end: 'bottom bottom',
            scrub: 1,
          },
        })
        .fromTo(elm_3.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(elm_4.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_3.current,
            start: 'top 90%',
            end: 'bottom bottom',
            scrub: 1,
          },
        })
        .fromTo(elm_5.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(elm_6.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_4.current,
            start: 'top 90%',
            end: 'bottom bottom',
            scrub: 1,
          },
        })
        .fromTo(elm_7.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(elm_8.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 });
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative mb-20 px-5 md:mb-40 lg:mb-[33.333rem] lg:px-[4%]">
      <div ref={panel_1} className="mb-20 lg:mb-[20rem]">
        <h2
          ref={elm_1}
          className="mb-8 text-4xl font-medium leading-none lg:mb-[5.333rem] lg:text-[8.133rem] lg:tracking-[0.114rem]"
        >
          Primary Granting Agency
        </h2>
        <div className="max-w-full lg:max-w-[63%]">
          <div
            ref={elm_2}
            className="flex items-center overflow-hidden rounded-3xl text-[#250A60] lg:rounded-[4rem] lg:p-[4rem]"
            style={{
              background:
                'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
              backgroundBlendMode: 'overlay, normal, normal',
              boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="w-1/4 p-2 md:w-4/12 lg:pr-[2rem]">
              <img
                src="/images/logos/nia-logo.png"
                alt="NIA"
                className="w-full"
              />
            </div>
            <div className="w-3/4 p-2 text-sm leading-normal sm:text-lg md:w-8/12 md:text-xl lg:text-[3.6rem] lg:leading-normal">
              The Dog Aging Project is primarily supported by U19 grant AG057377
              (PI: Dr. Daniel Promislow) from the National Institute on Aging, a
              part of the National Institutes of Health.
            </div>
          </div>
        </div>
      </div>

      <div ref={panel_2} className="mb-20 lg:mb-[20rem]">
        <h2
          ref={elm_3}
          className="mb-8 text-4xl font-medium leading-none lg:mb-[5.333rem] lg:text-[8.133rem] lg:tracking-[0.114rem]"
        >
          Additional Granting Agencies
        </h2>

        <div
          ref={elm_4}
          className="flex items-center overflow-hidden rounded-3xl text-[#250A60] lg:rounded-[4rem] lg:p-[4rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex flex-wrap justify-center">
            <div className="w-1/3">
              <img
                src="/images/logos/annenberg-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/3">
              <img
                src="/images/logos/american-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/3">
              <img
                src="/images/logos/glenn-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/3">
              <img
                src="/images/logos/william-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/3">
              <img
                src="/images/logos/iwane-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
          </div>
        </div>
      </div>

      <div ref={panel_3} className="mb-20 lg:mb-[20rem]">
        <h2
          ref={elm_5}
          className="mb-8 text-4xl font-medium leading-none lg:mb-[5.333rem] lg:text-[8.133rem] lg:tracking-[0.114rem]"
        >
          Project Vendors
        </h2>

        <div
          ref={elm_6}
          className="flex items-center overflow-hidden rounded-3xl text-[#250A60] lg:rounded-[4rem] lg:p-[4rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex flex-wrap justify-center">
            <div className="w-1/4">
              <img
                src="/images/logos/annenberg-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/american-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/glenn-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/william-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/iwane-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/annenberg-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/american-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/glenn-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/william-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/iwane-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/annenberg-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
          </div>
        </div>
      </div>

      <div ref={panel_4}>
        <h2
          ref={elm_7}
          className="mb-8 text-4xl font-medium leading-none lg:mb-[5.333rem] lg:text-[8.133rem] lg:tracking-[0.114rem]"
        >
          Annual Meeting Sponsors
        </h2>

        <div
          ref={elm_8}
          className="flex items-center overflow-hidden rounded-3xl text-[#250A60] lg:rounded-[4rem] lg:p-[4rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex flex-wrap justify-center">
            <div className="w-1/4">
              <img
                src="/images/logos/annenberg-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/american-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/glenn-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/william-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/iwane-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/annenberg-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/american-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
            <div className="w-1/4">
              <img
                src="/images/logos/glenn-logo.png"
                alt="NIA"
                className="w-2/3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
