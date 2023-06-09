/* eslint @next/next/no-img-element: "off" */
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomePanelThree() {
  const thePackDogs = [
    {
      id: 1,
      position: {
        x: 'lg:ml-0',
        y: 'lg:mt-0',
        speed: 1.05,
      },
      mobilePosition: {
        x: 'ml-0',
        y: 'mt-0',
        speed: 1.05,
      },
    },
    {
      id: 2,
      position: {
        x: 'lg:ml-[68%]',
        y: 'lg:mt-[-40%]',
        speed: 1.25,
      },
      mobilePosition: {
        x: 'ml-[60%]',
        y: 'mt-[-40%]',
        speed: 1.25,
      },
    },
    {
      id: 3,
      position: {
        x: 'lg:ml-[30%]',
        y: 'lg:mt-[-25%]',
        speed: 1.1,
      },
      mobilePosition: {
        x: 'ml-[30%]',
        y: 'mt-[-25%]',
        speed: 1.1,
      },
    },
    {
      id: 4,
      position: {
        x: 'lg:ml-[-10%]',
        y: 'lg:mt-[-15%]',
        speed: 1.15,
      },
      mobilePosition: {
        x: 'ml-[5%]',
        y: 'mt-[-15%]',
        speed: 1.15,
      },
    },
    {
      id: 5,
      position: {
        x: 'lg:ml-[40%]',
        y: 'lg:mt-[-15%]',
        speed: 1.1,
      },
      mobilePosition: {
        x: 'ml-[20%]',
        y: 'mt-[-10%]',
        speed: 1.1,
      },
    },
    {
      id: 6,
      position: {
        x: 'lg:ml-[75%]',
        y: 'lg:mt-[-40%]',
        speed: 1.05,
      },
      mobilePosition: {
        x: 'ml-[60%]',
        y: 'mt-[-20%]',
        speed: 1.05,
      },
    },
    {
      id: 7,
      position: {
        x: 'lg:ml-0',
        y: 'lg:mt-[-15%]',
        speed: 1,
      },
      mobilePosition: {
        x: 'ml-[-2%]',
        y: 'mt-[-15%]',
        speed: 1,
      },
    },
    {
      id: 8,
      position: {
        x: 'lg:ml-[50%]',
        y: 'lg:mt-[-20%]',
        speed: 1.25,
      },
      mobilePosition: {
        x: 'ml-[50%]',
        y: 'mt-[-20%]',
        speed: 1.25,
      },
    },
    {
      id: 9,
      position: {
        x: 'lg:ml-[70%]',
        y: 'lg:mt-[-10%]',
        speed: 1.3,
      },
      mobilePosition: {
        x: 'ml-[63%]',
        y: 'mt-[-10%]',
        speed: 1.3,
      },
    },
    {
      id: 10,
      position: {
        x: 'lg:ml-0',
        y: 'lg:mt-[-50%]',
        speed: 1.1,
      },
      mobilePosition: {
        x: 'ml-0',
        y: 'mt-[-50%]',
        speed: 1.1,
      },
    },
    {
      id: 11,
      position: {
        x: 'lg:ml-[30%]',
        y: 'lg:mt-[-7%]',
        speed: 1,
      },
      mobilePosition: {
        x: 'ml-[30%]',
        y: 'mt-[-7%]',
        speed: 1,
      },
    },
    {
      id: 12,
      position: {
        x: 'lg:ml-[60%]',
        y: 'lg:mt-[-10%]',
        speed: 1.05,
      },
      mobilePosition: {
        x: 'ml-[60%]',
        y: 'mt-[-10%]',
        speed: 1.05,
      },
    },
  ];

  const elm_1 = useRef(null);
  const panel = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;
          gsap.timeline({
            scrollTrigger: {
              trigger: elm_1.current,
              start: isDesktop ? 'center center' : 'top top',
              end: `+=${
                panel.current.clientHeight - elm_1.current.clientHeight
              } center`,
              pin: elm_1.current,
            },
          });
        },
      );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={panel}
      className="panel flex flex-1 flex-wrap items-start px-5 lg:flex-nowrap lg:px-[4%]"
    >
      <div
        ref={elm_1}
        className="bg- w-full pt-5 lg:w-[45%] lg:bg-transparent lg:pt-0"
      >
        <div>
          <h2 className="text-4xl leading-none text-[#F7F3FF] md:text-5xl lg:text-[10.667rem]">
            Meet The Pack
          </h2>
          <div className="mb-5 mt-3 leading-snug text-[#D2BEFF] md:text-lg lg:mb-[6rem] lg:mt-[4rem] lg:max-w-[70.667rem] lg:text-[2.8rem] lg:leading-tight">
            <p className="mb-2 md:mb-4 lg:mb-[2.5rem]">
              We welcome ALL dogs—young and old, mixed breed and purebred,
              healthy and those with chronic illness—from all fifty US states.
            </p>
            <p>
              The only requirement is that you have a good estimate of your
              dog’s age. If you and your furry best friend are interested in
              joining the Pack, start the process by clicking the button below.
            </p>
          </div>
          <Link
            href="#"
            className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
          >
            Enroll Your Dog
          </Link>
        </div>
      </div>
      <div className="w-full pt-20 lg:w-[60%] lg:pl-[8%] lg:pt-0">
        <div className="relative">
          {thePackDogs.map((dog, i) => {
            const dogSpeed = dog.position.speed;
            const cssClass = `${dog.mobilePosition.y} ${dog.mobilePosition.x} ${dog.position.y} ${dog.position.x} w-[60%] md:w-[40%] overflow-hidden rounded-tl-full rounded-tr-full shadow-2xl`;
            return (
              <div key={dog.id} data-speed={dogSpeed} className={cssClass}>
                <div className="w-full lg:h-[30.5rem]">
                  <img
                    src={`/images/dogs/dog-${i + 1}-min.jpg`}
                    alt={`Dog-${i}`}
                    className="h-[160px] w-full object-cover md:h-[250px] lg:h-full"
                  />
                </div>
                <div
                  className="rounded-bl-[20px] rounded-br-[20px] p-4 backdrop-blur lg:rounded-bl-[4rem] lg:rounded-br-[4rem] lg:p-[2.667rem]"
                  style={{
                    background:
                      'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
                    backgroundBlendMode: 'overlay, normal, normal',
                    boxShadow:
                      '31px 46px 22px rgba(0, 0, 0, 0.01), 18px 26px 19px rgba(0, 0, 0, 0.05), 8px 12px 14px rgba(0, 0, 0, 0.09), 2px 3px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <p className="mb-4 text-lg font-bold leading-none text-[#250A60] lg:mb-[2rem] lg:text-[2.667rem]">
                    Dog Name, Age 3
                  </p>
                  <p className="mb-2 leading-none text-[#532EA4] lg:mb-[.8rem] lg:text-[2.133rem]">
                    Wisconsin
                  </p>
                  <p className="leading-none text-[#532EA4] lg:text-[2.133rem]">
                    Member since Jan 20, 2019
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
