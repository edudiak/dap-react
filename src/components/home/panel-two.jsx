import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef, useState } from 'react';

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
                start: isDesktop ? 'top bottom' : 'top bottom',
                end: isDesktop ? 'bottom 90%' : 'bottom 95%',
                scrub: 1,
              },
            })
            .fromTo(
              elm_1.current,
              { opacity: 0 },
              {
                y: 0,
                opacity: 1,
              },
              '<=',
            )
            .fromTo(elm_2.current, { opacity: 0 }, { y: 0, opacity: 1 }, '<=');
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
          className="absolute -top-[10%] left-0 w-full md:-top-1/4 lg:-top-[90%]"
        >
          <source src="/videos/dna-video.webm" type="video/webm" />
          <source src="/videos/dna-video.mp4" type='video/mp4; codecs="hvc1"' />
        </video>
        <div
          ref={elm_1}
          className="will-change-opacity flex w-full will-change-transform lg:flex-1"
        >
          <div
            className="flex w-full items-center rounded-3xl p-6 lg:rounded-[4rem] lg:p-[5.33rem]"
            style={{
              background:
                'url(/images/dap-bg-noise-20.png) repeat, linear-gradient(228deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(132deg, rgba(80, 0, 0, 0.42) 0%, rgba(80, 0, 0, 0.36) 48.44%, rgba(80, 0, 0, 0.00) 100%)',
              backgroundBlendMode: 'overlay, normal, normal',
              boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(15px)',
            }}
          >
            <div>
              <h3 className="text-3xl leading-none -tracking-[2px] text-white md:text-4xl lg:text-[8rem] lg:leading-none lg:-tracking-[0.267rem]">
                Partner With Us
              </h3>
              <div className="my-5 text-lg leading-snug text-[#FFF2F2] md:text-xl lg:mb-[5.333rem] lg:mt-[2.667rem] lg:text-[2.4rem] lg:leading-normal">
                The Dog Aging Project is an innovative initiative that brings
                together a community of dogs, owners, veterinarians,
                researchers, and volunteers to carry out the most ambitious
                canine health study in the world. We invite you to partner with
                us and help future generations of dogs live the best lives
                possible!
              </div>
              <a
                href="https://portal.dogagingproject.org/nomination"
                className="inline-block rounded-full bg-[#790F0F] px-6 py-4 font-bold leading-none text-white shadow-[0px_0px_15px_5px_rgba(0,0,0,0.60)_inset] transition hover:bg-[#FFDADA] hover:text-[#A22727] hover:shadow-none lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
              >
                Enroll Your Dog
              </a>
            </div>
          </div>
        </div>
        <div
          ref={elm_2}
          className="will-change-opacity will-change-opacity lg:flex-1"
        >
          <div
            className="relative flex w-full items-center justify-center overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.54)] bg-cover bg-center bg-no-repeat p-6 lg:rounded-[4rem] lg:p-[5.33rem]"
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
      </div>
      <VideoPopup
        isOpen={openVideoPopup}
        onClose={() => setOpenVideoPopup(false)}
      />
    </>
  );
}
