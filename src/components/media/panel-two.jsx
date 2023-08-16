import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';

import ArrowWithCircle from '@assets/images/icons/arrow-with-circle.svg';

gsap.registerPlugin(ScrollTrigger);

export default function PanelTwo() {
  const recentMediaStories = [
    {
      image: '/images/media/scnow.jpg',
      title: 'The secret to helping your dog live longer',
      date: '09.12.2022',
      category: 'SCNOW',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/discover.jpg',
      title: 'Last Year’s Top 5 Biotech Trends',
      date: '09.12.2022',
      category: 'Discovery',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/uw-medicine.jpg',
      title: 'Dog Aging Project, a resource for scientists in many fields',
      date: '09.12.2022',
      category: 'UW Medicine Newsroom',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/the-telegraph.jpg',
      title: 'What Old Dogs Can Teach Us About Aging',
      date: '09.12.2022',
      category: 'Telegraph',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/healthcare.jpg',
      title: 'Last Year’s Top 5 Biotech Trends',
      date: '09.12.2022',
      category: 'Healthcare Packaging',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/aaha.jpg',
      title: 'The Dog Aging Project checks in',
      date: '09.12.2022',
      category: 'NEWStat, American Animal Hospital Association',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/scnow.jpg',
      title: 'The secret to helping your dog live longer',
      date: '09.12.2022',
      category: 'SCNOW',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/discover.jpg',
      title: 'Last Year’s Top 5 Biotech Trends',
      date: '09.12.2022',
      category: 'Discovery',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/uw-medicine.jpg',
      title: 'Dog Aging Project, a resource for scientists in many fields',
      date: '09.12.2022',
      category: 'UW Medicine Newsroom',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/the-telegraph.jpg',
      title: 'What Old Dogs Can Teach Us About Aging',
      date: '09.12.2022',
      category: 'Telegraph',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/healthcare.jpg',
      title: 'Last Year’s Top 5 Biotech Trends',
      date: '09.12.2022',
      category: 'Healthcare Packaging',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/aaha.jpg',
      title: 'The Dog Aging Project checks in',
      date: '09.12.2022',
      category: 'NEWStat, American Animal Hospital Association',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/scnow.jpg',
      title: 'The secret to helping your dog live longer',
      date: '09.12.2022',
      category: 'SCNOW',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/discover.jpg',
      title: 'Last Year’s Top 5 Biotech Trends',
      date: '09.12.2022',
      category: 'Discovery',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/uw-medicine.jpg',
      title: 'Dog Aging Project, a resource for scientists in many fields',
      date: '09.12.2022',
      category: 'UW Medicine Newsroom',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/the-telegraph.jpg',
      title: 'What Old Dogs Can Teach Us About Aging',
      date: '09.12.2022',
      category: 'Telegraph',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/healthcare.jpg',
      title: 'Last Year’s Top 5 Biotech Trends',
      date: '09.12.2022',
      category: 'Healthcare Packaging',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/aaha.jpg',
      title: 'The Dog Aging Project checks in',
      date: '09.12.2022',
      category: 'NEWStat, American Animal Hospital Association',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/scnow.jpg',
      title: 'The secret to helping your dog live longer',
      date: '09.12.2022',
      category: 'SCNOW',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/discover.jpg',
      title: 'Last Year’s Top 5 Biotech Trends',
      date: '09.12.2022',
      category: 'Discovery',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/uw-medicine.jpg',
      title: 'Dog Aging Project, a resource for scientists in many fields',
      date: '09.12.2022',
      category: 'UW Medicine Newsroom',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/the-telegraph.jpg',
      title: 'What Old Dogs Can Teach Us About Aging',
      date: '09.12.2022',
      category: 'Telegraph',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/healthcare.jpg',
      title: 'Last Year’s Top 5 Biotech Trends',
      date: '09.12.2022',
      category: 'Healthcare Packaging',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/aaha.jpg',
      title: 'The Dog Aging Project checks in',
      date: '09.12.2022',
      category: 'NEWStat, American Animal Hospital Association',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
  ];

  const elm_1 = useRef(null);
  const panel_1 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_1.current,
            start: 'top bottom',
            end: 'bottom 80%',
            scrub: true,
          },
        })
        .fromTo(elm_1.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel_1.current,
            start: 'top 70%',
            end: 'bottom bottom',
          },
        })
        .fromTo(
          '.recent-story',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 },
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="px-5 lg:px-[2%]">
      <h2
        ref={elm_1}
        className="mb-6 text-4xl font-medium leading-none text-[#532EA4] lg:mb-[6.4rem] lg:text-[6.267rem] lg:-tracking-[0.114rem]"
      >
        Recent Media Stories
      </h2>
      {recentMediaStories.length > 0 ? (
        <div
          ref={panel_1}
          className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:gap-[5.333rem]"
        >
          {recentMediaStories.map((story) => (
            <div
              key={story.title}
              className="recent-story relative w-full overflow-hidden rounded-[20px] bg-white lg:rounded-[4rem]"
            >
              <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[20px] shadow-[0px_0px_7px_0px_rgba(0,0,0,0.70)_inset] lg:rounded-[4rem]" />
              <div className="flex h-full flex-wrap items-stretch p-4 lg:p-[2.667rem]">
                <div className="w-full">
                  <p className="font-plex-mono mb-2 text-xs uppercase leading-none text-[#6543A5] lg:mb-[1.333rem] lg:text-[1.867rem]">
                    {story.date}
                  </p>
                  <p className="mb-4 text-lg font-medium leading-snug text-[#341D61] lg:mb-[2.667rem] lg:text-[3.6rem]">
                    {story.title}
                  </p>
                </div>
                <div className="mt-auto flex w-full items-center justify-between text-[#6543A5]">
                  <p className="font-plex-mono w-1/2 text-xs uppercase leading-snug lg:text-[1.867rem]">
                    {story.category}
                  </p>
                  <p className="flex w-1/2 items-center justify-end gap-x-3 text-sm font-medium lg:gap-x-[1.333rem] lg:text-[2.133rem]">
                    <Link href={story.link}>Go to the article</Link>
                    <div className="svg_icon w-5 text-transparent lg:w-[3.333rem]">
                      <ArrowWithCircle />
                    </div>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No stories found!</p>
      )}
    </div>
  );
}
