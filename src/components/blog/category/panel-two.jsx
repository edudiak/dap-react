/* eslint @next/next/no-img-element: "off" */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

import CategoryList from '../category-list';

import ArrowRight from '@assets/images/icons/arrow-right.svg';

gsap.registerPlugin(ScrollTrigger);

export default function PanelTwo() {
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

  return (
    <div className="px-5 pb-10 md:pb-16 lg:px-[2%] lg:pb-[8rem]">
      <div className="grid grid-cols-1 gap-x-6 md:grid-cols-7 lg:gap-x-[5.333rem]">
        <div className="col-span-full lg:col-span-5">
          <h2 className="mb-4 text-4xl font-medium leading-none text-[#532EA4] lg:mb-[3.2rem] lg:text-[4.8rem] lg:-tracking-[0.114rem]">
            Featured article00
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

        <div className="col-span-full mt-14 md:mt-20 lg:col-span-2 lg:mt-0">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
