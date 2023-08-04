/* eslint no-unused-expressions : "off" */
/* eslint @next/next/no-img-element: "off" */
import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Disclosure, Transition } from '@headlessui/react';
import Link from 'next/link';

import ArrowDownIcon from '@assets/images/icons/arrow-down-small.svg';
import { useRouter } from 'next/router';

function MenuWithDropdown({ text, children }) {
  return (
    <Disclosure>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of an icon. */
        <div className="mobile-dropdown-item z-10">
          <Disclosure.Button className="relative flex w-full items-center text-lg">
            <span className="mr-4">{text}</span>
            <div
              className={`svg_icon w-[14px] transform text-black ${
                open ? 'rotate-180 transform' : ''
              }`}
            >
              <ArrowDownIcon />
            </div>
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="flex flex-col gap-y-4 pt-5">
              {children}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}

export default function MobileHeader() {
  const router = useRouter();
  const header = useRef(null);
  const wrapper = useRef(null);
  const overlay_1 = useRef(null);
  const overlay_2 = useRef(null);
  const overlay_3 = useRef(null);
  const [tl, setTl] = useState();
  const [reversed, setReversed] = useState(true);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t = gsap
        .timeline()
        .paused(true)
        .to(header.current, {
          height: 'auto',
          duration: 0,
        })
        .to(
          wrapper.current,
          {
            opacity: 1,
            visibility: 'visible',
            duration: 0,
          },
          '<=',
        )
        .to(
          overlay_1.current,
          {
            duration: 0.3,
            xPercent: 100,
          },
          '<=',
        )
        .to(
          overlay_2.current,
          {
            duration: 0.3,
            xPercent: -100,
          },
          '<=',
        )
        .to(
          overlay_3.current,
          {
            duration: 0.3,
            xPercent: 100,
          },
          '<=',
        )
        .fromTo(
          '.mobile-dropdown-item',
          {
            scale: 0.7,
            opacity: 0,
            x: -60,
            stagger: 0.05,
          },
          {
            scale: 1,
            opacity: 1,
            x: 0,
            stagger: 0.05,
            duration: 0.3,
          },
          '+0.3',
        );

      setTl(t);
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    tl && tl.reversed(reversed);
  }, [reversed, tl]);

  return (
    <div
      ref={header}
      className="mobile-header relative z-[2] h-14 w-full lg:hidden"
    >
      <div className="flex items-center justify-between bg-white px-3">
        <Link
          href="/"
          onClick={() => {
            setReversed(true);
            router.push('/');
          }}
          className="mobile-header__logo relative z-[6]"
        >
          <img src="/images/dap-logo.svg" alt="DAP Logo" className="w-36" />
        </Link>

        <button
          type="button"
          onClick={() => {
            if (tl.paused()) {
              tl.play();
            }
            setReversed(!reversed);
          }}
          className={`nav ${reversed ? '' : 'open'} z-[12] lg:hidden`}
        >
          <div className="nav-btn">
            <div className="btn-bar menu" />
            <div className="btn-bar menu" />
            <div className="btn-bar menu" />
            <div className="btn-bar close" />
            <div className="btn-bar close" />
          </div>
        </button>
      </div>

      <div ref={wrapper} className="invisible relative z-[5] opacity-0">
        <div
          ref={overlay_1}
          className="fixed -left-full top-0 h-1/3 w-full bg-white"
        />
        <div
          ref={overlay_2}
          className="fixed left-full top-1/3 h-1/3 w-full bg-white"
        />
        <div
          ref={overlay_3}
          className="fixed -left-full top-2/3 h-1/3 w-full bg-white"
        />

        <div className="flex min-h-[calc(100vh-70px)] w-full items-center justify-center">
          <div className="flex flex-col gap-y-5 font-bold text-black">
            <MenuWithDropdown href="/project-details" text="Project Details">
              <Link
                onClick={() => {
                  setReversed(true);
                  router.push('/triad-fast-track');
                }}
                href="/triad-fast-track"
              >
                Project Overview
              </Link>
              <Link onClick={() => setReversed(true)} href="/veterinarians">
                Veterinarians
              </Link>
              <Link onClick={() => setReversed(true)} href="/our-supporters">
                Our Supporters
              </Link>
              <Link onClick={() => setReversed(true)} href="/our-team">
                Our Team
              </Link>
              <Link onClick={() => setReversed(true)} href="#">
                Contact Us
              </Link>
            </MenuWithDropdown>

            <MenuWithDropdown href="#" text="Research">
              <Link onClick={() => setReversed(true)} href="/publications">
                Publications
              </Link>
              <Link onClick={() => setReversed(true)} href="/data-access">
                Data Access
              </Link>
              <Link onClick={() => setReversed(true)} href="/careers">
                Careers
              </Link>
            </MenuWithDropdown>

            <MenuWithDropdown href="#" text="Media">
              <Link onClick={() => setReversed(true)} href="/media">
                News Coverage
              </Link>
              <Link onClick={() => setReversed(true)} href="/press-resources">
                Press Resources
              </Link>
            </MenuWithDropdown>

            <MenuWithDropdown href="/blog" text="Blog">
              <Link
                onClick={() => setReversed(true)}
                href="/blog/category/scientific-results"
              >
                Scientific Results
              </Link>
              <Link
                onClick={() => setReversed(true)}
                href="/blog/category/inside-science"
              >
                Inside Science
              </Link>
              <Link
                onClick={() => setReversed(true)}
                href="/blog/category/inside-cognition"
              >
                Inside Cognition
              </Link>
              <Link
                onClick={() => setReversed(true)}
                href="/blog/category/inside-foundation"
              >
                Inside Foundation
              </Link>
              <Link
                onClick={() => setReversed(true)}
                href="/blog/category/inside-precision"
              >
                Inside Precision
              </Link>
              <Link
                onClick={() => setReversed(true)}
                href="/blog/category/senior-dog-care"
              >
                Aging Dog Care
              </Link>
            </MenuWithDropdown>

            <MenuWithDropdown href="#" text="FAQ">
              <Link onClick={() => setReversed(true)} href="#">
                Project FAQ
              </Link>
              <Link onClick={() => setReversed(true)} href="#">
                Participant FAQ
              </Link>
              <Link onClick={() => setReversed(true)} href="#">
                Veterinarian FAQ
              </Link>
            </MenuWithDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
