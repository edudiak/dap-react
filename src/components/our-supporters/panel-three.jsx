import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function PanelThree() {
  const support = [
    {
      title: 'Platinum',
      amount: '$1,000,000 or Above',
      image: '/images/dogs/donation-platinum.png',
      donateUrl: '#',
    },
    {
      title: 'Gold',
      amount: '$500,000 or Above',
      image: '/images/dogs/donation-gold.png',
      donateUrl: '#',
    },
    {
      title: 'Silver',
      amount: '$250,000 or Above',
      image: '/images/dogs/donation-silver.png',
      donateUrl: '#',
    },
    {
      title: 'Bronze',
      amount: '$25,000 or Above',
      image: '/images/dogs/donation-bronze.png',
      donateUrl: '#',
    },
  ];
  return (
    <div className="px-5 lg:px-[4%]">
      <div className="mb-10 flex flex-wrap lg:mb-[13.333rem] lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <h3 className="mb-8 text-4xl leading-none lg:mb-[5.333rem] lg:text-[8.133rem] lg:tracking-[0.114rem]">
            Support Our Research
          </h3>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-[2%]">
          <div className="text-lg leading-snug text-[#250A60] lg:text-[2.8rem] lg:leading-relaxed">
            We have established the Dog Aging Project as an engine for
            innovation. While core research activities are supported by the
            National Institute on Aging, a division of the National Institutes
            of Health, we are actively seeking additional support to sustain and
            expand our existing initiatives and to develop new, cutting-edge
            programs that will benefit dogs and people too.
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-y-16 md:flex-nowrap">
        {support.map((item, index) => (
          <div
            key={item.title}
            className="w-full text-center md:w-1/2 lg:w-1/4"
          >
            <div className="relative p-4 lg:p-[3.4rem]">
              <div
                className={`${
                  index % 2
                    ? 'mt-[10px] rotate-[135deg]'
                    : 'mt-[10px] rotate-[135deg] md:-mt-[10px] md:-rotate-45'
                } absolute left-0 top-0 h-full w-full transform rounded-full border-[6px] border-[#250A60] border-b-transparent border-l-transparent lg:border-[.77rem]`}
              />
              <img src={item.image} alt="Platinum" className="w-full" />
            </div>
            <div className="mt-8 lg:mt-[8rem]">
              <h4 className="mb-3 text-lg font-bold leading-none lg:text-[4.8rem]">
                {item.title}
              </h4>
              <p className="mb-5 mt-5 text-base lg:mb-[3.5rem] lg:mt-[3.5rem] lg:text-[2.8rem]">
                {item.amount}
              </p>
              <Link
                href={item.donateUrl}
                className="inline-block rounded-full bg-[#F7F3FF] px-6 py-4 font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
              >
                Donate
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center lg:mt-[6.668rem]">
        <h4 className="mb-5 text-xl leading-snug text-[#790F0F] lg:mb-[4rem] lg:text-[4.8rem] lg:leading-snug">
          Donations of any size are welcome
        </h4>
        <Link
          href="#"
          className="inline-block rounded-full bg-[#9169E8] px-6 py-4 font-bold leading-none text-[#F7F3FF] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.60)] transition hover:bg-[#F7F3FF] hover:text-[#250A60] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
        >
          Donate
        </Link>
      </div>
    </div>
  );
}
