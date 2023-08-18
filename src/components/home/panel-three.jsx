import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

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
        x: '-ml-[5%]',
        y: 'mt-0',
        speed: 1.05,
      },
    },
    {
      id: 2,
      position: {
        x: 'lg:ml-[52%]',
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
        x: 'lg:ml-[25%]',
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
        x: 'lg:ml-[55%]',
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
        x: 'ml-[-7%]',
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
        x: '-ml-[5%]',
        y: 'mt-[-50%]',
        speed: 1.1,
      },
    },
    {
      id: 11,
      position: {
        x: 'lg:ml-[40%]',
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
        x: 'lg:ml-[20%]',
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
          <h2 className="text-4xl leading-none text-[#F7F3FF] md:text-5xl lg:text-[5.556vw]">
            Meet The Pack
          </h2>
          <div className="mb-5 mt-3 leading-snug text-[#EEE] md:text-lg lg:mb-[3.125vw] lg:mt-[2.083vw] lg:max-w-[36.806vw] lg:text-[1.458vw] lg:leading-normal">
            <p className="mb-2 md:mb-4 lg:mb-[1.302vw]">
              We welcome ALL dogs—young and old, mixed breed and purebred,
              healthy and those with chronic illness—from all fifty US states.
            </p>
            <p>
              The only requirement is that you have a good estimate of your
              dog’s age. If you and your furry best friend are interested in
              joining the Pack, start the process by clicking the button below.
            </p>
          </div>
          <a
            href="https://portal.dogagingproject.org/nomination"
            className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#6543A5] hover:text-[#fff] lg:px-[2.083vw] lg:py-[1.111vw] lg:text-[1.250vw]"
          >
            Enroll Your Dog
          </a>
        </div>
      </div>
      <div className="w-full pt-20 lg:w-[60%] lg:pl-[8%] lg:pt-0">
        <div className="relative">
          {thePackDogs.map((dog, i) => {
            const dogSpeed = dog.position.speed;
            const cssClass = `${dog.mobilePosition.y} ${dog.mobilePosition.x} ${
              dog.position.y
            } ${dog.position.x} w-[60%] ${
              i % 2 ? 'md:w-[50%]' : 'md:w-[35%]'
            }  overflow-hidden rounded-3xl lg:rounded-[2.083vw] shadow-2xl`;
            return (
              <div
                key={dog.id}
                data-speed={dogSpeed}
                className={cssClass}
                style={{
                  background:
                    'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
                  backgroundBlendMode: 'overlay, normal, normal',
                  boxShadow:
                    '31px 46px 22px rgba(0, 0, 0, 0.01), 18px 26px 19px rgba(0, 0, 0, 0.05), 8px 12px 14px rgba(0, 0, 0, 0.09), 2px 3px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div
                  className={`w-full overflow-hidden rounded-bl-full rounded-br-full ${
                    i % 2 ? 'lg:h-[15.625vw]' : 'lg:h-[10.417vw]'
                  }`}
                >
                  <img
                    src={`/images/dogs/dog-${i + 1}-min.jpg`}
                    alt={`Dog-${i}`}
                    className="h-[160px] w-full object-cover md:h-[250px] lg:h-full"
                  />
                </div>
                <div className="p-4 lg:p-[1.389vw]">
                  <p className="mb-4 text-lg font-bold leading-none text-[#250A60] lg:mb-[1.042vw] lg:text-[1.389vw]">
                    Dog Name
                  </p>
                  <p className="leading-none text-[#532EA4] lg:text-[1.111vw]">
                    Pack Number 12345
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
