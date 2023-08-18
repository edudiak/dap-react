/* eslint operator-linebreak: "off" */

import Link from 'next/link';

import ArrowDownIcon from '@assets/images/icons/arrow-down-small.svg';

function MenuWithDropdown({ href, text, children }) {
  return (
    <li className="group relative">
      <Link
        href={href}
        className="duration-400 group relative flex items-center rounded-tl-[2.778vw] rounded-tr-[2.778vw] bg-white px-[1.563vw] py-[1.875vw] leading-none transition group-hover:bg-black group-hover:text-white"
      >
        <span className="mr-[0.521vw]">{text}</span>
        <div className="svg_icon w-[0.833vw] translate-y-0 transform opacity-100 transition-all duration-300 group-hover:translate-y-[1.042vw] group-hover:text-white group-hover:opacity-0">
          <ArrowDownIcon />
        </div>
        <div className="svg_icon absolute right-[1.563vw] w-[0.833vw] -translate-y-[1.042vw] transform text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowDownIcon />
        </div>
      </Link>
      <ul className="duration-400 absolute z-[20] flex min-w-[14.931vw] origin-top scale-y-0 transform flex-col bg-black px-[1.563vw] pb-[1.042vw] pt-[0.521vw] opacity-0 transition group-hover:scale-y-100 group-hover:opacity-100">
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
        className="relative flex items-center py-[1.042vw] leading-none text-white transition-all duration-300 before:absolute before:bottom-[0.451vw] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
      >
        <span>{text}</span>
        <div className="arrow-1 svg_icon absolute right-0 w-[0.833vw] opacity-100 transition-all duration-300">
          <ArrowDownIcon />
        </div>
        <div className="arrow-2 svg_icon absolute right-0 w-[0.833vw] opacity-0 transition-all duration-300">
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
            className="h-[4.861vw] w-auto"
          />
        </Link>
        <ul className="primary-nav flex items-center text-[1.250vw] font-bold text-black">
          <MenuWithDropdown href="/project-details" text="Project Details">
            <DropdownMenuItem
              href="/triad-fast-track"
              text="Project Overview"
            />
            <DropdownMenuItem href="/veterinarians" text="Veterinarians" />
            <DropdownMenuItem href="/our-supporters" text="Our Supporters" />
            <DropdownMenuItem href="/our-team" text="Our Team" />
            <DropdownMenuItem href="/contact-us" text="Contact Us" />
          </MenuWithDropdown>

          <MenuWithDropdown href="/publications" text="Research">
            <DropdownMenuItem href="/publications" text="Publications" />
            <DropdownMenuItem href="/data-access" text="Data Access" />
            <DropdownMenuItem href="/careers" text="Careers" />
          </MenuWithDropdown>

          <MenuWithDropdown href="#" text="Media">
            <DropdownMenuItem href="/media" text="News Coverage" />
            <DropdownMenuItem href="/press-enquiries" text="Press Enquiries" />
          </MenuWithDropdown>

          <MenuWithDropdown href="/blog" text="Blog">
            <DropdownMenuItem
              href="/blog/category/scientific-results"
              text="Scientific Results"
            />
            <DropdownMenuItem
              href="/blog/category/inside-science"
              text="Inside Science"
            />
            <DropdownMenuItem
              href="/blog/category/inside-cognition"
              text="Inside Cognition"
            />
            <DropdownMenuItem
              href="/blog/category/inside-foundation"
              text="Inside Foundation"
            />
            <DropdownMenuItem
              href="/blog/category/inside-precision"
              text="Inside Precision"
            />
            <DropdownMenuItem
              href="/blog/category/senior-dog-care"
              text="Senior Dog Care"
            />
          </MenuWithDropdown>

          <MenuWithDropdown href="#" text="FAQ">
            <DropdownMenuItem href="#" text="Project FAQ" />
            <DropdownMenuItem href="#" text="Participant FAQ" />
            <DropdownMenuItem href="#" text="Veterinarian FAQ" />
          </MenuWithDropdown>
        </ul>

        <div>
          <ul className="flex items-center rounded-bl-full rounded-tl-full bg-[#6543A5] text-[1.250vw] font-bold text-white lg:items-stretch">
            <li>
              <a
                href="https://portal.dogagingproject.org/"
                target="_blank"
                className="group relative flex items-center overflow-hidden rounded-bl-full rounded-tl-full bg-[#6543A5] px-[1.563vw] py-[1.875vw] leading-none text-white transition-all duration-300"
                rel="noreferrer"
              >
                <div className="pointer-events-none absolute left-0 h-full w-full bg-black opacity-0 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-[1.111vw] h-[86%] w-[1.736vw] rounded-bl-full rounded-tl-full bg-[#6543A5] opacity-0 group-hover:opacity-100" />
                <span className="relative before:pointer-events-none before:absolute before:-bottom-[0.451vw] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 group-hover:before:w-full">
                  Portal Login
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://dogpark.dogagingproject.org/"
                target="_blank"
                className="group relative -ml-[0.573vw] flex items-center overflow-hidden rounded-bl-full rounded-tl-full bg-[#6543A5] px-[1.563vw] py-[1.875vw] leading-none text-white transition-all duration-300"
                rel="noreferrer"
              >
                <div className="pointer-events-none absolute left-0 h-full w-full bg-black opacity-0 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-[1.111vw] h-[86%] w-[1.736vw] rounded-bl-full rounded-tl-full bg-[#6543A5] opacity-0 group-hover:opacity-100" />
                <span className="relative before:pointer-events-none before:absolute before:-bottom-[0.451vw] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 group-hover:before:w-full">
                  Dog Park
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://portal.dogagingproject.org/nomination"
                className="group relative -ml-[0.573vw] flex items-center overflow-hidden rounded-bl-full rounded-tl-full bg-[#6543A5] px-[1.563vw] py-[1.875vw] leading-none text-white transition-all duration-300"
              >
                <div className="pointer-events-none absolute left-0 h-full w-full bg-black opacity-0 group-hover:opacity-100" />
                <span className="relative before:pointer-events-none before:absolute before:-bottom-[0.451vw] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 group-hover:before:w-full">
                  Enroll Your Dog
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
