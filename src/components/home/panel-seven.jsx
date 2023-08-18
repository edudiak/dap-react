import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';

import ArrowRight from '@assets/images/icons/arrow-right.svg';

gsap.registerPlugin(ScrollTrigger);

export default function HomePanelSeven() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);
  const elm_3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_1.current,
            start: 'top 90%',
            end: 'bottom+=100 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_1.current,
          { x: 60, scale: 1.05, opacity: 0 },
          {
            x: 0,
            scale: 1,
            opacity: 1,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elm_3.current,
            start: 'top 90%',
            end: 'bottom+=200 bottom',
            scrub: true,
          },
        })
        .fromTo(
          elm_3.current,
          { scale: 0.7, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
          },
        );

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;
          gsap
            .timeline({
              scrollTrigger: {
                trigger: elm_2.current,
                start: isDesktop ? 'top 85%' : 'top bottom',
                end: isDesktop ? 'bottom 70%' : 'bottom bottom',
                scrub: 1,
              },
            })
            .fromTo(
              '.blog-post',
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.05,
              },
            );
        },
      );
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

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
  ];

  return (
    <div className="px-5 pb-[5%] pt-[25%] lg:px-[4%]">
      <h2
        ref={elm_1}
        className="mb-10 text-4xl leading-none -tracking-[1.5px] text-[#6543A5] md:text-5xl lg:mb-[11.736vw] lg:mr-[4%] lg:max-w-[52.083vw] lg:text-[4.167vw] lg:-tracking-[00.125vw] lg:text-[#6543A5]"
      >
        Our data is already advancing new discoveries
      </h2>

      <div
        ref={elm_2}
        className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-[2.778vw]"
      >
        {recentArticles.map((article) => (
          <article
            key={article.id}
            className="blog-post relative w-full shrink-0 overflow-hidden rounded-[20px] bg-white md:flex-1 lg:rounded-[1.389vw]"
          >
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[20px] shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)] lg:rounded-[1.389vw]" />
            <div className="flex h-full flex-wrap-reverse items-stretch justify-center gap-y-8 overflow-hidden rounded-3xl text-[#250A60] sm:flex-nowrap lg:min-h-[20.3.125vw] lg:rounded-[1.389vw]">
              <div className="flex w-full flex-col justify-between p-4 sm:w-7/12 lg:p-[1.528vw]">
                <div>
                  <div className="font-plex-mono mb-4 flex flex-wrap justify-between gap-y-4 text-xs uppercase leading-none text-[#532EA4] md:flex-nowrap lg:mb-[1.389vw] lg:text-[0.972vw]">
                    <p>{article.date}</p>
                    <p className="leading-tight">{article.category}</p>
                  </div>
                  <Link
                    href={article.url}
                    className="mb-3 block font-medium leading-normal text-[#250A60] lg:mb-[1.042vw] lg:text-[1.250vw] lg:leading-snug"
                  >
                    {article.title}
                  </Link>
                  <div className="mb-3 leading-tight text-[#7B7B7B] lg:mb-[2.083vw] lg:text-[1.111vw]">
                    {article.excerpt}
                  </div>
                </div>
                <Link
                  href={article.url}
                  className="flex items-center font-semibold text-[#532EA4] lg:text-[1.111vw]"
                >
                  Read More
                  <div className="svg_icon ml-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#532EA4] text-transparent lg:ml-[0.521vw] lg:h-[1.736vw] lg:w-[1.736vw]">
                    <div className="w-[10px] lg:w-[0.903vw]">
                      <ArrowRight />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-full sm:w-5/12">
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
      <div ref={elm_3} className="pt-20 text-center lg:pt-[11.736vw]">
        <Link
          href="/blog"
          target="_blank"
          className="inline-block rounded-full bg-[#F7F3FF] px-8 py-4 font-bold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[2.083vw] lg:py-[1.111vw] lg:text-[1.250vw]"
          rel="noreferrer"
        >
          View the Blog
        </Link>
      </div>
    </div>
  );
}
