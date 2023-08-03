/* eslint @next/next/no-img-element: "off" */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

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
    image: '/images/blog/blog-grid-1.jpg',
  };

  const popularArticles = [
    {
      image: '/images/media/scnow.jpg',
      title:
        'Dr. Universe: Is it true that seven human years equals one dog year?',
      date: '09.12.2022',
      category: 'SCNOW',
      url: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/discover.jpg',
      title: 'What Old Dogs Can Teach Us About Aging',
      date: '09.12.2022',
      category: 'Discovery',
      url: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/uw-medicine.jpg',
      title: 'Dog Aging Project, a resource for scientists in many fields',
      date: '09.12.2022',
      category: 'UW Medicine Newsroom',
      url: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
    {
      image: '/images/media/the-telegraph.jpg',
      title: 'The secret to helping your dog live longer',
      date: '09.12.2022',
      category: 'Telegraph',
      url: '/media/featured-media-stories/dr-universe-is-it-true-that-seven-human-years-equals-one-dog-year',
    },
  ];

  const categories = [
    {
      title: 'Scientific Results',
      slug: 'scientific-results',
    },
    {
      title: 'Inside Science',
      slug: 'inside-science',
    },
    {
      title: 'Inside Foundation',
      slug: 'inside-foundation',
    },
    {
      title: 'Inside Precision',
      slug: 'inside-precision',
    },
    {
      title: 'Canine Cognition',
      slug: 'canine-cognition',
    },
    {
      title: 'Senior Dog Care',
      slug: 'senior-dog-care',
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
              <div className="font-plex-mono flex justify-between text-xs uppercase text-[#532EA4] lg:text-[1.867rem]">
                <div>{featuredArticle.date}</div>
                <div>{featuredArticle.category}</div>
              </div>
              <h4 className="mb-3 mt-3 text-xl font-medium leading-tight text-[#250A60] lg:mb-[3rem] lg:mt-[2rem] lg:text-[3.6rem]">
                {featuredArticle.title}
              </h4>
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
                <div className="flex items-stretch justify-center overflow-hidden rounded-3xl text-[#250A60] lg:min-h-[20.6rem] lg:rounded-[2.667rem]">
                  <div className="flex w-2/3 flex-col justify-between lg:p-[3rem]">
                    <div>
                      <p className="font-plex-mono mb-2 text-xs uppercase leading-tight text-[#532EA4] lg:mb-[1.333rem] lg:text-[1.867rem]">
                        {article.category}
                      </p>
                      <h4 className="font-medium leading-normal text-[#250A60] lg:text-[2.4rem] lg:leading-normal lg:-tracking-[0.048rem]">
                        {article.title}
                      </h4>
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
                      className="h-full w-full rounded-bl-full rounded-tl-full object-cover"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mb-4 text-4xl font-medium leading-none text-[#532EA4] lg:mb-[3.2rem] lg:text-[4.8rem] lg:-tracking-[0.114rem]">
            Filter
          </h2>

          <div className="flex flex-col gap-y-2 lg:gap-y-[1.333rem]">
            {categories.map((category) => (
              <Link
                href={`/blog/category/${category.slug}`}
                key={category.title}
                className="relative flex w-full shrink-0 items-center overflow-hidden rounded-full rounded-br-none rounded-tr-none bg-[#6543A5] p-4 md:flex-1 lg:p-[2rem]"
              >
                <div className="mr-4 h-2 w-2 rounded-full border-2 border-white lg:mr-[1.6rem] lg:h-[2rem] lg:w-[2rem]" />
                <div className="font-plex-mono text-sm font-medium uppercase text-white lg:text-[1.867rem]">
                  {category.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
