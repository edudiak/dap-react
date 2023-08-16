import { gsap } from 'gsap';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import CategoryList from '../category-list';

import ArrowRight from '@assets/images/icons/arrow-right.svg';

export default function PanelOne() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);

  const featuredArticle = {
    title:
      'Demographic factor associated with joint supplement use in dogs from the Dog Aging Project',
    excerpt:
      'As dogs age, their risk of developing osteoarthritis (OA) increases. Similar to OA in humans, OA in dogs has no cure, limiting treatment options to those that reduce...',
    category: 'Scientific Results',
    date: '09.12.2022',
    url: '/blog/article-1',
    image: '/images/blog/blog-grid-2.jpg',
  };

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
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          'section1_Start+=0.1',
        );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative flex justify-between px-5 pb-16 md:pb-20 lg:flex-nowrap lg:pb-[10rem] lg:pl-[4%] lg:pr-[4%]">
      <div className="mt-20 w-full lg:mt-[5rem]">
        <div className="mb-20 lg:mb-[12rem] lg:pl-[4%]">
          <h1
            ref={elm_1}
            className="text-4xl leading-tight text-[#532EA4] md:text-5xl lg:max-w-[112rem] lg:text-[10.667rem] lg:leading-none"
          >
            Our Science Explained
          </h1>
          <div
            ref={elm_2}
            className="mt-6 text-lg leading-snug text-[#250A60] md:text-xl lg:mt-[3rem] lg:max-w-[112rem] lg:text-[3.6rem] lg:leading-snug"
          >
            Our participants and their dogs make our science possible. The
            articles here explain our research design and scientific discoveries
            in clear, concise language that is accessible to all.
          </div>
        </div>

        <div className="">
          <h2 className="mb-4 text-4xl font-medium leading-none text-[#532EA4] lg:mb-[3.2rem] lg:text-[4.8rem] lg:-tracking-[0.114rem]">
            Featured article
          </h2>

          <article
            key={featuredArticle.id}
            className="relative w-full shrink-0 overflow-hidden rounded-[20px] bg-white md:flex-1 lg:h-[calc(100%-8rem)] lg:rounded-[2.667rem]"
          >
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[20px] shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)] lg:rounded-[2.667rem]" />
            <div className="flex h-full items-stretch justify-center overflow-hidden rounded-3xl text-[#250A60] lg:min-h-[20.6rem] lg:rounded-[2.667rem]">
              <div className="flex w-7/12 flex-col justify-between p-5 lg:p-[3rem]">
                <div>
                  <div className="font-plex-mono mb-4 flex flex-wrap justify-between gap-y-4 text-xs uppercase leading-none text-[#532EA4] md:flex-nowrap lg:mb-[2.667rem] lg:text-[1.867rem]">
                    <p>{featuredArticle.date}</p>
                    <p className="leading-tight">{featuredArticle.category}</p>
                  </div>
                  <Link
                    href={featuredArticle.url}
                    className="mb-3 block text-xl font-medium leading-tight text-[#250A60] lg:mb-[2rem] lg:text-[4.8rem] lg:leading-tight lg:-tracking-[0.048rem]"
                  >
                    {featuredArticle.title}
                  </Link>
                  <div className="mb-3 leading-tight text-[#7B7B7B] lg:mb-[4rem] lg:text-[2.4rem]">
                    {featuredArticle.excerpt}
                  </div>
                </div>
                <Link
                  href={featuredArticle.url}
                  className="flex items-center font-semibold text-[#532EA4] lg:text-[2.133rem]"
                >
                  Read More
                  <div className="svg_icon ml-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#532EA4] text-transparent lg:ml-[1rem] lg:h-[3.333rem] lg:w-[3.333rem]">
                    <div className="lg:w-[1.7rem]">
                      <ArrowRight />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-5/12">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full w-full rounded-bl-full rounded-tl-full object-cover"
                />
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="w-full shrink-0 lg:ml-[2.667rem] lg:max-w-[40rem]">
        <CategoryList />
      </div>
    </div>
  );
}
