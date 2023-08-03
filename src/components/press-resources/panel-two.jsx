/* eslint @next/next/no-img-element: "off" */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import ArrowDownIcon from '@assets/images/icons/arrow-down-small.svg';

gsap.registerPlugin(ScrollTrigger);

export default function PanelTwo() {
  const projectBackgrounds = [
    {
      title: 'Introducing the Dog Aging Project',
      link: '#',
    },
    {
      title: 'Executive Summary',
      link: '#',
    },
    {
      title: 'Key Facts about the Dog Aging Project',
      link: '#',
    },
    {
      title: 'Key Facts about TRIAD',
      link: '#',
    },
    {
      title: 'Key Facts About the Brain Health Study',
      link: '#',
    },
    {
      title: 'Veterinary Summary',
      link: '#',
    },
  ];

  return (
    <div className="px-5 lg:px-[8%]">
      <div className="mb-20 w-full lg:mb-[11.333rem] lg:w-1/2">
        <h2 className="mb-6 text-4xl font-medium leading-none text-[#532EA4] lg:mb-[6.4rem] lg:text-[6.267rem] lg:-tracking-[0.114rem]">
          Project Background
        </h2>
        <div className="leading-normal text-[#514730] lg:text-[2.4rem]">
          Working on a story about the Dog Aging Project? Need to have quick
          access to accurate details about our research? Download relevant
          informational sheets below.
        </div>
      </div>

      <div className="mb-20 grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:mb-[11.333rem] lg:grid-cols-3 lg:gap-x-[5rem] lg:gap-y-[11.333rem] lg:text-[2.4rem]">
        {projectBackgrounds.map((project) => (
          <div key={project.title} cla>
            <div className="flex items-center gap-x-4 rounded-3xl px-5 py-4 shadow-[0px_0px_15px_5px_rgba(0,0,0,0.30)_inset] lg:gap-x-[2.5rem] lg:rounded-[2.667rem] lg:px-[4rem] lg:py-[2.667rem]">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-[#250A60] lg:h-[6.667rem] lg:w-[6.667rem] lg:rounded-[2rem]" />
              <p className="font-medium leading-snug text-[#6543A5]">
                {project.title}
              </p>
            </div>
            <a
              href={project.link}
              className="mt-4 flex items-center font-bold text-black lg:mt-[2.667rem]"
            >
              Download PNG
              <div className="svg_icon ml-2 w-4 lg:ml-[1rem] lg:w-[1.7rem]">
                <ArrowDownIcon />
              </div>
            </a>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="mt-6 inline-block rounded-full bg-[#F7F3FF] px-6 py-3 text-center font-semibold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-white md:mt-0 lg:px-[2.667rem] lg:py-[2rem] lg:text-[2.4rem]"
      >
        Download Full PDF Info Package
      </a>
    </div>
  );
}
