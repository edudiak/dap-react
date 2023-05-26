/* eslint @next/next/no-img-element: "off" */
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomePanelFour() {
  const panel = useRef(null);
  const panel_bg = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: panel.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: panel_bg.current,
        },
      });
      // .fromTo(
      //   elm_1.current,
      //   { y: 100, opacity: 0 },
      //   {
      //     y: 0,
      //     opacity: 1,
      //   },
      // )
      // .fromTo(
      //   elm_2.current,
      //   { y: 100, opacity: 0 },
      //   { y: 0, opacity: 1 },
      //   '+=0.1',
      // );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={panel}
      className="relative -mt-[10.667rem] overflow-hidden rounded-tl-[10.667rem] rounded-tr-[10.667rem]"
    >
      <div ref={panel_bg} className="absolute min-h-screen w-full">
        <img
          src="/images/dap-section-3-bg.jpeg"
          alt="Section 3"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="panel relative px-[5%] py-[21.333rem]">
        <h2 className="max-w-[60rem] text-[10.667rem] leading-none text-white">
          Become a community scientist
        </h2>

        <div
          className="mt-[18rem] max-w-[88rem] rounded-[4rem] p-[5.333rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, #500000 -3.98%, rgba(80, 0, 0, 0) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <h4 className="mb-[3rem] text-[4.5rem] uppercase text-[#FFF2F2]">
            General Requirements
          </h4>
          <div className="text-[2.8rem] leading-snug text-[#FFDADA]">
            <p className="mb-[2.5rem]">
              The Dog Aging Project is a community science project. This means
              that we rely on our participating dog owners and their primary
              care veterinarians to provide the information that fuels our
              scientific research.
            </p>
            <p>
              We’ll ask you to tell us about your dog’s health, behavior,
              environment, and physical activity on an annual basis. A study of
              this magnitude would be impossible without the help of dog lovers
              around the US. Our participants truly are the heart and soul of
              the Dog Aging Project!
            </p>
          </div>
        </div>

        <div
          className="ml-auto mt-[18rem] max-w-[56rem] rounded-[4rem] p-[5.333rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, #500000 -3.98%, rgba(80, 0, 0, 0) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <p className="text-[2.4rem] leading-snug text-[#FFDADA]">
            Everyone whose dog is a member of the Pack is invited to join the
            Dog Park, a private, online community where dog owners can interact
            with other participants, join clubs, post cute dog pics, attend
            monthly Pack Appreciation Events, and have insider access to our
            research team.
          </p>
        </div>

        <div
          className="mt-[18rem] w-full rounded-[4rem] p-[5.333rem] pr-[2.667rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, #500000 -3.98%, rgba(80, 0, 0, 0) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex">
            <div className="w-[60%]">
              <h4 className="mb-[3rem] text-[4.5rem] uppercase text-[#FFF2F2]">
                What to Expect
              </h4>

              <ul className="flex list-none flex-col gap-y-[5rem] text-[3.6rem] leading-snug text-[#FFDADA]">
                <li className="flex pr-[8rem]">
                  <span className="mr-[4rem] flex h-[4.933rem] w-[4.933rem] shrink-0 items-center justify-center rounded-full bg-[#F37676] text-[2.667rem] font-bold text-[#500000]">
                    1
                  </span>
                  <div className="relative">
                    Enroll your dog by completing a short survey
                    <span className="absolute -right-[6rem] -top-[1.7rem] shrink-0 text-[1.867rem] text-[#FFABAB]">
                      5 MIN
                    </span>
                  </div>
                </li>
                <li className="flex pr-[8rem]">
                  <span className="mr-[4rem] flex h-[4.933rem] w-[4.933rem] shrink-0 items-center justify-center rounded-full bg-[#F37676] text-[2.667rem] font-bold text-[#500000]">
                    2
                  </span>
                  <div className="relative">
                    Set up your personal research portal
                    <span className="absolute -right-[6rem] -top-[1.7rem] shrink-0 text-[1.867rem] text-[#FFABAB]">
                      5 MIN
                    </span>
                  </div>
                </li>
                <li className="flex pr-[8rem]">
                  <span className="mr-[4rem] flex h-[4.933rem] w-[4.933rem] shrink-0 items-center justify-center rounded-full bg-[#F37676] text-[2.667rem] font-bold text-[#500000]">
                    3
                  </span>
                  <div className="relative">
                    Complete the Health and Life Experience Survey
                    <span className="absolute -right-[6rem] -top-[1.7rem] shrink-0 text-[1.867rem] text-[#FFABAB]">
                      60-90 min
                    </span>
                  </div>
                </li>
                <li className="flex pr-[8rem]">
                  <span className="mr-[4rem] flex h-[4.933rem] w-[4.933rem] shrink-0 items-center justify-center rounded-full bg-[#F37676] text-[2.667rem] font-bold text-[#500000]">
                    4
                  </span>
                  <div className="relative">
                    Express your interest in additional studies like our
                    genetics research or clinical trial
                    <span className="absolute -right-[6rem] -top-[1.7rem] shrink-0 text-[1.867rem] text-[#FFABAB]">
                      Optional
                    </span>
                  </div>
                </li>
                <li className="flex pr-[8rem]">
                  <span className="mr-[4rem] flex h-[4.933rem] w-[4.933rem] shrink-0 items-center justify-center rounded-full bg-[#F37676] text-[2.667rem] font-bold text-[#500000]">
                    5
                  </span>
                  <div className="relative">
                    Upload your dog’s veterinary medical records to qualify for
                    additional studies
                    <span className="absolute -right-[6rem] -top-[1.7rem] shrink-0 text-[1.867rem] text-[#FFABAB]">
                      Optional
                    </span>
                  </div>
                </li>
                <li className="flex pr-[8rem]">
                  <span className="mr-[4rem] flex h-[4.933rem] w-[4.933rem] shrink-0 items-center justify-center rounded-full bg-[#F37676] text-[2.667rem] font-bold text-[#500000]">
                    6
                  </span>
                  <div className="relative">
                    Complete other surveys throughout the year about behavior,
                    physical activity, and more
                    <span className="absolute -right-[6rem] -top-[1.7rem] shrink-0 text-[1.867rem] text-[#FFABAB]">
                      10-30 min
                    </span>
                  </div>
                </li>
                <li className="flex pr-[8rem]">
                  <span className="mr-[4rem] flex h-[4.933rem] w-[4.933rem] shrink-0 items-center justify-center rounded-full bg-[#F37676] text-[2.667rem] font-bold text-[#500000]">
                    7
                  </span>
                  <div className="relative">
                    Update your dog’s health & lifestyle info annually
                    <span className="absolute -right-[6rem] -top-[1.7rem] shrink-0 text-[1.867rem] text-[#FFABAB]">
                      30-45 min
                    </span>
                  </div>
                </li>
                <li className="flex pr-[8rem]">
                  <span className="mr-[4rem] flex h-[4.933rem] w-[4.933rem] shrink-0 items-center justify-center rounded-full bg-[#F37676] text-[2.667rem] font-bold text-[#500000]">
                    8
                  </span>
                  <div className="relative">
                    Connect with other participants on the Dog Park for fun and
                    community
                    <span className="absolute -right-[6rem] -top-[1.7rem] shrink-0 text-[1.867rem] text-[#FFABAB]">
                      your choice
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-[40%]">
              <div className="max-w-[80%]" data-speed={1.075}>
                <img src="/images/dogs/frame-1.png" alt="frame-1" />
              </div>
              <div
                className="relative -mt-[20%] ml-auto max-w-[80%]"
                data-speed={1}
              >
                <img src="/images/dogs/frame-2.png" alt="frame-2" />
              </div>
              <div className="-mt-[20%] max-w-[80%]" data-speed={1.08}>
                <img src="/images/dogs/frame-3.png" alt="frame-3" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-[18rem] max-w-[52rem] rounded-[4rem] p-[5.333rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, #500000 -3.98%, rgba(80, 0, 0, 0) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <p className="text-[2.8rem] leading-snug text-[#FFDADA]">
            Once you’ve completed the Health and Life Experience Survey, your
            dog will be an official member of the Dog Aging Project Pack!
          </p>
        </div>
      </div>
    </div>
  );
}
