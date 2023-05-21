import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

import VideoPopup from '@/components/video-popup';

import ArrowDown from '@assets/images/icons/arrow-down.svg';
import PlayIcon from '@assets/images/icons/play-video.svg';
import BorderPurplePrimary from '@assets/images/icons/border-purple-primary.svg';

export default function HomeSectionOne() {
  const [openVideoPopup, setOpenVideoPopup] = useState(false);

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

  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
            markers: true,
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
    }, section1); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={section1} className="relative bg-purple-primary">
        <video
          autoPlay
          loop
          muted
          playsInline
          width="100%"
          className="absolute -top-[10%]"
        >
          <source src="/videos/dna-bg.mp4" type="video/mp4" />
        </video>
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
                  At the Dog Aging Project, we care deeply about the health and
                  happiness of dogs. Our discoveries about healthy aging in our
                  canine companions will translate into medical advances for
                  people too. We’re working toward a future where dogs, and
                  their humans, can live longer and stay healthier—together!
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

        <div ref={section1_panel2} className="panel w-full pb-[10vw] pt-[10vw]">
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
                canine health study in the world. We invite you to partner with
                us and help future generations of dogs live the best lives
                possible!
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
      </div>

      <VideoPopup
        isOpen={openVideoPopup}
        onClose={() => setOpenVideoPopup(false)}
      />
    </>
  );
}
