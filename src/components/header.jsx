/* eslint operator-linebreak: "off" */
/* eslint @next/next/no-img-element: "off" */
import Link from 'next/link';

import ArrowDownIcon from '@assets/images/icons/arrow-down-small.svg';

function MenuWithDropdown({ href, text, children }) {
  return (
    <li className="group relative">
      <Link
        href={href}
        className="duration-400 group relative flex items-center rounded-tl-[5.333rem] rounded-tr-[5.333rem] bg-white px-[3rem] py-[3.5rem] leading-none transition group-hover:bg-black group-hover:text-white"
      >
        <span className="mr-[1rem]">{text}</span>
        <div className="svg_icon w-[1.5rem] translate-y-0 transform opacity-100 transition-all duration-300 group-hover:translate-y-[2rem] group-hover:text-white group-hover:opacity-0">
          <ArrowDownIcon />
        </div>
        <div className="svg_icon absolute right-[3rem] w-[1.5rem] -translate-y-[2rem] transform text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowDownIcon />
        </div>
      </Link>
      <ul className="duration-400 absolute z-[20] flex min-w-[28.7rem] origin-top scale-y-0 transform flex-col bg-black px-[3rem] pb-[2rem] pt-[1rem] opacity-0 transition group-hover:scale-y-100 group-hover:opacity-100">
        {children}
      </ul>
    </li>
  );
}

function DropdownMenuItem({ href, text }) {
  return (
    <li>
      <Link
        href={href}
        className="relative flex items-center py-[2rem] leading-none text-white transition-all duration-300 before:absolute before:bottom-[.867rem] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
      >
        <span>{text}</span>
        <div className="arrow-1 svg_icon absolute right-0 w-[1.5rem] opacity-100 transition-all duration-300">
          <ArrowDownIcon />
        </div>
        <div className="arrow-2 svg_icon absolute right-0 w-[1.5rem] opacity-0 transition-all duration-300">
          <ArrowDownIcon />
        </div>
      </Link>
    </li>
  );
}

export default function Header() {
  return (
    <header className="z-50 hidden bg-white lg:block">
      <div className="flex items-center justify-between pl-[4%]">
        <Link href="/" className="flex">
          <img
            src="/images/dap-logo.svg"
            alt="Dog aging project"
            // width={180}
            // height={73}
            className="h-[9.5rem] w-auto"
          />
        </Link>
        <ul className="primary-nav flex items-center text-[2.4rem] font-bold text-black">
          <MenuWithDropdown href="/project-details" text="Project Details">
            <DropdownMenuItem
              href="/triad-fast-track"
              text="Project Overview"
            />
            <DropdownMenuItem href="/veterinarians" text="Veterinarians" />
            <DropdownMenuItem href="/our-supporters" text="Our Supporters" />
            <DropdownMenuItem href="/our-team" text="Our Team" />
            <DropdownMenuItem href="#" text="Contact Us" />
          </MenuWithDropdown>

          <MenuWithDropdown href="#" text="Research">
            <DropdownMenuItem href="#" text="Publications" />
            <DropdownMenuItem href="#" text="Data Access" />
            <DropdownMenuItem href="#" text="Careers" />
          </MenuWithDropdown>

          <MenuWithDropdown href="#" text="Media">
            <DropdownMenuItem href="#" text="News Coverage" />
            <DropdownMenuItem href="#" text="Press Resources" />
          </MenuWithDropdown>

          <MenuWithDropdown href="#" text="Blog">
            <DropdownMenuItem href="#" text="Scientific Results" />
            <DropdownMenuItem href="#" text="Inside Science" />
            <DropdownMenuItem href="#" text="Inside Cognition" />
            <DropdownMenuItem href="#" text="Inside Foundation" />
            <DropdownMenuItem href="#" text="Inside Precision" />
            <DropdownMenuItem href="#" text="Aging Dog Care" />
          </MenuWithDropdown>

          <MenuWithDropdown href="#" text="FAQ">
            <DropdownMenuItem href="#" text="Project FAQ" />
            <DropdownMenuItem href="#" text="Participant FAQ" />
            <DropdownMenuItem href="#" text="Veterinarian FAQ" />
          </MenuWithDropdown>
        </ul>

        <div>
          <ul className="flex items-center rounded-bl-full rounded-tl-full bg-[#6543A5] text-[2.4rem] font-bold text-white">
            <li>
              <Link
                href="#"
                className="group relative flex items-center overflow-hidden rounded-bl-full rounded-tl-full bg-[#6543A5] px-[3rem] py-[3.5rem] leading-none text-white transition-all duration-300"
              >
                <div className="pointer-events-none absolute left-0 h-full w-full bg-black opacity-0 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-[2.2rem] h-[86%] w-[3.4rem] rounded-bl-full rounded-tl-full bg-[#6543A5] opacity-0 group-hover:opacity-100" />
                <span className="relative before:pointer-events-none before:absolute before:-bottom-[.87rem] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 group-hover:before:w-full">
                  Portal Login
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group relative -ml-[1.1rem] flex items-center overflow-hidden rounded-bl-full rounded-tl-full bg-[#6543A5] px-[3rem] py-[3.5rem] leading-none text-white transition-all duration-300"
              >
                <div className="pointer-events-none absolute left-0 h-full w-full bg-black opacity-0 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-[2.2rem] h-[86%] w-[3.4rem] rounded-bl-full rounded-tl-full bg-[#6543A5] opacity-0 group-hover:opacity-100" />
                <span className="relative before:pointer-events-none before:absolute before:-bottom-[.87rem] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 group-hover:before:w-full">
                  Dog Park
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group relative -ml-[1.1rem] flex items-center overflow-hidden rounded-bl-full rounded-tl-full bg-[#6543A5] px-[3rem] py-[3.5rem] leading-none text-white transition-all duration-300"
              >
                <div className="pointer-events-none absolute left-0 h-full w-full bg-black opacity-0 group-hover:opacity-100" />
                <span className="relative before:pointer-events-none before:absolute before:-bottom-[.87rem] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 group-hover:before:w-full">
                  Enroll Your Dog
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
