import { gsap } from 'gsap';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';

import ArrowWithCircle from '@assets/images/icons/arrow-with-circle.svg';

export default function PanelOne() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const panel_1 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .addLabel('section1_Start')
        .fromTo(
          elm_1.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start',
        )
        .fromTo(
          elm_2.current,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1 },
          'section1_Start',
        )
        .fromTo(
          '.featured-story',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 },
          'section1_Start+=.2',
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  const featuredMediaStories = [
    {
      image: '/images/media/scnow.jpg',
      title:
        'Dr. Universe: Is it true that seven human years equals one dog year?',
      date: '09.12.2022',
      category: 'SCNOW',
      link: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/discover.jpg',
      title: 'What Old Dogs Can Teach Us About Aging',
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
      title: 'The secret to helping your dog live longer',
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

  return (
    <>
      <div className="relative flex flex-wrap-reverse items-center px-5 pb-16 md:pb-20 lg:flex-nowrap lg:pb-[16rem] lg:pl-[8%] lg:pr-[2%]">
        <div className="mt-16 w-full md:mt-20 lg:mt-0 lg:w-3/4">
          <h1
            ref={elm_1}
            className="text-4xl leading-tight text-[#532EA4] md:text-5xl lg:max-w-[92rem] lg:text-[10.667rem] lg:leading-none"
          >
            Dog Aging Project in the news
          </h1>
        </div>
      </div>
      <div className="px-5 pb-24 md:pb-40 lg:px-[2%] lg:pb-[20rem]">
        <h2
          ref={elm_2}
          className="mb-6 text-4xl font-medium leading-none text-[#532EA4] lg:mb-[6.4rem] lg:text-[6.267rem] lg:-tracking-[0.114rem]"
        >
          Featured Media Stories
        </h2>
        {featuredMediaStories.length > 0 ? (
          <div
            ref={panel_1}
            className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-[5.333rem]"
          >
            {featuredMediaStories.map((story) => (
              <div
                key={story.title}
                className="featured-story relative flex w-full flex-col items-stretch overflow-hidden rounded-[20px] bg-white lg:rounded-[4rem]"
              >
                <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[20px] shadow-[0px_0px_7px_0px_rgba(0,0,0,0.70)_inset] lg:rounded-[4rem]" />
                <div className="shrink-0 overflow-hidden rounded-[20px] lg:rounded-[4rem]">
                  <img src={story.image} alt={story.title} className="w-full" />
                </div>
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
    </>
  );
}
