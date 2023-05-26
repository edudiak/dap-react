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
      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel.current,
            start: 'top 85%',
            end: 'bottom 70%',
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
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={panel}
        className="panel relative mb-[25%] flex w-full gap-[4rem] px-[4%]"
      >
        <div
          ref={elm_1}
          className="flex flex-1 items-center rounded-[4rem] p-[5.33rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(80, 0, 0, 0) -3.98%, rgba(80, 0, 0, 0.364) 50.53%, rgba(80, 0, 0, 0) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div>
            <h3 className="text-[8rem] leading-none text-white">
              Partner With Us
            </h3>
            <div className="mb-[6.5rem] mt-[2.5rem] text-[2.4rem] leading-snug text-[#FFDADA]">
              The Dog Aging Project is an innovative initiative that brings
              together a community of dogs, owners, veterinarians, researchers,
              and volunteers to carry out the most ambitious canine health study
              in the world. We invite you to partner with us and help future
              generations of dogs live the best lives possible!
            </div>
            <Link
              href="#"
              className="inline-block rounded-full bg-[#500000] px-[4rem] py-[2.133rem] text-[2.4rem] font-bold leading-none text-white shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.6)] transition hover:bg-black hover:text-white"
              style={{}}
            >
              Enroll Your Dog
            </Link>
          </div>
        </div>
        <div
          ref={elm_2}
          className="relative flex flex-1 items-center justify-center overflow-hidden rounded-[4rem] bg-white bg-cover bg-center bg-no-repeat p-[5.33rem]"
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
      <VideoPopup
        isOpen={openVideoPopup}
        onClose={() => setOpenVideoPopup(false)}
      />
    </>
  );
}
