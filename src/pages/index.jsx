import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import Link from 'next/link';

import ArrowDown from '@assets/images/icons/arrow-down.svg';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const thePackDogs = [
    {
      id: 1,
      position: {
        x: 'ml-0',
        y: 'mt-0',
        speed: 0.9,
      },
    },
    {
      id: 2,
      position: {
        x: 'ml-[500px]',
        y: 'mt-[-300px]',
        speed: 0.8,
      },
    },
    {
      id: 3,
      position: {
        x: 'ml-[200px]',
        y: 'mt-[-300px]',
        speed: 1,
      },
    },
    {
      id: 4,
      position: {
        x: 'ml-0',
        y: 'mt-[-100px]',
        speed: 1,
      },
    },
    {
      id: 5,
      position: {
        x: 'ml-[200px]',
        y: 'mt-[-100px]',
        speed: 0.9,
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
        speed: 0.95,
      },
    },
    {
      id: 9,
      position: {
        x: 'ml-[550px]',
        y: 'mt-[-50px]',
        speed: 0.85,
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

  const root = useRef(null);
  // const globalTL = gsap.timeline({ paused: true });

  const section1 = useRef(null);
  const section1_TL = gsap.timeline();
  const section1_panel1 = useRef(null);
  const section1_panel1_elm1 = useRef(null);
  const section1_panel1_elm2 = useRef(null);
  const section1_panel1_elm3 = useRef(null);
  const section1_panel1_elm4 = useRef(null);
  const section1_panel1_elm5 = useRef(null);
  const section1_panel2 = useRef(null);
  const section1_panel2_elm1 = useRef(null);
  const section1_panel2_elm2 = useRef(null);

  const section2 = useRef(null);
  const section2_panel1 = useRef(null);
  const section2_panel1_elm1 = useRef(null);
  const section2_panel1_elm2 = useRef(null);
  const section2_panel1_elm3 = useRef(null);
  const section2_panel1_elm4 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 1.3,
        effects: true,
        smoothTouch: 0.1,
      });

      section1_TL
        .addLabel('section1_Start')
        .fromTo(
          section1_panel1_elm1.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start',
        )
        .fromTo(
          section1_panel1_elm2.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start+=0.1',
        )
        .fromTo(
          section1_panel1_elm3.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start+=0.15',
        )
        .fromTo(
          section1_panel1_elm4.current,
          { y: 100, opacity: 0 },
          { y: 10, opacity: 1 },
          'section1_Start+=0.1',
        )
        .fromTo(
          section1_panel1_elm5.current,
          { y: 100, opacity: 0 },
          { y: 10, opacity: 1 },
          'section1_Start+=0.20',
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section1_panel2.current,
            start: 'top 85%',
          },
        })
        .addLabel('section1_panel2_Start')
        .fromTo(
          section1_panel2_elm1.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
          },
        )
        .fromTo(
          section1_panel2_elm2.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_panel2_Start+=0.1',
        );

      gsap.timeline({
        scrollTrigger: {
          markers: true,
          trigger: section2_panel1.current,
          start: 'top top',
          end: 'bottom 90%',
          pin: section2_panel1_elm1.current,
        },
      });

      // globalTL.add(section1_TL).play();
    }, root); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <main ref={root} id="smooth-wrapper">
      <div id="smooth-content">
        <div ref={section1} className="relative bg-purple-primary">
          <video
            autoPlay
            loop
            muted
            playsInline
            width="100%"
            className="absolute"
          >
            <source src="/videos/dna-bg.mp4" type="video/mp4" />
          </video>
          <div
            ref={section1_panel1}
            className="panel flex min-h-screen items-center py-[14vw]"
          >
            <div className="mx-auto flex-1 px-[10%]">
              <div className="relative mb-[8vw] flex items-center">
                <div className="relative z-[1] w-3/4">
                  <h1
                    ref={section1_panel1_elm1}
                    className="max-w-[46vw] text-[clamp(2rem,4.65vw,12rem)] leading-none text-white"
                  >
                    Discovering the Keys to a Healthy Lifespan
                  </h1>
                  <div
                    ref={section1_panel1_elm2}
                    className="mt-[2.5vw] max-w-[40vw] text-[clamp(1rem,1.6vw,4rem)] leading-snug text-white"
                  >
                    At the Dog Aging Project, we care deeply about the health
                    and happiness of dogs. Our discoveries about healthy aging
                    in our canine companions will translate into medical
                    advances for people too. We’re working toward a future where
                    dogs, and their humans, can live longer and stay
                    healthier—together!
                  </div>
                  <div
                    ref={section1_panel1_elm3}
                    className="mt-[9vw] flex max-w-[50vw] items-center justify-between border-t-2 border-t-white pt-[1vw] text-[clamp(.8rem,1.05vw,3rem)] text-white"
                  >
                    <div className="flex">
                      <div className="mr-[2.5vw]">
                        <span className="will-be-dynamic mr-[.5vw]">
                          65,348,562
                        </span>
                        Dogs in the Pack
                      </div>
                      <div>{currentDate}</div>
                    </div>
                    <Link
                      href="#"
                      className="block rounded-full bg-white px-[1.7vw] py-[.7vw] font-bold leading-none text-black transition hover:bg-black hover:text-white"
                    >
                      Enroll Your Dog
                    </Link>
                  </div>
                </div>
                <div
                  ref={section1_panel1_elm4}
                  data-speed={0.9}
                  className="absolute -top-[5vw] right-[3vw] flex max-w-[45%] items-center justify-center overflow-hidden rounded-full shadow-[inset_0px_0px_7px_rgba(0,0,0,0.7)]"
                >
                  <Image
                    src="/images/banner-dog.jpg"
                    alt="Dog in a field"
                    width={584 * 2}
                    height={584 * 2}
                  />
                </div>
              </div>
              <button
                ref={section1_panel1_elm5}
                type="button"
                className="relative mx-auto block text-white opacity-75"
              >
                <span className="mb-2 block">scroll</span>
                <div className="svg_icon w-[3vw]">
                  <ArrowDown />
                </div>
              </button>
            </div>
          </div>

          <div
            ref={section1_panel2}
            className="panel w-full pb-[10vw] pt-[10vw]"
          >
            <div className="relative flex gap-[2vw] px-[5%]">
              <div
                ref={section1_panel2_elm1}
                className="flex-1 rounded-[2vw] bg-white p-[2.5vw]"
              >
                <h3 className="text-[clamp(2rem,3.5vw,12rem)] leading-none text-primary">
                  Partner With Us
                </h3>
                <div className="mb-[4vw] mt-[1.2vw] text-[clamp(1rem,1.1vw,4rem)] leading-snug text-primary">
                  The Dog Aging Project is an innovative initiative that brings
                  together a community of dogs, owners, veterinarians,
                  researchers, and volunteers to carry out the most ambitious
                  canine health study in the world. We invite you to partner
                  with us and help future generations of dogs live the best
                  lives possible!
                </div>
                <Link
                  href="#"
                  className="inline-block rounded-full bg-[#500000] px-[1.8vw] py-[1.1vw] text-[clamp(1rem,1.1vw,4rem)] font-bold leading-none text-white transition hover:bg-black hover:text-white"
                >
                  Enroll Your Dog
                </Link>
              </div>
              <div
                ref={section1_panel2_elm2}
                className="flex-1 rounded-[2vw] bg-white p-[2.5vw]"
              >
                <h3 className="text-[clamp(2rem,3.5vw,12rem)] leading-none text-primary">
                  Partner With Us
                </h3>
                <div className="mb-[4vw] mt-[1.2vw] text-[clamp(1rem,1.1vw,4rem)] leading-snug text-primary">
                  The Dog Aging Project is an innovative initiative that brings
                  together a community of dogs, owners, veterinarians,
                  researchers, and volunteers to carry out the most ambitious
                  canine health study in the world. We invite you to partner
                  with us and help future generations of dogs live the best
                  lives possible!
                </div>
                <Link
                  href="#"
                  className="inline-block rounded-full bg-[#500000] px-[1.8vw] py-[1.1vw] text-[clamp(1rem,1.1vw,4rem)] font-bold leading-none text-white transition hover:bg-black hover:text-white"
                >
                  Enroll Your Dog
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={section2}
          className="relative bg-[linear-gradient(180deg,#8A5DD2_0%,#250A60_100%)]"
        >
          <div ref={section2_panel1} className="panel py-[14vw]">
            <div className="mx-auto flex flex-1 px-[5%]">
              <div ref={section2_panel1_elm1} className="w-[36%]">
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
                    The only requirement is that you have a good estimate of
                    your dog’s age. If you and your furry best friend are
                    interested in joining the Pack, start the process by
                    clicking the button below.
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
              <div className="w-[60%] pl-[10%]">
                <div className="relative">
                  {thePackDogs.map((dog, i) => {
                    const dogSpeed = dog.position.speed;
                    const cssClass = `${dog.position.y} ${dog.position.x} w-[40%] overflow-hidden rounded-full rounded-bl-[100px] rounded-br-[100px] bg-white bg-opacity-50 shadow-2xl`;
                    return (
                      <div
                        key={dog.id}
                        data-speed={dogSpeed}
                        className={cssClass}
                      >
                        <div>
                          <Image
                            src={`/images/dogs/dog-${i + 1}-min.jpg`}
                            alt={`Dog-${i}`}
                            width={400}
                            height={400}
                          />
                        </div>
                        <div className="p-[1.5vw] text-purple-secondary">
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
      </div>
    </main>
  );
}
