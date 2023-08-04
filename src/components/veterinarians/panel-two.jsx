/* eslint @next/next/no-img-element: "off" */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function PanelTwo() {
  return (
    <div className="relative -mt-[30px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-white pb-20 lg:-mt-[10.667rem] lg:rounded-tl-[10.667rem] lg:rounded-tr-[10.667rem] lg:pb-[30rem]">
      <div className="px-5 md-4 md:pb-10 pt-20 lg:px-[8%] lg:pb-[10rem] lg:pt-[21.333rem]">
        <h2 className="mb-8 max-w-[300px] text-4xl leading-none text-[#6543A5] lg:mb-[8rem] lg:max-w-[73rem] lg:text-[8.133rem] lg:tracking-[0.114rem]">
          Big data, <br />
          big discoveries
        </h2>
      </div>
      <div className="mb-16 flex flex-wrap items-center px-5 pl-[4%] pr-[8%] lg:mb-[12rem]">
        <div className="ml-auto w-full lg:w-1/2 md:pr-[3%] mb-8 lg:-mb-[25rem]">
          <div className="text-xl leading-snug text-[#790F0F] lg:text-[3.6rem]">
            The Dog Aging Project is an open data project. We make all the data
            we collect available to researchers around the world.
          </div>
          <div className="mt-5 flex flex-wrap lg:flex-nowrap gap-x-[2rem] gap-y-[1rem] lg:mt-[4rem]">
            <Link
              href="#"
              className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-medium leading-none shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
            >
              Apply for Data Access
            </Link>
            <Link
              href="#"
              className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-medium leading-none shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
            >
              Research Publications
            </Link>
          </div>
        </div>
        <div className="pointer-events-none w-full">
          <Image
            src="/images/bio-data-graph.png"
            alt="dog-13"
            // fill
            width={2384}
            height={1718}
          />
        </div>
        <div className="w-full lg:w-1/2 mt-14 lg:-mt-[40rem]">
          <div>
            <h3 className="font-plex-mono mb-5 text-xl font-medium uppercase leading-relaxed lg:leading-none -tracking-[0.036rem] text-[#790F0F] md:text-2xl lg:mb-[4rem] lg:text-[3.6rem]">
              Veterinary Research Fellowships
            </h3>
            <div className="text-lg leading-snug text-[#790F0F] lg:text-[2.8rem]">
              We offer two veterinary research fellowship opportunities based at
              Texas A&M School of Veterinary Medicine & Biomedical Sciences.
              Apply for the Dog Aging Project Clinical Trial Internship or
              Combined Research Fellowship and Small Animal Internal Medicine
              Residency via the Veterinary Internship and Residency Matching
              Program.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
