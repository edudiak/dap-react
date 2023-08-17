import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import CategoryList from './category-list';

import ArrowRight from '@assets/images/icons/arrow-right.svg';
import Link from 'next/link';

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

  const popularArticles = [
    {
      image: '/images/dogs/dog-1-min.jpg',
      title:
        'Dr. Universe: Is it true that seven human years equals one dog year?',
      date: '09.12.2022',
      category: 'SCNOW',
      url: '/blog/article-1',
    },
    {
      image: '/images/dogs/dog-2-min.jpg',
      title: 'What Old Dogs Can Teach Us About Aging',
      date: '09.12.2022',
      category: 'Discovery',
      url: '/blog/article-1',
    },
    {
      image: '/images/dogs/dog-3-min.jpg',
      title: 'Dog Aging Project, a resource for scientists in many fields',
      date: '09.12.2022',
      category: 'UW Medicine Newsroom',
      url: '/blog/article-1',
    },
    {
      image: '/images/dogs/dog-4-min.jpg',
      title: 'The secret to helping your dog live longer',
      date: '09.12.2022',
      category: 'Telegraph',
      url: '/blog/article-1',
    },
  ];

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
    <div className="relative flex flex-wrap justify-between px-5 pb-16 md:pb-20 lg:flex-nowrap lg:pb-[10rem] lg:pl-[4%] lg:pr-[4%]">
      <div className="mt-20 w-full lg:mt-[5rem]">
        <div className="mb-16 lg:mb-[12rem] lg:pl-[4%]">
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

        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-y-16 lg:grid-cols-6 lg:gap-x-[2rem]">
          <div className="col-span-full pr-5 lg:col-span-3 lg:pr-[3.333rem]">
            <h2 className="mb-4 text-4xl font-medium leading-none text-[#532EA4] lg:mb-[3.2rem] lg:text-[4.8rem] lg:-tracking-[0.114rem]">
              Featured article
            </h2>

            <div className="relative w-full shrink-0 transform overflow-hidden rounded-[20px] bg-white md:flex-1 lg:rounded-[4rem]">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[20px] shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)] lg:rounded-[4rem]" />
              <div className="p-5 lg:p-[4rem]">
                <div className="font-plex-mono flex flex-wrap justify-between gap-y-4 text-xs uppercase leading-none text-[#532EA4] md:flex-nowrap lg:text-[1.867rem]">
                  <p>{featuredArticle.date}</p>
                  <p className="leading-tight">{featuredArticle.category}</p>
                </div>
                <Link
                  href={featuredArticle.url}
                  className="mb-3 mt-3 block text-xl font-medium leading-tight text-[#250A60] lg:mb-[2rem] lg:mt-[2rem] lg:text-[3.6rem]"
                >
                  {featuredArticle.title}
                </Link>
                <div className="mb-3 leading-tight text-[#7B7B7B] lg:mb-[4rem] lg:text-[2.133rem]">
                  {featuredArticle.excerpt}
                </div>
                <Link
                  href={featuredArticle.url}
                  className="flex items-center font-bold text-[#532EA4] lg:text-[2.133rem]"
                >
                  Read More
                  <div className="svg_icon ml-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#532EA4] text-transparent lg:ml-[1rem] lg:h-[3.3rem] lg:w-[3.3rem]">
                    <div className="w-[10px] lg:w-[1.7rem]">
                      <ArrowRight />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="pointer-events-none overflow-hidden rounded-tl-full rounded-tr-full lg:-mt-[4rem]">
                <img
                  src={featuredArticle.image}
                  className="w-full object-cover"
                  alt={featuredArticle.title}
                />
              </div>
            </div>
          </div>

          <div className="col-span-full mt-8 lg:col-span-3 lg:mt-0">
            <h2 className="mb-4 text-4xl font-medium leading-none text-[#532EA4] lg:mb-[3.2rem] lg:text-[4.8rem] lg:-tracking-[0.114rem]">
              Popular articles
            </h2>

            <div className="flex flex-col gap-y-5 lg:gap-y-[2.667rem]">
              {popularArticles.map((article) => (
                <article
                  key={article.title}
                  className="relative w-full shrink-0 overflow-hidden rounded-[20px] bg-white md:flex-1 lg:rounded-[2.667rem]"
                >
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[20px] shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)] lg:rounded-[2.667rem]" />
                  <div className="flex flex-wrap-reverse items-stretch justify-center gap-y-8 overflow-hidden rounded-3xl text-[#250A60] lg:rounded-[2.667rem]">
                    <div className="flex w-full flex-col justify-between p-4 sm:w-2/3 lg:p-[2.667rem]">
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
                      <div className="mt-2 flex items-center justify-between">
                        <p className="font-plex-mono text-xs uppercase leading-none text-[#532EA4] lg:text-[1.867rem]">
                          {article.date}
                        </p>
                        <Link
                          href={article.url}
                          className="svg_icon ml-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#532EA4] text-transparent lg:ml-[1rem] lg:h-[3.333rem] lg:w-[3.333rem]"
                        >
                          <div className="w-[12px] lg:w-[1.7rem]">
                            <ArrowRight />
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="max-h-[20.5rem] w-full rounded-bl-full rounded-tl-full object-cover"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full shrink-0 lg:ml-[2.667rem] lg:max-w-[29rem]">
        <CategoryList />
      </div>
    </div>
  );
}
