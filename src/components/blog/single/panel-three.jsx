/* eslint @next/next/no-img-element: "off" */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

import ArrowRight from '@assets/images/icons/arrow-right.svg';

gsap.registerPlugin(ScrollTrigger);

export default function PanelThree() {
  const recentArticles = [
    {
      id: 1,
      image: '/images/blog/blog-grid-1.jpg',
      title:
        'Dr. Universe: Is it true that seven human years equals one dog year?',
      excerpt:
        'As dogs age, their risk of developing osteoarthritis (OA) increases. Similar to OA in humans, OA in dogs has no cure, limiting treatment options to those that reduce...',
      date: '09.12.2022',
      category: 'SCNOW',
      url: '/blog/article-1',
    },
    {
      id: 2,
      image: '/images/blog/blog-grid-2.jpg',
      title: 'What Old Dogs Can Teach Us About Aging',
      excerpt:
        'As dogs age, their risk of developing osteoarthritis (OA) increases. Similar to OA in humans, OA in dogs has no cure, limiting treatment options to those that reduce...',
      date: '09.12.2022',
      category: 'Discovery',
      url: '/blog/article-1',
    },
    {
      id: 3,
      image: '/images/blog/blog-grid-3.jpg',
      title: 'What Old Dogs Can Teach Us About Aging',
      excerpt:
        'As dogs age, their risk of developing osteoarthritis (OA) increases. Similar to OA in humans, OA in dogs has no cure, limiting treatment options to those that reduce...',
      date: '09.12.2022',
      category: 'Discovery',
      url: '/blog/article-1',
    },
    {
      id: 4,
      image: '/images/blog/blog-grid-4.jpg',
      title: 'Dog Aging Project, a resource for scientists in many fields',
      excerpt:
        'As dogs age, their risk of developing osteoarthritis (OA) increases. Similar to OA in humans, OA in dogs has no cure, limiting treatment options to those that reduce...',
      date: '09.12.2022',
      category: 'UW Medicine Newsroom',
      url: '/blog/article-1',
    },
  ];

  return (
    <div className="pt-16 lg:pt-[13.333rem]">
      <h3 className="mb-4 text-4xl font-medium leading-none text-[#532EA4] lg:mb-[3.2rem] lg:text-[4.8rem] lg:-tracking-[0.114rem]">
        Related articles
      </h3>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-5 lg:gap-[5.333rem]">
        <div className="col-span-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-[5.333rem]">
          {recentArticles.map((article) => (
            <article
              key={article.title}
              className="relative w-full shrink-0 overflow-hidden rounded-[20px] bg-white md:flex-1 lg:rounded-[2.667rem]"
            >
              <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[20px] shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)] lg:rounded-[2.667rem]" />
              <div className="flex items-stretch justify-center overflow-hidden rounded-3xl text-[#250A60] lg:rounded-[2.667rem]">
                <div className="flex w-2/3 flex-col justify-between lg:p-[2.667rem]">
                  <div>
                    <p className="font-plex-mono mb-1 text-xs uppercase leading-tight text-[#532EA4] lg:mb-[.8rem] lg:text-[1.867rem]">
                      {article.category}
                    </p>
                    <Link
                      href={article.url}
                      className="font-medium leading-normal text-[#250A60] lg:text-[2.4rem] lg:leading-snug lg:-tracking-[0.048rem]"
                    >
                      {article.title}
                    </Link>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-plex-mono text-xs uppercase leading-none text-[#532EA4] lg:text-[1.867rem]">
                      {article.date}
                    </p>
                    <Link
                      href={article.url}
                      className="svg_icon ml-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#532EA4] text-transparent lg:ml-[1rem] lg:h-[3.333rem] lg:w-[3.333rem]"
                    >
                      <div className="w-5 lg:w-[1.7rem]">
                        <ArrowRight />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="w-1/3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full rounded-bl-full rounded-tl-full object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="col-span-1 grid grid-rows-2 gap-5 lg:gap-[5.333rem]">
          <div className="row-span-1">
            <h4 className="mb-4 text-xl font-medium leading-snug text-[#6543A5] lg:mb-[2.667rem] lg:text-[3.6rem]">
              Keep reading
            </h4>
            <Link
              href="#"
              className="inline-flex shrink-0 items-center gap-x-3 rounded-full bg-[#F7F3FF] px-6 py-4 font-semibold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
            >
              Next article
              <div className="lg:w-[1.7rem]">
                <ArrowRight />
              </div>
            </Link>
          </div>
          <div className="row-span-1">
            <h4 className="mb-4 text-xl font-medium leading-snug text-[#6543A5] lg:mb-[2.667rem] lg:text-[3.6rem]">
              Keep reading
            </h4>
            <Link
              href="#"
              className="inline-flex shrink-0 items-center gap-x-3 rounded-full bg-[#F7F3FF] px-6 py-4 font-semibold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
            >
              <div className="rotate-180 transform lg:w-[1.7rem]">
                <ArrowRight />
              </div>
              Back to blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
