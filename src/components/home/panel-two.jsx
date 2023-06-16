import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

import VideoPopup from '../video-popup';

import PlayIcon from '@assets/images/icons/play-video.svg';

gsap.registerPlugin(ScrollTrigger);

export default function HomePanelTwo() {
  const [openVideoPopup, setOpenVideoPopup] = useState(false);

  const panel = useRef(null);
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
          isMobile: '(max-width: 767px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;

          gsap
            .timeline({
              scrollTrigger: {
                trigger: panel.current,
                start: isDesktop ? 'top 85%' : 'top bottom',
                end: isDesktop ? 'bottom 70%' : 'bottom 80%',
                scrub: 1,
              },
            })
            .fromTo(
              elm_1.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
              },
              '<=',
            )
            .fromTo(
              elm_2.current,
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1 },
              '<=',
            );
        },
      );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={panel}
        className="panel relative mb-[25%] flex w-full flex-wrap gap-y-5 px-5 lg:flex-nowrap lg:gap-[4rem] lg:px-[4%]"
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          className="absolute -top-[10%] left-0 w-full md:-top-1/4 lg:-top-2/3"
        >
          <source src="/videos/dna-video.webm" type="video/webm" />
          <source src="/videos/dna-video.mp4" type="video/mp4" />
        </video>
        <div
          ref={elm_1}
          className="flex w-full items-center rounded-3xl p-6 lg:flex-1 lg:rounded-[4rem] lg:p-[5.33rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(80, 0, 0, 0) -3.98%, rgba(80, 0, 0, 0.364) 50.53%, rgba(80, 0, 0, 0) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div>
            <h3 className="text-3xl leading-none text-white md:text-4xl lg:text-[8rem] lg:leading-none">
              Partner With Us
            </h3>
            <div className="my-5 text-lg leading-snug text-[#FFDADA] md:text-xl lg:mb-[6.5rem] lg:mt-[2.5rem] lg:text-[2.4rem] lg:leading-snug">
              The Dog Aging Project is an innovative initiative that brings
              together a community of dogs, owners, veterinarians, researchers,
              and volunteers to carry out the most ambitious canine health study
              in the world. We invite you to partner with us and help future
              generations of dogs live the best lives possible!
            </div>
            <Link
              href="#"
              className="inline-block rounded-full bg-[#500000] px-6 py-4 font-bold leading-none text-white shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.6)] transition hover:bg-black hover:text-white lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
              style={{}}
            >
              Enroll Your Dog
            </Link>
          </div>
        </div>
        <div
          ref={elm_2}
          className="relative flex w-full items-center justify-center overflow-hidden rounded-3xl bg-white bg-cover bg-center bg-no-repeat p-6 lg:flex-1 lg:rounded-[4rem] lg:p-[5.33rem]"
          style={{ backgroundImage: 'url(/images/dog-play.jpg)' }}
        >
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-white bg-opacity-50"
            onClick={() => setOpenVideoPopup(true)}
          >
            <span className="invisible opacity-0">Open Video Popup</span>
          </button>
          <div className="pointer-events-none relative w-60 lg:w-[42rem]">
            <PlayIcon />
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
