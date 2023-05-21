/* eslint @next/next/no-img-element: "off" */
/* eslint no-nested-ternary: "off" */
/* eslint indent: "off" */
/* eslint react/no-array-index-key: "off" */
import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import Link from 'next/link';

import VideoPopup from '@/components/video-popup';

import ArrowDown from '@assets/images/icons/arrow-down.svg';
import PlayIcon from '@assets/images/icons/play-video.svg';
import BorderPurplePrimary from '@assets/images/icons/border-purple-primary.svg';
import BorderPurple200 from '@assets/images/icons/border-purple-200.svg';
import BorderPurple200Small from '@assets/images/icons/border-purple-200-small.svg';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const [openVideoPopup, setOpenVideoPopup] = useState(false);

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

  const root = useRef(null);

  const section1 = useRef(null);
  const section1_panel1 = useRef(null);
  const section1_panel1_elm1 = useRef(null);
  const section1_panel1_elm2 = useRef(null);
  const section1_panel1_elm3 = useRef(null);
  const section1_panel1_elm4 = useRef(null);
  const section1_panel1_elm4_circle = useRef(null);
  const section1_panel1_elm5 = useRef(null);
  const section1_panel2 = useRef(null);
  const section1_panel2_elm1 = useRef(null);
  const section1_panel2_elm2 = useRef(null);
  const section1_panel3 = useRef(null);
  const section1_panel3_elm1 = useRef(null);
  const section1_panel3_elm2 = useRef(null);
  const section1_panel3_elm3 = useRef(null);
  const section1_panel3_elm4 = useRef(null);

  const section3 = useRef(null);
  const section3_panel1 = useRef(null);
  const section3_panel1_elm1 = useRef(null);
  const section3_panel1_elm2 = useRef(null);
  const section3_panel1_elm3 = useRef(null);
  const section3_panel1_elm4 = useRef(null);
  const section3_panel1_elm5 = useRef(null);

  const section4 = useRef(null);
  const section4_sticky_panels = useRef(null);
  const section4_sticky_panel1 = useRef(null);
  const section4_sticky_panel2 = useRef(null);
  const section4_sticky_panel3 = useRef(null);
  const section4_sticky_panel4 = useRef(null);
  const section4_sticky_panel5 = useRef(null);
  const section4_sticky_panel6 = useRef(null);
  const section4_sticky_panel7 = useRef(null);

  const section4_panel2 = useRef(null);
  const section4_panel2_box1 = useRef(null);
  const section4_panel2_box2 = useRef(null);
  const section4_panel2_box3 = useRef(null);
  const section4_panel2_box4 = useRef(null);
  const section4_panel2_box5 = useRef(null);
  const section4_panel2_box6 = useRef(null);
  const section4_panel2_box1_dot = useRef(null);
  const section4_panel2_box2_dot = useRef(null);
  const section4_panel2_box3_dot = useRef(null);
  const section4_panel2_box4_dot = useRef(null);
  const section4_panel2_box5_dot = useRef(null);
  const section4_panel2_box6_dot = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 1.3,
        effects: true,
        smoothTouch: 0.1,
      });

      gsap
        .timeline()
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
        .to(section1_panel1_elm4_circle.current, {
          rotate: 360,
          duration: 6,
          repeat: -1,
          ease: 'none',
        })
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
          trigger: section1_panel3_elm1.current,
          start: 'center center',
          end: `+=${section1_panel3.current.clientHeight - 500} center`,
          pin: section1_panel3_elm1.current,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section3.current,
            start: 'top top',
            end: 'bottom bottom',
            pin: section3_panel1_elm1.current,
          },
        })
        .addLabel('section3_panel2_Start')
        .fromTo(
          section3_panel1_elm4.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
          },
        )
        .fromTo(
          section3_panel1_elm5.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_panel2_Start+=0.1',
        );

      // Box animation
      gsap.timeline({
        scrollTrigger: {
          trigger: section4.current,
          start: 'top top',
          pin: section4.current,
          toggleActions: 'play none none reverse',
          end: '+=1000',
        },
      });

      // Box 1 Animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section4.current,
            start: (self) => self.previous().end,
            pin: section4.current,
            toggleActions: 'play none none reverse',
            end: '+=1000',
          },
        })
        .to(section4_panel2_box1.current, {
          backgroundColor: '#216A97',
        })
        .fromTo(
          section4_panel2_box1_dot.current,
          { opacity: 0, backgroundColor: '#B894FF', scale: 1 },
          { opacity: 1, backgroundColor: '#216A97', scale: 50 },
          '<=',
        )
        .to(section4_sticky_panel7.current, { opacity: 0 }, '<=')
        .to(section4_sticky_panel1.current, { opacity: 1 }, '<=')
        .to(
          [
            section4_panel2_box2.current,
            section4_panel2_box3.current,
            section4_panel2_box4.current,
            section4_panel2_box5.current,
            section4_panel2_box6.current,
          ],
          { backgroundColor: '#5DC0FD' },
          '<=',
        );

      // // Box 2 Animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section4.current,
            start: (self) => self.previous().end,
            end: '+=1000',
            pin: section4.current,
            toggleActions: 'play none none reverse',
          },
        })
        .to(section4_panel2_box2.current, { backgroundColor: '#6F48C6' }, '<=')
        .to(
          section4_panel2_box2_dot.current,
          { opacity: 1, backgroundColor: '#6F48C6', scale: 50 },
          '<=',
        )
        .to(section4_sticky_panel1.current, { opacity: 0 }, '<=')
        .to(section4_sticky_panel2.current, { opacity: 1 }, '<=')
        .to(
          [
            section4_panel2_box1.current,
            section4_panel2_box3.current,
            section4_panel2_box4.current,
            section4_panel2_box5.current,
            section4_panel2_box6.current,
          ],
          { backgroundColor: '#B894FF' },
          '<=',
        );

      // Box 3 Animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section4.current,
            start: (self) => self.previous().end,
            end: '+=1000px',
            pin: section4.current,
            toggleActions: 'play none none reverse',
          },
        })
        .to(section4_panel2_box3.current, { backgroundColor: '#C3912A' }, '<=')
        .to(
          section4_panel2_box3_dot.current,
          { opacity: 1, backgroundColor: '#C3912A', scale: 50 },
          '<=',
        )
        .to(section4_sticky_panel2.current, { opacity: 0 }, '<=')
        .to(section4_sticky_panel3.current, { opacity: 1 }, '<=')
        .to(
          [
            section4_panel2_box1.current,
            section4_panel2_box2.current,
            section4_panel2_box4.current,
            section4_panel2_box5.current,
            section4_panel2_box6.current,
          ],
          { backgroundColor: '#FEC652' },
          '<=',
        );

      // // Box 4 Animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section4.current,
            start: (self) => self.previous().end,
            end: '+=1000px',
            pin: section4.current,
            toggleActions: 'play none none reverse',
          },
        })
        .to(section4_panel2_box4.current, { backgroundColor: '#847552' }, '<=')
        .to(
          section4_panel2_box4_dot.current,
          { opacity: 1, backgroundColor: '#847552', scale: 50 },
          '<=',
        )
        .to(section4_sticky_panel3.current, { opacity: 0 }, '<=')
        .to(section4_sticky_panel4.current, { opacity: 1 }, '<=')
        .to(
          [
            section4_panel2_box1.current,
            section4_panel2_box2.current,
            section4_panel2_box3.current,
            section4_panel2_box5.current,
            section4_panel2_box6.current,
          ],
          { backgroundColor: '#D0BD8F' },
          '<=',
        );

      // // Box 5 Animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section4.current,
            start: (self) => self.previous().end,
            end: '+=1000px',
            pin: section4.current,
            toggleActions: 'play none none reverse',
          },
        })
        .to(section4_panel2_box5.current, { backgroundColor: '#AF4A40' }, '<=')
        .to(
          section4_panel2_box5_dot.current,
          { opacity: 1, backgroundColor: '#AF4A40', scale: 50 },
          '<=',
        )
        .to(section4_sticky_panel4.current, { opacity: 0 }, '<=')
        .to(section4_sticky_panel5.current, { opacity: 1 }, '<=')
        .to(
          [
            section4_panel2_box1.current,
            section4_panel2_box2.current,
            section4_panel2_box3.current,
            section4_panel2_box4.current,
            section4_panel2_box6.current,
          ],
          { backgroundColor: '#F38176' },
          '<=',
        );

      // // Box 6 Animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section4.current,
            start: (self) => self.previous().end,
            end: '+=1000px',
            pin: section4.current,
            toggleActions: 'play none none reverse',
            // scrub: true,
            // snap: {
            //   snapTo: 1,
            //   duration: 0.7,
            //   delay: 0,
            // },
          },
        })
        .to(section4_panel2_box6.current, { backgroundColor: '#663B40' }, '<=')
        .to(
          section4_panel2_box6_dot.current,
          { opacity: 1, backgroundColor: '#663B40', scale: 50 },
          '<=',
        )
        .to(section4_sticky_panel5.current, { opacity: 0 }, '<=')
        .to(section4_sticky_panel6.current, { opacity: 1 }, '<=')
        .to(
          [
            section4_panel2_box1.current,
            section4_panel2_box2.current,
            section4_panel2_box3.current,
            section4_panel2_box4.current,
            section4_panel2_box5.current,
          ],
          { backgroundColor: '#CB878F' },
          '<=',
        );

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
        <div
          ref={section1}
          className="relative pb-[14vw]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(180deg, #8A5DD2 7.93%, #250A60 100%)',
          }}
        >
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            width="100%"
            className="absolute -top-[10%]"
          >
            <source src="/videos/dna-bg.mp4" type="video/mp4" />
          </video> */}
          <div
            ref={section1_panel1}
            className="panel flex items-center py-[10vw]"
          >
            <div className="mx-auto flex-1 px-[10%]">
              <div className="relative mb-[6vw] flex items-center">
                <div className="relative z-[1] w-3/4">
                  <h1
                    ref={section1_panel1_elm1}
                    className="max-w-[46vw] text-[clamp(2rem,4.65vw,12rem)] leading-none text-purple-100"
                  >
                    Discovering the Keys to a Healthy Lifespan
                  </h1>
                  <div
                    ref={section1_panel1_elm2}
                    className="mt-[2.5vw] max-w-[40vw] text-[clamp(1rem,1.6vw,4rem)] leading-snug text-purple-100"
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
                    className="mt-[8vw] flex max-w-[50vw] items-center justify-between text-[clamp(.8rem,1.05vw,3rem)] text-white"
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
                  className="absolute -top-[5vw] right-[3vw] flex max-w-[44%] items-center justify-center"
                >
                  <div
                    ref={section1_panel1_elm4_circle}
                    className="absolute right-[-2vw] flex h-[calc(100%+4vw)] w-[calc(100%+4vw)] text-transparent"
                  >
                    <div className="svg_icon h-full w-full">
                      <BorderPurplePrimary />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full shadow-[inset_0px_0px_7px_rgba(0,0,0,0.7)]">
                    <Image
                      src="/images/banner-dog.jpg"
                      alt="Dog in a field"
                      width={584 * 2}
                      height={584 * 2}
                    />
                  </div>
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
            className="panel w-full pb-[20vw] pt-[10vw]"
          >
            <div className="relative flex gap-[2vw] px-[5%]">
              <div
                ref={section1_panel2_elm1}
                className="flex-1 rounded-[2vw] p-[2.5vw]"
                style={{
                  background:
                    'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(80, 0, 0, 0) -3.98%, rgba(80, 0, 0, 0.364) 50.53%, rgba(80, 0, 0, 0) 108.56%)',
                  backgroundBlendMode: 'overlay, normal, normal',
                  boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(20px)',
                  // backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <h3 className="text-[clamp(2rem,3.5vw,12rem)] leading-none text-white">
                  Partner With Us
                </h3>
                <div className="mb-[4vw] mt-[1.2vw] text-[clamp(1rem,1.1vw,4rem)] leading-snug text-purple-light">
                  The Dog Aging Project is an innovative initiative that brings
                  together a community of dogs, owners, veterinarians,
                  researchers, and volunteers to carry out the most ambitious
                  canine health study in the world. We invite you to partner
                  with us and help future generations of dogs live the best
                  lives possible!
                </div>
                <Link
                  href="#"
                  className="inline-block rounded-full bg-[#500000] px-[1.8vw] py-[1.1vw] text-[clamp(1rem,1.1vw,4rem)] font-bold leading-none text-white shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.6)] transition hover:bg-black hover:text-white"
                  style={{}}
                >
                  Enroll Your Dog
                </Link>
              </div>
              <div
                ref={section1_panel2_elm2}
                className="relative flex flex-1 items-center justify-center overflow-hidden rounded-[2vw] bg-white bg-cover bg-center bg-no-repeat p-[2.5vw]"
                style={{ backgroundImage: 'url(/images/dog-play.jpg)' }}
              >
                <div className="absolute inset-0 h-full w-full bg-white bg-opacity-50" />
                <button
                  type="button"
                  className="relative"
                  onClick={() => setOpenVideoPopup(true)}
                >
                  <PlayIcon />
                </button>
              </div>
            </div>
          </div>
          <VideoPopup
            isOpen={openVideoPopup}
            onClose={() => setOpenVideoPopup(false)}
          />

          <div ref={section1_panel3} className="panel">
            <div className="mx-auto flex flex-1 items-start px-[5%]">
              <div ref={section1_panel3_elm1} className="w-[36%]">
                <div>
                  <h2
                    ref={section1_panel3_elm2}
                    className="max-w-[46vw] text-[clamp(2rem,4.65vw,12rem)] leading-none text-white"
                  >
                    Meet The Pack
                  </h2>
                  <div
                    ref={section1_panel3_elm3}
                    className="mb-[3vw] mt-[1vw] max-w-[40vw] text-[clamp(1rem,1.25vw,3rem)] leading-snug text-white"
                  >
                    <p className="mb-[1vw]">
                      We welcome ALL dogs—young and old, mixed breed and
                      purebred, healthy and those with chronic illness—from all
                      fifty US states.
                    </p>
                    <p>
                      The only requirement is that you have a good estimate of
                      your dog’s age. If you and your furry best friend are
                      interested in joining the Pack, start the process by
                      clicking the button below.
                    </p>
                  </div>
                  <Link
                    ref={section1_panel3_elm4}
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
                      <div
                        key={dog.id}
                        data-speed={dogSpeed}
                        className={cssClass}
                      >
                        <div className="h-[14vw] w-full ">
                          <img
                            src={`/images/dogs/dog-${i + 1}-min.jpg`}
                            alt={`Dog-${i}`}
                            className="object-fit h-full w-full"
                          />
                          {/* <Image
                            src={`/images/dogs/dog-${i + 1}-min.jpg`}
                            alt={`Dog-${i}`}
                            width={400}
                            height={400}
                          /> */}
                        </div>
                        <div
                          className="rounded-bl-[1.5vw] rounded-br-[1.5vw] p-[1.5vw] text-purple-secondary backdrop-blur"
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

        <div
          ref={section3}
          className="relative -mt-[5vw] overflow-hidden rounded-tl-[5vw] rounded-tr-[5vw]"
        >
          <div
            ref={section3_panel1_elm1}
            className="absolute min-h-screen w-full"
          >
            <img
              src="/images/dap-section-3-bg.jpeg"
              alt="Section 3"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            ref={section3_panel1}
            className="panel relative px-[5%] py-[10vw]"
          >
            <h2
              ref={section3_panel1_elm2}
              className="max-w-[32vw] text-[clamp(2rem,6vw,12rem)] leading-none text-white"
            >
              Become a community scientist
            </h2>

            <div
              ref={section3_panel1_elm3}
              className="mt-[8vw] max-w-[40vw] rounded-[2vw] p-[2vw] leading-snug text-white"
              style={{
                background:
                  'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, #500000 -3.98%, rgba(80, 0, 0, 0) 108.56%)',
                backgroundBlendMode: 'overlay, normal, normal',
                boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <h4 className="mb-[1vw] text-[clamp(2rem,2vw,5rem)] uppercase">
                General Requirements
              </h4>
              <p className="mb-[1.5vw] text-[clamp(1rem,1.25vw,3rem)] leading-snug text-purple-light">
                The Dog Aging Project is a community science project. This means
                that we rely on our participating dog owners and their primary
                care veterinarians to provide the information that fuels our
                scientific research.
              </p>
              <p className="text-[clamp(1rem,1.25vw,3rem)] leading-snug text-purple-light">
                We’ll ask you to tell us about your dog’s health, behavior,
                environment, and physical activity on an annual basis. A study
                of this magnitude would be impossible without the help of dog
                lovers around the US. Our participants truly are the heart and
                soul of the Dog Aging Project!
              </p>
            </div>

            <div
              ref={section3_panel1_elm4}
              className="ml-auto mt-[8vw] max-w-[30vw] rounded-[2vw] p-[2vw] leading-snug text-white"
              style={{
                background:
                  'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, #500000 -3.98%, rgba(80, 0, 0, 0) 108.56%)',
                backgroundBlendMode: 'overlay, normal, normal',
                boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <p className="text-[clamp(1rem,1.1vw,2.5rem)] leading-snug text-purple-light">
                Everyone whose dog is a member of the Pack is invited to join
                the Dog Park, a private, online community where dog owners can
                interact with other participants, join clubs, post cute dog
                pics, attend monthly Pack Appreciation Events, and have insider
                access to our research team.
              </p>
            </div>

            <div
              ref={section3_panel1_elm5}
              className="mt-[8vw] h-[1000px] w-full rounded-[2vw] p-[2vw] leading-snug text-white"
              style={{
                background:
                  'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, #500000 -3.98%, rgba(80, 0, 0, 0) 108.56%)',
                backgroundBlendMode: 'overlay, normal, normal',
                boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <h4 className="mb-[1vw] text-[clamp(2rem,2vw,5rem)] uppercase">
                What to Expect
              </h4>

              <p className="text-[clamp(1rem,1.1vw,2.5rem)] leading-snug text-purple-light">
                Everyone whose dog is a member of the Pack is invited to join
                the Dog Park, a private, online community where dog owners can
                interact with other participants, join clubs, post cute dog
                pics, attend monthly Pack Appreciation Events, and have insider
                access to our research team.
              </p>
            </div>

            <div
              className="mt-[8vw] max-w-[30vw] rounded-[2vw] p-[2vw] leading-snug text-white"
              style={{
                background:
                  'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, #500000 -3.98%, rgba(80, 0, 0, 0) 108.56%)',
                backgroundBlendMode: 'overlay, normal, normal',
                boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <p className="text-[clamp(1rem,1.1vw,2.5rem)] leading-snug text-purple-light">
                Everyone whose dog is a member of the Pack is invited to join
                the Dog Park, a private, online community where dog owners can
                interact with other participants, join clubs, post cute dog
                pics, attend monthly Pack Appreciation Events, and have insider
                access to our research team.
              </p>
            </div>
          </div>
        </div>

        <div ref={section4} className="relative overflow-hidden">
          <div ref={section4_sticky_panels} className="relative h-screen">
            <div
              ref={section4_sticky_panel1}
              className="absolute left-0 top-0 z-[3] h-full w-full py-[10vh] opacity-0"
            >
              <div className="flex items-center">
                <div className="w-1/2 text-center">
                  <img
                    src="/images/dogs/canine-health.png"
                    alt="canine-health"
                    className="mx-auto"
                  />
                </div>
                <div className="w-1/2">
                  <div className="max-w-[40vw] text-purple-200">
                    <h4 className="mb-[2vw] text-[clamp(3rem,3.15vw,6rem)] uppercase">
                      CANINE HEALTH
                    </h4>
                    <p className="mb-[1.3vw] max-w-[35vw] text-[clamp(1rem,1.1vw,2.5rem)] leading-snug">
                      Our team collects comprehensive health and diet data via
                      owner-reported surveys, veterinary medical records, and
                      frailty assessments.
                    </p>
                    <p className="max-w-[35vw] text-[clamp(1rem,1.1vw,2.5rem)] leading-snug">
                      For members of the Precision and TRIAD Cohorts, we partner
                      with primary care and speciality veterinarians to collect
                      biological samples for detailed biochemical analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={section4_sticky_panel2}
              className="absolute left-0 top-0 z-[3] h-full w-full py-[10vh] opacity-0"
            >
              <div className="flex items-center">
                <div className="w-1/2 text-center">
                  <img
                    src="/images/dogs/canine-genetics.png"
                    alt="canine-health"
                    className="mx-auto"
                  />
                </div>
                <div className="w-1/2">
                  <div className="max-w-[40vw] text-purple-200">
                    <h4 className="mb-[2vw] text-[clamp(3rem,3.15vw,6rem)] uppercase">
                      CANINE GENETICS
                    </h4>
                    <p className="mb-[1.3vw] max-w-[35vw] text-[clamp(1rem,1.1vw,2.5rem)] leading-snug">
                      Participants in the Foundation, Precision, and TRIAD
                      cohorts, receive a free DNA Kit with which to collect a
                      cheek swab sample for use in low-pass sequencing.
                    </p>
                    <p className="max-w-[35vw] text-[clamp(1rem,1.1vw,2.5rem)] leading-snug">
                      Genome sequence data are integrated with health measures
                      and age-related physiological and behavioral traits to
                      carry out comprehensive genome-wide association studies of
                      common diseases, frailty, and co-morbidity associated with
                      age.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={section4_sticky_panel3}
              className="absolute left-0 top-0 z-[3] h-full w-full py-[10vh] opacity-0"
            >
              <div className="flex items-center">
                <div className="w-1/2 text-center">
                  <img
                    src="/images/dogs/environmental-effects.png"
                    alt="canine-health"
                    className="mx-auto"
                  />
                </div>
                <div className="w-1/2">
                  <div className="max-w-[40vw] text-purple-200">
                    <h4 className="mb-[2vw] text-[clamp(3rem,3.15vw,6rem)] uppercase">
                      ENVIRONMENTAL EFFECTS
                    </h4>
                    <p className="mb-[1.3vw] max-w-[35vw] text-[clamp(1rem,1.1vw,2.5rem)] leading-snug">
                      Dogs share our environment. They live with us. They often
                      sleep with us. Sometimes they even share our food.
                      Environmental exposures can have a profound impact on
                      health.
                    </p>
                    <p className="max-w-[35vw] text-[clamp(1rem,1.1vw,2.5rem)] leading-snug">
                      In addition to owner-reported information about each dog’s
                      home and yard, our team compiles extensive environmental
                      data geolocated by zip code for each participant. For
                      smaller cohorts, we conduct physical sampling from the
                      home environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={section4_sticky_panel4}
              className="absolute left-0 top-0 z-[3] h-full w-full py-[10vh] opacity-0"
            >
              <div className="flex items-center">
                <div className="w-1/2 text-center">
                  <img
                    src="/images/dogs/canine-life-style.png"
                    alt="canine-health"
                    className="mx-auto"
                  />
                </div>
                <div className="w-1/2">
                  <div className="max-w-[40vw] text-purple-200">
                    <h4 className="mb-[2vw] text-[clamp(3rem,3.15vw,6rem)] uppercase">
                      CANINE LIFESTYLE
                    </h4>
                    <p className="max-w-[35vw] text-[clamp(1rem,1.1vw,2.5rem)] leading-snug">
                      The Pack contains dogs from all walks of life, including
                      companion dogs, working dogs, and dogs who participate in
                      many different activities like nosework or agility. We use
                      owner-reported information to understand how different
                      canine lifestyles are related to health and aging.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={section4_sticky_panel5}
              className="absolute left-0 top-0 z-[3] h-full w-full py-[10vh] opacity-0"
            >
              <div className="flex items-center">
                <div className="w-1/2 text-center">
                  <img
                    src="/images/dogs/brain-health.png"
                    alt="canine-health"
                    className="mx-auto"
                  />
                </div>
                <div className="w-1/2">
                  <div className="max-w-[40vw] text-purple-200">
                    <h4 className="mb-[2vw] text-[clamp(3rem,3.15vw,6rem)] uppercase">
                      BRAIN HEALTH
                    </h4>
                    <p className="max-w-[35vw] text-[clamp(1rem,1.1vw,2.5rem)] leading-snug">
                      Aging dogs sometimes experience canine cognitive decline,
                      a condition that is analogous to Alzheimer’s disease in
                      humans. We’ve designed a comprehensive program to study
                      all phases of cognitive development, health, and disease
                      through surveys, interactive games that owners play with
                      their dogs, and even an opportunity for interested
                      participants to donate their dog’s body to science at the
                      end of their natural lifespan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={section4_sticky_panel6}
              className="absolute left-0 top-0 z-[3] h-full w-full py-[10vh] opacity-0"
            >
              <div className="flex items-center">
                <div className="w-1/2 text-center">
                  <img
                    src="/images/dogs/canine-activity.png"
                    alt="canine-genetics"
                    className="mx-auto"
                  />
                </div>
                <div className="w-1/2">
                  <div className="max-w-[40vw] text-purple-200">
                    <h4 className="mb-[2vw] text-[clamp(3rem,3.15vw,6rem)] uppercase">
                      CANINE ACTIVITY
                    </h4>
                    <p className="max-w-[35vw] text-[clamp(1rem,1.1vw,2.5rem)] leading-snug">
                      Our research is already demonstrating links between
                      activity levels and various health measures. We quantify
                      activity levels through surveys, at-home mobility
                      activities that owners complete with their dogs, and with
                      collar-mounted actigraphs that collect high granularity
                      data on movement in three dimensions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={section4_sticky_panel7}
              className="absolute left-0 top-0 z-[-1] h-full w-full bg-[#6543A5] py-[10vh]"
            >
              <div className="mx-auto max-w-[70%]">
                <div className="max-w-[40vw] text-purple-200">
                  <h4 className="text-[clamp(3rem,3.15vw,6rem)] uppercase">
                    Accelerating Scientific Discovery & Innovation for Dogs and
                    Humans
                  </h4>
                  <p className="mb-[2vw] mt-[3vw] text-[clamp(1rem,1.6vw,2.5rem)] uppercase leading-snug">
                    Our Research Goals
                  </p>
                  <p className="max-w-[35vw] text-[clamp(1rem,1.1vw,2.5rem)] leading-snug">
                    The goal of the Dog Aging Project is to understand how
                    genes, lifestyle, and environment influence health and
                    aging. Our research program is designed to collect—and
                    connect—critical data in six scientific domains: health,
                    genetics, environment, lifestyle, cognition, and activity.
                    We use innovative approaches and cutting-edge technologies
                    to assemble, analyze, and share high quality canine health
                    data with the scientific community and the public.
                  </p>
                </div>
                <div className="ml-auto mt-[3vw] max-w-[35vw] text-[clamp(.9rem,.7vw,2rem)] leading-snug text-purple-200">
                  From within the Dog Aging Project Pack, we enroll subsets of
                  dogs into cohorts based on specific scientific criteria. These
                  cohorts include Foundation, a genomics study; Precision, a
                  biochemical study; and the Test of Rapamycin in Aging Dogs
                  (TRIAD), a double-blind, placebo-controlled clinical trial.
                </div>
              </div>
            </div>
          </div>
          <div
            ref={section4_panel2}
            className="absolute bottom-[1vw] left-0 z-[2] mt-[5vw] w-full px-[10%]"
          >
            <div className="flex gap-[1vw]">
              <div className="relative w-1/6">
                <div
                  ref={section4_panel2_box1_dot}
                  className="dot absolute right-0 top-0 h-[100px] w-[100px] rounded-full"
                />
                <div
                  ref={section4_panel2_box1}
                  className="box relative z-[2] flex aspect-square items-center justify-center rounded-[1vw] bg-[#B894FF] px-[1vw] py-[1vw] text-center uppercase text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.3)]"
                >
                  <div className="relative w-full">
                    <p className="mb-[1vw] text-[1.3vw] leading-none">Health</p>
                    <p className="inline-block rounded-full border border-white px-4 py-1 text-xs">
                      explore
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-1/6">
                <div
                  ref={section4_panel2_box2_dot}
                  className="dot absolute right-0 top-0 h-[100px] w-[100px] rounded-full"
                />
                <div
                  ref={section4_panel2_box2}
                  className="box relative z-[2] flex aspect-square items-center justify-center rounded-[1vw] bg-[#B894FF] px-[1vw] py-[1vw] text-center uppercase text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.3)]"
                >
                  <div className="relative w-full">
                    <p className="mb-[1vw] text-[1.3vw] leading-none">
                      Genetics
                    </p>
                    <p className="inline-block rounded-full border border-white px-4 py-1 text-xs">
                      explore
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-1/6">
                <div
                  ref={section4_panel2_box3_dot}
                  className="dot absolute right-0 top-0 h-[100px] w-[100px] rounded-full"
                />
                <div
                  ref={section4_panel2_box3}
                  className="box relative z-[2] flex aspect-square items-center justify-center rounded-[1vw] bg-[#B894FF] px-[1vw] py-[1vw] text-center uppercase text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.3)]"
                >
                  <div className="relative w-full">
                    <p className="mb-[1vw] text-[1.3vw] leading-none">
                      Environment
                    </p>
                    <p className="inline-block rounded-full border border-white px-4 py-1 text-xs">
                      explore
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-1/6">
                <div
                  ref={section4_panel2_box4_dot}
                  className="dot absolute right-0 top-0 h-[100px] w-[100px] rounded-full"
                />
                <div
                  ref={section4_panel2_box4}
                  className="box relative z-[2] flex aspect-square items-center justify-center rounded-[1vw] bg-[#B894FF] px-[1vw] py-[1vw] text-center uppercase text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.3)]"
                >
                  <div className="relative w-full">
                    <p className="mb-[1vw] text-[1.3vw] leading-none">
                      Lifestyle
                    </p>
                    <p className="inline-block rounded-full border border-white px-4 py-1 text-xs">
                      explore
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-1/6">
                <div
                  ref={section4_panel2_box5_dot}
                  className="dot absolute right-0 top-0 h-[100px] w-[100px] rounded-full"
                />
                <div
                  ref={section4_panel2_box5}
                  className="box relative z-[2] flex aspect-square items-center justify-center rounded-[1vw] bg-[#B894FF] px-[1vw] py-[1vw] text-center uppercase text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.3)]"
                >
                  <div className="relative w-full">
                    <p className="mb-[1vw] text-[1.3vw] leading-none">
                      Cognition
                    </p>
                    <p className="inline-block rounded-full border border-white px-4 py-1 text-xs">
                      explore
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-1/6">
                <div
                  ref={section4_panel2_box6_dot}
                  className="dot absolute right-0 top-0 h-[100px] w-[100px] rounded-full"
                />
                <div
                  ref={section4_panel2_box6}
                  className="box relative z-[2] flex aspect-square items-center justify-center rounded-[1vw] bg-[#B894FF] px-[1vw] py-[1vw] text-center uppercase text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.3)]"
                >
                  <div className="relative w-full">
                    <p className="mb-[1vw] text-[1.3vw] leading-none">
                      Activity
                    </p>
                    <p className="inline-block rounded-full border border-white px-3 text-xs">
                      explore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="pb-[10vw] pt-[20vw]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(180deg, #6543A5 5.37%, rgba(100, 66, 164, 0.85) 34.94%, rgba(100, 66, 164, 0.28) 70.41%, rgba(255, 255, 255, 0) 96.74%), #FFFFFF',
            backgroundBlendMode: 'overlay, normal, normal',
          }}
        >
          <div className="relative flex items-center px-[10%]">
            <div className="relative z-[1] w-3/4">
              <h2
                // ref={section1_panel1_elm1}
                className="max-w-[52vw] text-[clamp(2rem,4.45vw,10rem)] leading-tight text-purple-200"
              >
                Enroll your dog now & join this exciting project
              </h2>
              <div
                // ref={section1_panel1_elm2}
                className="mb-[5vw] mt-[2.5vw] max-w-[33vw] text-[clamp(1rem,1.25vw,3rem)] leading-snug text-purple-200"
              >
                <p className="mb-[.7vw]">
                  At the Dog Aging Project, we know how important dogs are for
                  the health and wellbeing of their owners. They give us
                  comfort, joy, and unconditional love. Being a part of this
                  study, gives each and every one of us a chance to enhance the
                  lives of future generations of dogs.
                </p>

                <p>Will you join us?</p>
              </div>
              <Link
                href="#"
                className="inline-block rounded-full bg-white px-[1.7vw] py-[.7vw] font-bold leading-none text-black transition hover:bg-black hover:text-white"
              >
                Enroll Your Dog
              </Link>
            </div>
            <div
              // ref={section1_panel1_elm4}
              data-speed={1.07}
              className="absolute -top-[4vw] right-[7vw] flex max-w-[40%] items-center justify-center"
            >
              <div
                // ref={section1_panel1_elm4_circle}
                className="absolute right-[-2vw] flex h-[calc(100%+4vw)] w-[calc(100%+4vw)] text-transparent"
              >
                <div className="svg_icon h-full w-full">
                  <BorderPurple200 />
                </div>
              </div>
              <div className="overflow-hidden rounded-full shadow-[inset_0px_0px_7px_rgba(0,0,0,0.7)]">
                <Image
                  src="/images/person-with-dog-1.jpg"
                  alt="Dog in a field"
                  width={584 * 2}
                  height={584 * 2}
                />
              </div>
            </div>
            <div
              // ref={section1_panel1_elm4}
              data-speed={1.07}
              className="absolute right-[43vw] top-[25vw] flex max-w-[20%] items-center justify-center"
            >
              <div
                // ref={section1_panel1_elm4_circle}
                className="absolute right-[-2vw] flex h-[calc(100%+4vw)] w-[calc(100%+4vw)] text-transparent"
              >
                <div className="svg_icon h-full w-full">
                  <BorderPurple200Small />
                </div>
              </div>
              <div className="overflow-hidden rounded-full shadow-[inset_0px_0px_7px_rgba(0,0,0,0.7)]">
                <Image
                  src="/images/person-with-dog-2.jpg"
                  alt="Dog in a field"
                  width={584 * 2}
                  height={584 * 2}
                />
              </div>
            </div>
          </div>

          <div className="pt-[25vw]">
            <h2 className="ml-auto mr-[5%] max-w-[50%] text-[clamp(3rem,3.15vw,6rem)] text-purple-primary">
              Our data is already advancing new discoveries
            </h2>
            <div className="flex gap-[2vw] pl-[5%]">
              {[...Array(3)].map((card, index) => (
                <div
                  key={index}
                  className={`skewElem flex h-[400px] flex-1 shrink-0 items-center justify-center rounded-[2vw] bg-white shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)] ${
                    index === 0
                      ? ''
                      : index === 1
                      ? 'mt-[5%]'
                      : '-mr-[20%] mt-[10%]'
                  }`}
                >
                  Some things will be here.
                </div>
              ))}
            </div>
            <div className="-mt-[5%] flex gap-[2vw] pl-[5%]">
              {[...Array(3)].map((card, index) => (
                <div
                  key={index}
                  className={`skewElem flex h-[400px] flex-1 shrink-0 items-center justify-center rounded-[2vw] bg-white shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)] ${
                    index === 0
                      ? ''
                      : index === 1
                      ? 'mt-[5%]'
                      : '-mr-[20%] mt-[10%]'
                  }`}
                >
                  Some things will be here.
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
