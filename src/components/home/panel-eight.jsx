/* eslint @next/next/no-img-element: "off" */
/* eslint no-nested-ternary: "off" */
/* eslint indent: "off" */
/* eslint react/no-array-index-key: "off" */
import Link from 'next/link';

export default function HomePanelEight() {
  return (
    <div className="flex">
      <div className="flex w-1/2 items-center bg-[#AF4A40] pl-[5%] pr-[4%]">
        <div className="py-[6rem]">
          <h2 className="text-[8rem] leading-none tracking-tight text-[#FFDADA]">
            Join the effort to extend the lifespan of pets and their owners.
          </h2>
          <div className="pb-[10rem] pt-[7rem] text-[2.4rem] leading-normal text-[#FFDADA]">
            We have established the Dog Aging Project as an engine for
            innovation. While core research activities are supported by the
            National Institute on Aging, a division of the National Institutes
            of Health, we are actively seeking additional support to sustain and
            expand our existing initiatives and to develop new, cutting-edge
            programs that will benefit dogs and people too.
          </div>
          <div className="text-center">
            <Link
              href="#"
              className="inline-block rounded-full bg-[#F7F3FF] px-[4rem] py-[2.133rem] text-[2.4rem] font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF]"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <video className="w-full" autoPlay loop muted>
          <source src="/videos/red-dog.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
