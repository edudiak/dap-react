/* eslint @next/next/no-img-element: "off" */
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomePanelFive() {
  const section4 = useRef(null);
  const panel_1 = useRef(null);
  const panel_2 = useRef(null);
  const panel_3 = useRef(null);
  const panel_4 = useRef(null);
  const panel_5 = useRef(null);
  const panel_6 = useRef(null);
  const panel_7 = useRef(null);

  const panel_box_1 = useRef(null);
  const panel_box_2 = useRef(null);
  const panel_box_3 = useRef(null);
  const panel_box_4 = useRef(null);
  const panel_box_5 = useRef(null);
  const panel_box_6 = useRef(null);

  const panel_box_1_dot = useRef(null);
  const panel_box_2_dot = useRef(null);
  const panel_box_3_dot = useRef(null);
  const panel_box_4_dot = useRef(null);
  const panel_box_5_dot = useRef(null);
  const panel_box_6_dot = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Box animation
      gsap.timeline({
        scrollTrigger: {
          trigger: section4.current,
          start: 'top top',
          pin: section4.current,
          // toggleActions: 'play none none reverse',
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
            // toggleActions: 'play none none reverse',
            end: '+=1000',
            scrub: true,
            snap: {
              snapTo: 1,
              duration: 0.7,
              delay: 0,
            },
          },
        })
        .to(panel_box_1.current, {
          backgroundColor: '#216A97',
        })
        .fromTo(
          panel_box_1_dot.current,
          { opacity: 0, backgroundColor: '#B894FF', scale: 1 },
          { opacity: 1, backgroundColor: '#216A97', scale: 50 },
          '<=',
        )
        .to(panel_7.current, { opacity: 0 }, '<=')
        .to(panel_1.current, { opacity: 1 }, '<=')
        .to(
          [
            panel_box_2.current,
            panel_box_3.current,
            panel_box_4.current,
            panel_box_5.current,
            panel_box_6.current,
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
            // toggleActions: 'play none none reverse',
            scrub: true,
            snap: {
              snapTo: 1,
              duration: 0.7,
              delay: 0,
            },
          },
        })
        .to(panel_box_2.current, { backgroundColor: '#6F48C6' }, '<=')
        .to(
          panel_box_2_dot.current,
          { opacity: 1, backgroundColor: '#6F48C6', scale: 50 },
          '<=',
        )
        .to(panel_1.current, { opacity: 0 }, '<=')
        .to(panel_2.current, { opacity: 1 }, '<=')
        .to(
          [
            panel_box_1.current,
            panel_box_3.current,
            panel_box_4.current,
            panel_box_5.current,
            panel_box_6.current,
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
            // toggleActions: 'play none none reverse',
            scrub: true,
            snap: {
              snapTo: 1,
              duration: 0.7,
              delay: 0,
            },
          },
        })
        .to(panel_box_3.current, { backgroundColor: '#C3912A' }, '<=')
        .to(
          panel_box_3_dot.current,
          { opacity: 1, backgroundColor: '#C3912A', scale: 50 },
          '<=',
        )
        .to(panel_2.current, { opacity: 0 }, '<=')
        .to(panel_3.current, { opacity: 1 }, '<=')
        .to(
          [
            panel_box_1.current,
            panel_box_2.current,
            panel_box_4.current,
            panel_box_5.current,
            panel_box_6.current,
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
            // toggleActions: 'play none none reverse',
            scrub: true,
            snap: {
              snapTo: 1,
              duration: 0.7,
              delay: 0,
            },
          },
        })
        .to(panel_box_4.current, { backgroundColor: '#847552' }, '<=')
        .to(
          panel_box_4_dot.current,
          { opacity: 1, backgroundColor: '#847552', scale: 50 },
          '<=',
        )
        .to(panel_3.current, { opacity: 0 }, '<=')
        .to(panel_4.current, { opacity: 1 }, '<=')
        .to(
          [
            panel_box_1.current,
            panel_box_2.current,
            panel_box_3.current,
            panel_box_5.current,
            panel_box_6.current,
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
            // toggleActions: 'play none none reverse',
            scrub: true,
            snap: {
              snapTo: 1,
              duration: 0.7,
              delay: 0,
            },
          },
        })
        .to(panel_box_5.current, { backgroundColor: '#AF4A40' }, '<=')
        .to(
          panel_box_5_dot.current,
          { opacity: 1, backgroundColor: '#AF4A40', scale: 50 },
          '<=',
        )
        .to(panel_4.current, { opacity: 0 }, '<=')
        .to(panel_5.current, { opacity: 1 }, '<=')
        .to(
          [
            panel_box_1.current,
            panel_box_2.current,
            panel_box_3.current,
            panel_box_4.current,
            panel_box_6.current,
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
            // toggleActions: 'play none none reverse',
            scrub: true,
            snap: {
              snapTo: 1,
              duration: 0.7,
              delay: 0,
            },
          },
        })
        .to(panel_box_6.current, { backgroundColor: '#663B40' }, '<=')
        .to(
          panel_box_6_dot.current,
          { opacity: 1, backgroundColor: '#663B40', scale: 50 },
          '<=',
        )
        .to(panel_5.current, { opacity: 0 }, '<=')
        .to(panel_6.current, { opacity: 1 }, '<=')
        .to(
          [
            panel_box_1.current,
            panel_box_2.current,
            panel_box_3.current,
            panel_box_4.current,
            panel_box_5.current,
          ],
          { backgroundColor: '#CB878F' },
          '<=',
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div ref={section4} className="relative overflow-hidden">
      <div className="section4_sticky_panels relative h-screen">
        <div
          ref={panel_1}
          className="absolute left-0 top-0 z-[3] flex h-[calc(100%-115px)] w-full items-start pt-[5rem] opacity-0 lg:h-[calc(100%-24rem)]"
        >
          <div className="mx-auto flex h-full w-full items-center px-[5%]">
            <div className="w-1/2 text-center">
              <img
                src="/images/dogs/canine-health.png"
                alt="canine-health"
                className="mx-auto"
              />
            </div>
            <div className="w-1/2">
              <div className="text-[#CAEBFF] lg:max-w-[70rem]">
                <h4 className="mb-8 text-4xl uppercase lg:mb-[3rem] lg:text-[6rem]">
                  CANINE HEALTH
                </h4>
                <p className="mb-5 text-lg leading-snug lg:mb-[3rem] lg:text-[2.4rem]">
                  Our team collects comprehensive health and diet data via
                  owner-reported surveys, veterinary medical records, and
                  frailty assessments.
                </p>
                <p className="text-lg leading-snug lg:text-[2.4rem]">
                  For members of the Precision and TRIAD Cohorts, we partner
                  with primary care and speciality veterinarians to collect
                  biological samples for detailed biochemical analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={panel_2}
          className="absolute left-0 top-0 z-[3] flex h-[calc(100%-115px)] w-full items-start pt-[5rem] opacity-0 lg:h-[calc(100%-24rem)]"
        >
          <div className="mx-auto flex h-full w-full items-center px-[5%]">
            <div className="w-1/2 text-center">
              <img
                src="/images/dogs/canine-genetics.png"
                alt="canine-health"
                className="mx-auto"
              />
            </div>
            <div className="w-1/2">
              <div className="text-[#E5D8FF] lg:max-w-[70rem]">
                <h4 className="mb-8 text-4xl uppercase lg:mb-[3rem] lg:text-[6rem]">
                  CANINE GENETICS
                </h4>
                <p className="mb-5 text-lg leading-snug lg:mb-[3rem] lg:text-[2.4rem]">
                  Participants in the Foundation, Precision, and TRIAD cohorts,
                  receive a free DNA Kit with which to collect a cheek swab
                  sample for use in low-pass sequencing.
                </p>
                <p className="text-lg leading-snug lg:text-[2.4rem]">
                  Genome sequence data are integrated with health measures and
                  age-related physiological and behavioral traits to carry out
                  comprehensive genome-wide association studies of common
                  diseases, frailty, and co-morbidity associated with age.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={panel_3}
          className="absolute left-0 top-0 z-[3] flex h-[calc(100%-115px)] w-full items-start pt-[5rem] opacity-0 lg:h-[calc(100%-24rem)]"
        >
          <div className="mx-auto flex h-full w-full items-center px-[5%]">
            <div className="w-1/2 text-center">
              <img
                src="/images/dogs/environmental-effects.png"
                alt="canine-health"
                className="mx-auto"
              />
            </div>
            <div className="w-1/2">
              <div className="text-[#FFF9ED] lg:max-w-[70rem]">
                <h4 className="mb-8 text-4xl uppercase lg:mb-[3rem] lg:text-[6rem]">
                  ENVIRONMENTAL EFFECTS
                </h4>
                <p className="mb-5 text-lg leading-snug lg:mb-[3rem] lg:text-[2.4rem]">
                  Dogs share our environment. They live with us. They often
                  sleep with us. Sometimes they even share our food.
                  Environmental exposures can have a profound impact on health.
                </p>
                <p className="text-lg leading-snug lg:text-[2.4rem]">
                  In addition to owner-reported information about each dog’s
                  home and yard, our team compiles extensive environmental data
                  geolocated by zip code for each participant. For smaller
                  cohorts, we conduct physical sampling from the home
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={panel_4}
          className="absolute left-0 top-0 z-[3] flex h-[calc(100%-115px)] w-full items-start pt-[5rem] opacity-0 lg:h-[calc(100%-24rem)]"
        >
          <div className="mx-auto flex h-full w-full items-center px-[5%]">
            <div className="w-1/2 text-center">
              <img
                src="/images/dogs/canine-life-style.png"
                alt="canine-health"
                className="mx-auto"
              />
            </div>
            <div className="w-1/2">
              <div className="text-[#FFF3D8] lg:max-w-[70rem]">
                <h4 className="mb-8 text-4xl uppercase lg:mb-[3rem] lg:text-[6rem]">
                  CANINE LIFESTYLE
                </h4>
                <p className="text-lg leading-snug lg:text-[2.4rem]">
                  The Pack contains dogs from all walks of life, including
                  companion dogs, working dogs, and dogs who participate in many
                  different activities like nosework or agility. We use
                  owner-reported information to understand how different canine
                  lifestyles are related to health and aging.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={panel_5}
          className="absolute left-0 top-0 z-[3] flex h-[calc(100%-115px)] w-full items-start pt-[5rem] opacity-0 lg:h-[calc(100%-24rem)]"
        >
          <div className="mx-auto flex h-full w-full items-center px-[5%]">
            <div className="w-1/2 text-center">
              <img
                src="/images/dogs/brain-health.png"
                alt="canine-health"
                className="mx-auto"
              />
            </div>
            <div className="w-1/2">
              <div className="text-[#FFDADA] lg:max-w-[70rem]">
                <h4 className="mb-8 text-4xl uppercase lg:mb-[3rem] lg:text-[6rem]">
                  BRAIN HEALTH
                </h4>
                <p className="text-lg leading-snug lg:text-[2.4rem]">
                  Aging dogs sometimes experience canine cognitive decline, a
                  condition that is analogous to Alzheimer’s disease in humans.
                  We’ve designed a comprehensive program to study all phases of
                  cognitive development, health, and disease through surveys,
                  interactive games that owners play with their dogs, and even
                  an opportunity for interested participants to donate their
                  dog’s body to science at the end of their natural lifespan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={panel_6}
          className="absolute left-0 top-0 z-[3] flex h-[calc(100%-115px)] w-full items-start pt-[5rem] opacity-0 lg:h-[calc(100%-24rem)]"
        >
          <div className="mx-auto flex h-full w-full items-center px-[5%]">
            <div className="w-1/2 text-center">
              <img
                src="/images/dogs/canine-activity.png"
                alt="canine-genetics"
                className="mx-auto"
              />
            </div>
            <div className="w-1/2">
              <div className="text-[#FFF7F8] lg:max-w-[70rem]">
                <h4 className="mb-8 text-4xl uppercase lg:mb-[3rem] lg:text-[6rem]">
                  CANINE ACTIVITY
                </h4>
                <p className="text-lg leading-snug lg:text-[2.4rem]">
                  Our research is already demonstrating links between activity
                  levels and various health measures. We quantify activity
                  levels through surveys, at-home mobility activities that
                  owners complete with their dogs, and with collar-mounted
                  actigraphs that collect high granularity data on movement in
                  three dimensions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={panel_7}
          className="absolute left-0 top-0 z-[-1] h-full w-full bg-[#6543A5]"
        >
          <div className="mx-auto flex h-[calc(100%-115px)] w-full items-center px-5 lg:h-[calc(100%-24rem)] lg:max-w-[70%]">
            <div className="w-full text-[#E8DCFF]">
              <div className="lg:max-w-[70rem]">
                <h4 className="text-4xl leading-tight tracking-tighter lg:text-[7.2rem] lg:leading-none">
                  Accelerating Scientific Discovery & Innovation for Dogs and
                  Humans
                </h4>
                <p className="mb-6 mt-6 text-2xl uppercase leading-snug lg:mb-[2rem] lg:mt-[4rem] lg:text-[3.6rem]">
                  Our Research Goals
                </p>
                <p className="text-lg leading-snug lg:text-[2.4rem]">
                  The goal of the Dog Aging Project is to understand how genes,
                  lifestyle, and environment influence health and aging. Our
                  research program is designed to collect—and connect—critical
                  data in six scientific domains: health, genetics, environment,
                  lifestyle, cognition, and activity. We use innovative
                  approaches and cutting-edge technologies to assemble, analyze,
                  and share high quality canine health data with the scientific
                  community and the public.
                </p>
              </div>
              <div className="ml-auto mt-8 font-medium leading-snug lg:mt-[4rem] lg:lg:max-w-[70rem] lg:text-[1.867rem]">
                From within the Dog Aging Project Pack, we enroll subsets of
                dogs into cohorts based on specific scientific criteria. These
                cohorts include Foundation, a genomics study; Precision, a
                biochemical study; and the Test of Rapamycin in Aging Dogs
                (TRIAD), a double-blind, placebo-controlled clinical trial.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        // ref={section4_panel2}
        className="absolute bottom-2 left-0 z-[2] w-full px-2 lg:bottom-[2rem] lg:px-[5%]"
      >
        <div className="flex justify-center gap-2 lg:gap-[2rem]">
          <div className="relative w-1/6">
            <div
              ref={panel_box_1_dot}
              className="dot absolute right-0 top-0 h-[50px] w-[50px] rounded-full lg:h-[100px] lg:w-[100px]"
            />
            <div
              ref={panel_box_1}
              className="box relative z-[2] flex h-28 items-center justify-center rounded-[10px] bg-[#B894FF] text-center uppercase text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.3)] lg:h-[22rem] lg:w-[24rem] lg:rounded-[2.667rem]"
            >
              <div className="relative w-full">
                <p className="mb-2 text-base leading-none lg:mb-[2rem] lg:text-[3rem]">
                  Health
                </p>
                <p className="inline-block rounded-full border border-white px-3 py-1 text-[10px] lg:text-[1.333rem]">
                  explore
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-1/6">
            <div
              ref={panel_box_2_dot}
              className="dot absolute right-0 top-0 h-[50px] w-[50px] rounded-full lg:h-[100px] lg:w-[100px]"
            />
            <div
              ref={panel_box_2}
              className="box relative z-[2] flex h-28 items-center justify-center rounded-[10px] bg-[#B894FF] text-center uppercase text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.3)] lg:h-[22rem] lg:w-[24rem] lg:rounded-[2.667rem]"
            >
              <div className="relative w-full">
                <p className="mb-2 text-base leading-none lg:mb-[2rem] lg:text-[3rem]">
                  Genetics
                </p>
                <p className="inline-block rounded-full border border-white px-3 py-1 text-[10px] lg:text-[1.333rem]">
                  explore
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-1/6">
            <div
              ref={panel_box_3_dot}
              className="dot absolute right-0 top-0 h-[50px] w-[50px] rounded-full lg:h-[100px] lg:w-[100px]"
            />
            <div
              ref={panel_box_3}
              className="box relative z-[2] flex h-28 items-center justify-center rounded-[10px] bg-[#B894FF] text-center uppercase text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.3)] lg:h-[22rem] lg:w-[24rem] lg:rounded-[2.667rem]"
            >
              <div className="relative w-full">
                <p className="mb-2 text-base leading-none lg:mb-[2rem] lg:text-[3rem]">
                  Environment
                </p>
                <p className="inline-block rounded-full border border-white px-3 py-1 text-[10px] lg:text-[1.333rem]">
                  explore
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-1/6">
            <div
              ref={panel_box_4_dot}
              className="dot absolute right-0 top-0 h-[50px] w-[50px] rounded-full lg:h-[100px] lg:w-[100px]"
            />
            <div
              ref={panel_box_4}
              className="box relative z-[2] flex h-28 items-center justify-center rounded-[10px] bg-[#B894FF] text-center uppercase text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.3)] lg:h-[22rem] lg:w-[24rem] lg:rounded-[2.667rem]"
            >
              <div className="relative w-full">
                <p className="mb-2 text-base leading-none lg:mb-[2rem] lg:text-[3rem]">
                  Lifestyle
                </p>
                <p className="inline-block rounded-full border border-white px-3 py-1 text-[10px] lg:text-[1.333rem]">
                  explore
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-1/6">
            <div
              ref={panel_box_5_dot}
              className="dot absolute right-0 top-0 h-[50px] w-[50px] rounded-full lg:h-[100px] lg:w-[100px]"
            />
            <div
              ref={panel_box_5}
              className="box relative z-[2] flex h-28 items-center justify-center rounded-[10px] bg-[#B894FF] text-center uppercase text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.3)] lg:h-[22rem] lg:w-[24rem] lg:rounded-[2.667rem]"
            >
              <div className="relative w-full">
                <p className="mb-2 text-base leading-none lg:mb-[2rem] lg:text-[3rem]">
                  Cognition
                </p>
                <p className="inline-block rounded-full border border-white px-3 py-1 text-[10px] lg:text-[1.333rem]">
                  explore
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-1/6">
            <div
              ref={panel_box_6_dot}
              className="dot absolute right-0 top-0 h-[50px] w-[50px] rounded-full lg:h-[100px] lg:w-[100px]"
            />
            <div
              ref={panel_box_6}
              className="box relative z-[2] flex h-28 items-center justify-center rounded-[10px] bg-[#B894FF] text-center uppercase text-white shadow-[0px_0px_14px_3px_rgba(0,0,0,0.3)] lg:h-[22rem] lg:w-[24rem] lg:rounded-[2.667rem]"
            >
              <div className="relative w-full">
                <p className="mb-2 text-base leading-none lg:mb-[2rem] lg:text-[3rem]">
                  Activity
                </p>
                <p className="inline-block rounded-full border border-white px-3 text-xs lg:text-[1.333rem]">
                  explore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
