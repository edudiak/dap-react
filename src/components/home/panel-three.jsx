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
        x: 'ml-0',
        y: 'mt-0',
        speed: 1.05,
      },
    },
    {
      id: 2,
      position: {
        x: 'ml-[68%]',
        y: 'mt-[-40%]',
        speed: 1.25,
      },
    },
    {
      id: 3,
      position: {
        x: 'ml-[30%]',
        y: 'mt-[-25%]',
        speed: 1.1,
      },
    },
    {
      id: 4,
      position: {
        x: 'ml-[-10%]',
        y: 'mt-[-15%]',
        speed: 1.15,
      },
    },
    {
      id: 5,
      position: {
        x: 'ml-[40%]',
        y: 'mt-[-15%]',
        speed: 1.1,
      },
    },
    {
      id: 6,
      position: {
        x: 'ml-[75%]',
        y: 'mt-[-40%]',
        speed: 1.05,
      },
    },
    {
      id: 7,
      position: {
        x: 'ml-0',
        y: 'mt-[-15%]',
        speed: 1,
      },
    },
    {
      id: 8,
      position: {
        x: 'ml-[50%]',
        y: 'mt-[-20%]',
        speed: 1.25,
      },
    },
    {
      id: 9,
      position: {
        x: 'ml-[70%]',
        y: 'mt-[-10%]',
        speed: 1.3,
      },
    },
    {
      id: 10,
      position: {
        x: 'ml-0',
        y: 'mt-[-50%]',
        speed: 1.1,
      },
    },
    {
      id: 11,
      position: {
        x: 'ml-[30%]',
        y: 'mt-[-7%]',
        speed: 1,
      },
    },
    {
      id: 12,
      position: {
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
      gsap.timeline({
        scrollTrigger: {
          trigger: elm_1.current,
          start: 'center center',
          end: `+=${
            panel.current.clientHeight - elm_1.current.clientHeight
          } center`,
          pin: elm_1.current,
        },
      });
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div ref={panel} className="panel flex flex-1 items-start px-[4%]">
      <div ref={elm_1} className="w-[45%]">
        <div>
          <h2 className="text-[10.667rem] leading-none text-[#F7F3FF]">
            Meet The Pack
          </h2>
          <div className="mb-[6rem] mt-[4rem] max-w-[70.667rem] text-[2.8rem] leading-snug text-[#D2BEFF]">
            <p className="mb-[2rem]">
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
            className="inline-block rounded-full bg-[#F7F3FF] px-[4rem] py-[2.133rem] text-[2.4rem] font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF]"
          >
            Enroll Your Dog
          </Link>
        </div>
      </div>
      <div className="w-[60%] pl-[8%]">
        <div className="relative">
          {thePackDogs.map((dog, i) => {
            const dogSpeed = dog.position.speed;
            const cssClass = `${dog.position.y} ${dog.position.x} w-[40%] overflow-hidden rounded-tl-full rounded-tr-full shadow-2xl`;
            return (
              <div key={dog.id} data-speed={dogSpeed} className={cssClass}>
                <div className="h-[30.5rem] w-full ">
                  <img
                    src={`/images/dogs/dog-${i + 1}-min.jpg`}
                    alt={`Dog-${i}`}
                    className="object-fit h-full w-full"
                  />
                </div>
                <div
                  className="rounded-bl-[4rem] rounded-br-[4rem] p-[2.667rem] backdrop-blur"
                  style={{
                    background:
                      'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
                    backgroundBlendMode: 'overlay, normal, normal',
                    boxShadow:
                      '31px 46px 22px rgba(0, 0, 0, 0.01), 18px 26px 19px rgba(0, 0, 0, 0.05), 8px 12px 14px rgba(0, 0, 0, 0.09), 2px 3px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <p className="mb-[2rem] text-[2.667rem] font-bold leading-none text-[#250A60]">
                    Dog Name, Age 3
                  </p>
                  <p className="mb-[.8rem] text-[2.133rem] leading-none text-[#532EA4]">
                    Wisconsin
                  </p>
                  <p className="text-[2.133rem] leading-none text-[#532EA4]">
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
