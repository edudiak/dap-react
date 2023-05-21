import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function HomeSectionTwo() {
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
        x: 'ml-[500px]',
        y: 'mt-[-300px]',
        speed: 1.25,
      },
    },
    {
      id: 3,
      position: {
        x: 'ml-[200px]',
        y: 'mt-[-300px]',
        speed: 1.1,
      },
    },
    {
      id: 4,
      position: {
        x: 'ml-0',
        y: 'mt-[-100px]',
        speed: 1.15,
      },
    },
    {
      id: 5,
      position: {
        x: 'ml-[220px]',
        y: 'mt-[-100px]',
        speed: 1.075,
      },
    },
    {
      id: 6,
      position: {
        x: 'ml-[550px]',
        y: 'mt-[-500px]',
        speed: 1.05,
      },
    },
    {
      id: 7,
      position: {
        x: 'ml-0',
        y: 'mt-[-100px]',
        speed: 1,
      },
    },
    {
      id: 8,
      position: {
        x: 'ml-[400px]',
        y: 'mt-[-200px]',
        speed: 1.25,
      },
    },
    {
      id: 9,
      position: {
        x: 'ml-[550px]',
        y: 'mt-[-50px]',
        speed: 1.3,
      },
    },
    {
      id: 10,
      position: {
        x: 'ml-0',
        y: 'mt-[-500px]',
        speed: 1.1,
      },
    },
    {
      id: 11,
      position: {
        x: 'ml-[100px]',
        y: 'mt-[-100px]',
        speed: 1,
      },
    },
    {
      id: 12,
      position: {
        x: 'ml-[350px]',
        y: 'mt-[-200px]',
        speed: 1.05,
      },
    },
  ];

  const section2 = useRef(null);
  const section2_panel1 = useRef(null);
  const section2_panel1_elm1 = useRef(null);
  const section2_panel1_elm2 = useRef(null);
  const section2_panel1_elm3 = useRef(null);
  const section2_panel1_elm4 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: section2_panel1.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: section2_panel1_elm1.current,
        },
      });
    }, section2); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={section2}
      className="relative bg-[linear-gradient(180deg,#8A5DD2_0%,#250A60_100%)]"
    >
      <div ref={section2_panel1} className="panel py-[14vw]">
        <div className="mx-auto flex flex-1 px-[5%]">
          <div ref={section2_panel1_elm1} className="w-[36%]">
            <div>
              <h2
                ref={section2_panel1_elm2}
                className="max-w-[46vw] text-[clamp(2rem,4.65vw,12rem)] leading-none text-white"
              >
                Meet The Pack
              </h2>
              <div
                ref={section2_panel1_elm3}
                className="mb-[3vw] mt-[1vw] max-w-[40vw] text-[clamp(1rem,1.25vw,3rem)] leading-snug text-white"
              >
                <p className="mb-[1vw]">
                  We welcome ALL dogs—young and old, mixed breed and purebred,
                  healthy and those with chronic illness—from all fifty US
                  states.
                </p>
                <p>
                  The only requirement is that you have a good estimate of your
                  dog’s age. If you and your furry best friend are interested in
                  joining the Pack, start the process by clicking the button
                  below.
                </p>
              </div>
              <Link
                ref={section2_panel1_elm4}
                href="#"
                className="inline-block rounded-full bg-white px-[1.8vw] py-[1.1vw] text-[clamp(1rem,1.1vw,4rem)] font-bold leading-none text-purple-secondary transition hover:bg-black hover:text-white"
              >
                Enroll Your Dog
              </Link>
            </div>
          </div>
          <div className="w-[60%] pl-[10%]">
            <div className="relative">
              {thePackDogs.map((dog, i) => {
                const dogSpeed = dog.position.speed;
                const cssClass = `${dog.position.y} ${dog.position.x} w-[40%] overflow-hidden rounded-tl-[30vw] rounded-tr-[30vw] shadow-2xl`;
                return (
                  <div key={dog.id} data-speed={dogSpeed} className={cssClass}>
                    <div>
                      <Image
                        src={`/images/dogs/dog-${i + 1}-min.jpg`}
                        alt={`Dog-${i}`}
                        width={400}
                        height={400}
                      />
                    </div>
                    <div
                      className="rounded-bl-[2vw] rounded-br-[2vw] p-[1.5vw] text-purple-secondary backdrop-blur"
                      style={{
                        background:
                          'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
                        backgroundBlendMode: 'overlay, normal, normal',
                        boxShadow:
                          '31px 46px 22px rgba(0, 0, 0, 0.01), 18px 26px 19px rgba(0, 0, 0, 0.05), 8px 12px 14px rgba(0, 0, 0, 0.09), 2px 3px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(20px)',
                      }}
                    >
                      <p className="mb-[1vw] text-[clamp(1rem,1.25vw,3rem)] font-bold leading-none">
                        Dog Name, Age 3
                      </p>
                      <p className="mb-[.4vw] text-[clamp(.9rem,1.1vw,2rem)] leading-none">
                        Wisconsin
                      </p>
                      <p className="text-[clamp(.9rem,1.1vw,2rem)] leading-none">
                        Member since Jan 20, 2019
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
