import { gsap } from 'gsap';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

export default function ContactUs() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);
  const elm_4 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .addLabel('section1_Start')
        .fromTo(
          elm_1.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start',
        )
        .fromTo(
          elm_2.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start+=0.1',
        )
        .fromTo(
          elm_3.current,
          { opacity: 0 },
          { opacity: 1 },
          'section1_Start+=0.15',
        )
        .fromTo(
          elm_4.current,
          { opacity: 0 },
          { opacity: 1 },
          'section1_Start+=0.2',
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div
        className="relative px-5 pb-36 pt-36 md:pb-24 lg:px-[4%] lg:pb-[30rem] lg:pt-[8rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png) repeat, url(/images/footer-bg.png) 0 0 / cover no-repeat, #6543A5',
          backgroundBlendMode: 'overlay, normal, normal',
        }}
      >
        <div className="mx-auto w-full">
          <div className="md:pb-18 relative z-[1] flex flex-wrap-reverse items-center px-5 pb-12 text-white lg:flex-nowrap lg:px-0 lg:pb-[13.333rem]">
            <div className="mt-16 w-full md:mt-20 lg:mt-0 lg:w-3/4">
              <h1
                ref={elm_1}
                className="font-plex-mono text-4xl leading-tight md:text-5xl lg:max-w-[92rem] lg:text-[53.333rem] lg:leading-none lg:-tracking-[1.6rem]"
              >
                404
              </h1>
              <div
                ref={elm_2}
                className="mt-3 text-lg leading-snug md:text-xl lg:mt-[2rem] lg:max-w-[67rem] lg:text-[3.6rem] lg:leading-snug"
              >
                Ooops! We must have misplaced a bone. Head back to the main page
                and try digging another hole.
              </div>
              <div ref={elm_4} className="pr-[4%] lg:-ml-[4rem]">
                <Image
                  src="/images/404-pond.png"
                  width={866 * 2}
                  height={220 * 2}
                  priority
                  alt="404"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-[90%] items-center justify-center md:max-w-[70%] lg:absolute lg:right-[2%] lg:top-[8%] lg:mx-0 lg:max-w-[75rem]">
            <div className="relative">
              <div ref={elm_3} className="overflow-hidden rounded-full">
                <Image
                  src="/images/404-dog.png"
                  alt="dog-13"
                  width={900 * 2}
                  height={610 * 2}
                  priority
                  className="overflow-hidden rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
