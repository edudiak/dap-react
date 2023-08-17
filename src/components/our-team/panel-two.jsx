import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function PanelTwo() {
  const team = {
    founders: [
      {
        name: 'Daniel Promislow, DPhil',
        designation: 'U19 Principal Investigator',
        image: '/images/team/founders/daniel.jpg',
      },
      {
        name: 'Kate E. Creevy, DVM, MS, DACVIM',
        designation: 'Chief Veterinary Officer',
        image: '/images/team/founders/kate.jpg',
      },
      {
        name: 'Matt Kaeberlein, PhD',
        designation: 'Project Consultant',
        image: '/images/team/founders/matt.jpg',
      },
    ],
    executives: [
      {
        name: 'Audrey Ruple, DVM, MS, PhD, DipACVPM, MRCVS',
        designation: 'Research Team',
        image: '/images/team/executive/audrey.jpg',
      },
      {
        name: 'Robyn McClelland, PhD',
        designation: 'Research Team',
        image: '/images/team/executive/robyn.jpg',
      },
      {
        name: 'Matthew Dunbar, PhD',
        designation: 'Research Team',
        image: '/images/team/executive/matthew.jpg',
      },
      {
        name: 'Josh Akey, PhD',
        designation: 'Research Team',
        image: '/images/team/executive/josh.jpg',
      },
      {
        name: 'Benjamin S. Wilfond, MD',
        designation: 'Ethicist',
        image: '/images/team/executive/benjamin.jpg',
      },
      {
        name: 'Rozalyn Anderson, PhD',
        designation: 'Research Team',
        image: '/images/team/executive/rozalyn.jpg',
      },
      {
        name: 'Brooke Benton, MPH, PMP',
        designation: 'Operations Team',
        image: '/images/team/executive/brooke.jpg',
      },
      {
        name: 'Lisa Wormke',
        designation: 'Operations Team',
        image: '/images/team/executive/lisa.jpg',
      },
      {
        name: 'Zulma Garcia',
        designation: 'Operations Team',
        image: '/images/team/executive/zulma.jpg',
      },
    ],
    dapTeam: [
      {
        name: 'Audrey Ruple, DVM',
        designation: 'Research Team',
        image: '/images/team/executive/audrey.jpg',
      },
      {
        name: 'Robyn McClelland, PhD',
        designation: 'Research Team',
        image: '/images/team/executive/robyn.jpg',
      },
      {
        name: 'Matthew Dunbar, PhD',
        designation: 'Research Team',
        image: '/images/team/executive/matthew.jpg',
      },
      {
        name: 'Josh Akey, PhD',
        designation: 'Research Team',
        image: '/images/team/executive/josh.jpg',
      },
      {
        name: 'Benjamin S. Wilfond, MD',
        designation: 'Ethicist',
        image: '/images/team/executive/benjamin.jpg',
      },
      {
        name: 'Rozalyn Anderson, PhD',
        designation: 'Research Team',
        image: '/images/team/executive/rozalyn.jpg',
      },
      {
        name: 'Brooke Benton, MPH, PMP',
        designation: 'Operations Team',
        image: '/images/team/executive/brooke.jpg',
      },
      {
        name: 'Lisa Wormke',
        designation: 'Operations Team',
        image: '/images/team/executive/lisa.jpg',
      },
      {
        name: 'Zulma Garcia',
        designation: 'Operations Team',
        image: '/images/team/executive/zulma.jpg',
      },
    ],
  };

  const elm_1 = useRef(null);
  const panel_1 = useRef(null);
  const panel_2 = useRef(null);
  const elm_2 = useRef(null);
  const panel_3 = useRef(null);
  const elm_3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_1.current,
            start: 'top 90%',
            end: 'bottom 80%',
            scrub: 1,
          },
        })
        .fromTo(
          elm_1.current,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_1.current,
            start: 'top 90%',
            end: 'bottom 90%',
            scrub: 1,
          },
        })
        .fromTo(
          '.founders',
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_2.current,
            start: 'top 90%',
            end: 'bottom 80%',
            scrub: 1,
          },
        })
        .fromTo(
          elm_2.current,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_2.current,
            start: 'top 90%',
            end: 'bottom 90%',
            scrub: 1,
          },
        })
        .fromTo(
          '.leaders',
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_3.current,
            start: 'top 90%',
            end: 'bottom 90%',
            scrub: 1,
          },
        })
        .fromTo(
          elm_3.current,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_3.current,
            start: 'top 90%',
            end: 'bottom 90%',
            scrub: 1,
          },
        })
        .fromTo(
          '.team',
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative px-5 lg:px-[4%]">
      <div className="mb-32 lg:mb-[40rem]">
        <h2
          ref={elm_1}
          className="mb-8 text-4xl leading-none lg:mb-[5.333rem] lg:text-[8.133rem] lg:tracking-[0.114rem]"
        >
          Our Founders
        </h2>
        <div
          ref={panel_1}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-x-[6.667rem] lg:gap-y-[5.333rem]"
        >
          {team.founders.map((member) => (
            <div
              key={member.name}
              className="founders flex items-stretch justify-center overflow-hidden rounded-3xl text-[#250A60] lg:h-[30rem] lg:rounded-[4rem]"
              style={{
                background:
                  'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
                backgroundBlendMode: 'overlay, normal, normal',
                boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex w-2/3 flex-col justify-around gap-y-8 p-4 md:justify-between lg:p-[4rem]">
                <h4 className="text-2xl font-medium leading-tight lg:text-[4.8rem] lg:leading-tight lg:-tracking-[0.144rem]">
                  {member.name}
                </h4>
                <p className="text-lg leading-normal lg:text-[2.8rem] lg:leading-normal">
                  {member.designation}
                </p>
              </div>
              <div className="w-1/2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full rounded-bl-full rounded-tl-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-32 lg:mb-[40rem]">
        <h2
          ref={elm_2}
          className="mb-8 text-4xl leading-none lg:mb-[5.333rem] lg:text-[8.133rem] lg:tracking-[0.114rem]"
        >
          Executive Leadership Team
        </h2>
        <div
          ref={panel_2}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-x-[6.667rem] lg:gap-y-[5.333rem]"
        >
          {team.executives.map((member) => (
            <div
              key={member.name}
              className="leaders flex items-stretch justify-center overflow-hidden rounded-3xl text-[#250A60] lg:h-[30rem] lg:rounded-[4rem]"
              style={{
                background:
                  'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
                backgroundBlendMode: 'overlay, normal, normal',
                boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex w-2/3 flex-col justify-around gap-y-8 p-4 md:justify-between lg:p-[4rem] lg:pr-0">
                <h4 className="text-2xl font-medium leading-tight lg:text-[4.8rem] lg:leading-tight lg:-tracking-[0.144rem]">
                  {member.name}
                </h4>
                <p className="text-lg leading-normal lg:text-[2.8rem] lg:leading-normal">
                  {member.designation}
                </p>
              </div>
              <div className="w-1/2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full rounded-bl-full rounded-tl-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-32 md:pb-0">
        <h2
          ref={elm_3}
          className="mb-0 text-4xl leading-tight sm:leading-none lg:mb-[5.333rem] lg:text-[8.133rem] lg:tracking-[0.114rem]"
        >
          Dog Aging Project Team
        </h2>
        <div
          ref={panel_3}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[5.333rem] lg:gap-y-[8rem]"
        >
          {team.dapTeam.map((member) => (
            <div
              key={member.name}
              className="team overflow-hidden rounded-3xl text-[#250A60] lg:rounded-[4rem]"
              style={{
                background:
                  'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
                backgroundBlendMode: 'overlay, normal, normal',
                boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-96 w-full object-cover lg:h-[33.333rem]"
                />
              </div>
              <div className="flex flex-col justify-between gap-y-8 p-4 lg:h-[20rem] lg:px-[2.667rem] lg:py-[3rem]">
                <h4 className="text-2xl font-medium leading-tight lg:text-[3.6rem] lg:leading-tight lg:-tracking-[0.144rem]">
                  {member.name}
                </h4>
                <p className="text-lg leading-normal lg:text-[2.8rem] lg:leading-normal">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
