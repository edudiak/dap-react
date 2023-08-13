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
    {
      id: 5,
      image: '/images/blog/blog-grid-5.jpg',
      title: 'The secret to helping your dog live longer',
      excerpt:
        'As dogs age, their risk of developing osteoarthritis (OA) increases. Similar to OA in humans, OA in dogs has no cure, limiting treatment options to those that reduce...',
      date: '09.12.2022',
      category: 'Telegraph',
      url: '/blog/article-1',
    },
    {
      id: 6,
      image: '/images/blog/blog-grid-6.jpg',
      title: 'The secret to helping your dog live longer',
      excerpt:
        'As dogs age, their risk of developing osteoarthritis (OA) increases. Similar to OA in humans, OA in dogs has no cure, limiting treatment options to those that reduce...',
      date: '09.12.2022',
      category: 'Telegraph',
      url: '/blog/article-1',
    },
    {
      id: 7,
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
      id: 8,
      image: '/images/blog/blog-grid-2.jpg',
      title: 'What Old Dogs Can Teach Us About Aging',
      excerpt:
        'As dogs age, their risk of developing osteoarthritis (OA) increases. Similar to OA in humans, OA in dogs has no cure, limiting treatment options to those that reduce...',
      date: '09.12.2022',
      category: 'Discovery',
      url: '/blog/article-1',
    },
    {
      id: 9,
      image: '/images/blog/blog-grid-3.jpg',
      title: 'What Old Dogs Can Teach Us About Aging',
      excerpt:
        'As dogs age, their risk of developing osteoarthritis (OA) increases. Similar to OA in humans, OA in dogs has no cure, limiting treatment options to those that reduce...',
      date: '09.12.2022',
      category: 'Discovery',
      url: '/blog/article-1',
    },
    {
      id: 10,
      image: '/images/blog/blog-grid-4.jpg',
      title: 'Dog Aging Project, a resource for scientists in many fields',
      excerpt:
        'As dogs age, their risk of developing osteoarthritis (OA) increases. Similar to OA in humans, OA in dogs has no cure, limiting treatment options to those that reduce...',
      date: '09.12.2022',
      category: 'UW Medicine Newsroom',
      url: '/blog/article-1',
    },
    {
      id: 11,
      image: '/images/blog/blog-grid-5.jpg',
      title: 'The secret to helping your dog live longer',
      excerpt:
        'As dogs age, their risk of developing osteoarthritis (OA) increases. Similar to OA in humans, OA in dogs has no cure, limiting treatment options to those that reduce...',
      date: '09.12.2022',
      category: 'Telegraph',
      url: '/blog/article-1',
    },
    {
      id: 12,
      image: '/images/blog/blog-grid-6.jpg',
      title: 'The secret to helping your dog live longer',
      excerpt:
        'As dogs age, their risk of developing osteoarthritis (OA) increases. Similar to OA in humans, OA in dogs has no cure, limiting treatment options to those that reduce...',
      date: '09.12.2022',
      category: 'Telegraph',
      url: '/blog/article-1',
    },
  ];

  return (
    <div className="mt-8 px-5 md:mt-14 lg:mt-0 lg:px-[2%]">
      <h2 className="mb-4 text-4xl font-medium leading-none text-[#532EA4] lg:mb-[3.2rem] lg:text-[4.8rem] lg:-tracking-[0.114rem]">
        Popular articles
      </h2>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-[5.333rem]">
        {recentArticles.map((article) => (
          <article
            key={article.id}
            className="relative w-full shrink-0 overflow-hidden rounded-[20px] bg-white md:flex-1 lg:rounded-[2.667rem]"
          >
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[20px] shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)] lg:rounded-[2.667rem]" />
            <div className="flex h-full items-stretch justify-center overflow-hidden rounded-3xl text-[#250A60] lg:min-h-[20.6rem] lg:rounded-[2.667rem]">
              <div className="flex w-7/12 flex-col justify-between p-4 lg:p-[3rem]">
                <div>
                  <div className="font-plex-mono mb-4 flex flex-wrap justify-between gap-y-4 text-xs uppercase leading-none text-[#532EA4] md:flex-nowrap lg:mb-[2.667rem] lg:text-[1.867rem]">
                    <p>{article.date}</p>
                    <p className="leading-tight">{article.category}</p>
                  </div>
                  <Link
                    href={article.url}
                    className="mb-3 block font-medium leading-normal text-[#250A60] lg:mb-[2rem] lg:text-[2.4rem] lg:leading-snug lg:-tracking-[0.048rem]"
                  >
                    {article.title}
                  </Link>
                  <div className="mb-3 leading-tight text-[#7B7B7B] lg:mb-[4rem] lg:text-[2.133rem]">
                    {article.excerpt}
                  </div>
                </div>
                <Link
                  href={article.url}
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
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full rounded-bl-full rounded-tl-full object-cover"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-x-[1rem] text-xl font-bold leading-none text-[#532EA4] lg:mt-[8rem] lg:text-[2.8rem]">
        <button type="button" className="-tracking-[4px] lg:-tracking-[.5rem]">
          {'<<'}
        </button>
        <button type="button" className="mx-2 lg:mx-[1rem]">
          {'<'}
        </button>

        {[...Array(5)].map((item, index) => (
          <button
            key={item}
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#532EA4] transition hover:bg-[#532EA4] hover:text-white lg:h-[4.267rem] lg:w-[4.267rem] lg:border-[0.267rem]"
          >
            {index + 1}
          </button>
        ))}

        <button type="button" className="mx-2 lg:mx-[1rem]">
          {'>'}
        </button>
        <button type="button" className="-tracking-[4px] lg:-tracking-[.5rem]">
          {'>>'}
        </button>
      </div>
    </div>
  );
}
