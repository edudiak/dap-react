/* eslint @next/next/no-img-element: "off" */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

import ArrowRight from '@assets/images/icons/arrow-right.svg';
import CategoryList from './category-list';

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

  return (
    <div className="px-5 pb-10 md:pb-16 lg:px-[2%] lg:pb-[8rem]">
      <div className="grid grid-cols-1 gap-x-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-[2rem]">
        <div className="col-span-2 pr-5 lg:pr-[3.333rem]">
          <h2 className="mb-4 text-4xl font-medium leading-none text-[#532EA4] lg:mb-[3.2rem] lg:text-[4.8rem] lg:-tracking-[0.114rem]">
            Featured article
          </h2>

          <div className="relative w-full shrink-0 transform overflow-hidden rounded-[20px] bg-white md:flex-1 lg:rounded-[4rem]">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[20px] shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)] lg:rounded-[4rem]" />
            <div className="p-5 lg:p-[4rem]">
              <div className="font-plex-mono flex justify-between text-xs uppercase leading-none text-[#532EA4] lg:text-[1.867rem]">
                <p>{featuredArticle.date}</p>
                <p>{featuredArticle.category}</p>
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
              <img src={featuredArticle.image} alt={featuredArticle.title} />
            </div>
          </div>
        </div>

        <div className="col-span-2">
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
                        <div className="lg:w-[1.7rem]">
                          <ArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="w-1/3">
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

        <div className="col-span-1">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
