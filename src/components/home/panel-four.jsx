import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

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
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={panel}
      className="relative -mt-[30px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] lg:-mt-[5.556vw] lg:rounded-tl-[5.556vw] lg:rounded-tr-[5.556vw]"
    >
      <div ref={panel_bg} className="absolute w-full lg:min-h-screen">
        <img
          src="/images/community-scientist.jpeg"
          alt="Section 3"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="panel relative px-5 py-20 lg:px-[4%] lg:py-[11.111vw]">
        <h2 className="max-w-[300px] text-4xl leading-none -tracking-[3px] text-white lg:max-w-[41.667vw] lg:text-5xl lg:text-[7.292vw] lg:-tracking-[0.219vw]">
          Become a community scientist
        </h2>

        <div
          className="lg:mt-[[9.375vw] mt-12 rounded-[20px] p-5 md:mt-20 lg:max-w-[45.833vw] lg:rounded-[2.083vw] lg:p-[2.778vw]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, #500000 -3.98%, rgba(80, 0, 0, 0) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <h4 className="font-plex-mono mb-3 text-xl font-medium uppercase leading-tight text-[#FFF2F2] md:mb-4 md:text-2xl lg:mb-[2.63.125vw] lg:text-[1.875vw] lg:leading-tight">
            General Requirements
          </h4>
          <div className="leading-snug text-[#FFDADA] md:text-lg lg:text-[1.458vw] lg:leading-snug">
            <p className="mb-4 lg:mb-[1.302vw]">
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
          className="lg:mt-[[9.375vw] ml-auto mt-16 rounded-[20px] p-5 md:mt-32 lg:max-w-[38.194vw] lg:rounded-[2.083vw] lg:p-[2.778vw]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, #500000 -3.98%, rgba(80, 0, 0, 0) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <h4 className="font-plex-mono mb-3 text-xl font-medium uppercase leading-tight text-[#FFF2F2] md:mb-5 md:text-2xl lg:mb-[2.63.125vw] lg:text-[1.875vw] lg:leading-tight">
            Benefits of Community
          </h4>
          <p className="leading-snug text-[#FFDADA] md:text-lg lg:text-[1.458vw] lg:leading-snug">
            Everyone whose dog is a member of the Pack is invited to join the
            Dog Park, a private, online community where dog owners can interact
            with other participants, join clubs, post cute dog pics, attend
            monthly Pack Appreciation Events, and have insider access to our
            research team.
          </p>
        </div>

        <div
          className="lg:mt-[[9.375vw] mt-16 w-full rounded-[20px] p-5 pr-2 md:mt-28 lg:rounded-[2.083vw] lg:p-[2.778vw] lg:pr-[1.389vw]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, #500000 -3.98%, rgba(80, 0, 0, 0) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-[60%]">
              <h4 className="font-plex-mono mb-5 text-xl font-medium uppercase leading-tight text-[#FFF2F2] md:mb-7 md:text-2xl lg:mb-[3.125vw] lg:text-[1.875vw] lg:leading-tight">
                What to Expect
              </h4>

              <ul className="flex list-none flex-col gap-y-3 leading-snug text-[#FFDADA] md:text-lg lg:gap-y-[2.639vw] lg:text-[1.875vw] lg:leading-snug">
                <li className="flex pr-2 md:pr-[4.167vw]">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F37676] font-bold text-[#500000] md:h-7 md:w-7 md:text-lg lg:mr-[2.083vw] lg:h-[2.569vw] lg:w-[2.569vw] lg:text-[1.389vw]">
                    1
                  </span>
                  <div className="relative">
                    Enroll your dog by completing a short survey
                    <span className="absolute -top-3 right-0 shrink-0 text-xs text-[#FFABAB] md:-right-20 md:top-0 md:text-sm lg:-right-[3.125vw] lg:-top-[0.903vw] lg:text-[0.972vw]">
                      5 MIN
                    </span>
                  </div>
                </li>
                <li className="flex pr-2 md:pr-[4.167vw]">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F37676] font-bold text-[#500000] md:h-7 md:w-7 md:text-lg lg:mr-[2.083vw] lg:h-[2.569vw] lg:w-[2.569vw] lg:text-[1.389vw]">
                    2
                  </span>
                  <div className="relative">
                    Set up your personal research portal
                    <span className="absolute -top-3 right-0 shrink-0 text-xs text-[#FFABAB] md:-right-20 md:top-0 md:text-sm lg:-right-[3.125vw] lg:-top-[0.903vw] lg:text-[0.972vw]">
                      5 MIN
                    </span>
                  </div>
                </li>
                <li className="flex pr-2 md:pr-[4.167vw]">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F37676] font-bold text-[#500000] md:h-7 md:w-7 md:text-lg lg:mr-[2.083vw] lg:h-[2.569vw] lg:w-[2.569vw] lg:text-[1.389vw]">
                    3
                  </span>
                  <div className="relative">
                    Complete the Health and Life Experience Survey
                    <span className="absolute -top-3 right-0 shrink-0 text-xs text-[#FFABAB] md:-right-20 md:top-0 md:text-sm lg:-right-[3.125vw] lg:-top-[0.903vw] lg:text-[0.972vw]">
                      60-90 min
                    </span>
                  </div>
                </li>
                <li className="flex pr-2 md:pr-[4.167vw]">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F37676] font-bold text-[#500000] md:h-7 md:w-7 md:text-lg lg:mr-[2.083vw] lg:h-[2.569vw] lg:w-[2.569vw] lg:text-[1.389vw]">
                    4
                  </span>
                  <div className="relative">
                    Express your interest in additional studies like our
                    genetics research or clinical trial
                    <span className="absolute -top-3 right-0 shrink-0 text-xs text-[#FFABAB] md:-right-20 md:top-0 md:text-sm lg:-right-[3.125vw] lg:-top-[0.903vw] lg:text-[0.972vw]">
                      Optional
                    </span>
                  </div>
                </li>
                <li className="flex pr-2 md:pr-[4.167vw]">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F37676] font-bold text-[#500000] md:h-7 md:w-7 md:text-lg lg:mr-[2.083vw] lg:h-[2.569vw] lg:w-[2.569vw] lg:text-[1.389vw]">
                    5
                  </span>
                  <div className="relative">
                    Upload your dog’s veterinary medical records to qualify for
                    additional studies
                    <span className="absolute -top-3 right-0 shrink-0 text-xs text-[#FFABAB] md:-right-20 md:top-0 md:text-sm lg:-right-[3.125vw] lg:-top-[0.903vw] lg:text-[0.972vw]">
                      Optional
                    </span>
                  </div>
                </li>
                <li className="flex pr-2 md:pr-[4.167vw]">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F37676] font-bold text-[#500000] md:h-7 md:w-7 md:text-lg lg:mr-[2.083vw] lg:h-[2.569vw] lg:w-[2.569vw] lg:text-[1.389vw]">
                    6
                  </span>
                  <div className="relative">
                    Complete other surveys throughout the year about behavior,
                    physical activity, and more
                    <span className="absolute -top-3 right-0 shrink-0 text-xs text-[#FFABAB] md:-right-20 md:top-0 md:text-sm lg:-right-[3.125vw] lg:-top-[0.903vw] lg:text-[0.972vw]">
                      10-30 min
                    </span>
                  </div>
                </li>
                <li className="flex pr-2 md:pr-[4.167vw]">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F37676] font-bold text-[#500000] md:h-7 md:w-7 md:text-lg lg:mr-[2.083vw] lg:h-[2.569vw] lg:w-[2.569vw] lg:text-[1.389vw]">
                    7
                  </span>
                  <div className="relative">
                    Update your dog’s health & lifestyle info annually
                    <span className="absolute -top-3 right-0 shrink-0 text-xs text-[#FFABAB] md:-right-20 md:top-0 md:text-sm lg:-right-[3.125vw] lg:-top-[0.903vw] lg:text-[0.972vw]">
                      30-45 min
                    </span>
                  </div>
                </li>
                <li className="flex pr-2 md:pr-[4.167vw]">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F37676] font-bold text-[#500000] md:h-7 md:w-7 md:text-lg lg:mr-[2.083vw] lg:h-[2.569vw] lg:w-[2.569vw] lg:text-[1.389vw]">
                    8
                  </span>
                  <div className="relative">
                    Connect with other participants on the Dog Park for fun and
                    community
                    <span className="absolute -top-3 right-0 shrink-0 text-xs text-[#FFABAB] md:-right-20 md:top-0 md:text-sm lg:-right-[3.125vw] lg:-top-[0.903vw] lg:text-[0.972vw]">
                      your choice
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full pt-4 md:pt-8 lg:w-[40%] lg:pt-0">
              <div className="max-w-[55%] lg:max-w-[80%]" data-speed={1.075}>
                <img src="/images/dogs/frame-1.png" alt="frame-1" />
              </div>
              <div
                className="relative -mt-[20%] ml-auto max-w-[55%] lg:max-w-[80%]"
                data-speed={1}
              >
                <img src="/images/dogs/frame-2.png" alt="frame-2" />
              </div>
              <div
                className="-mt-[20%] max-w-[55%] lg:max-w-[80%]"
                data-speed={1.08}
              >
                <img src="/images/dogs/frame-3.png" alt="frame-3" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="lg:mt-[[9.375vw] mt-20 w-full rounded-[20px] p-5 md:mt-28 lg:max-w-[47.569vw] lg:rounded-[2.083vw] lg:p-[2.778vw]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, #500000 -3.98%, rgba(80, 0, 0, 0) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <p className="text-sm leading-snug text-[#FFDADA] md:text-lg lg:text-[2.500vw] lg:leading-snug">
            Once you’ve completed the Health and Life Experience Survey, your
            dog will be an official member of the Dog Aging Project Pack!
          </p>
        </div>
      </div>
    </div>
  );
}
