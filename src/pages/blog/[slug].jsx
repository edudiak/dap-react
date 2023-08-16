import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';

import PanelThree from '@/components/blog/single/panel-three';
import CategoryList from '@/components/blog/category-list';

import ArrowRight from '@assets/images/icons/arrow-right.svg';
import FacebookIcon from '@assets/images/icons/facebook.svg';
import TwitterIcon from '@assets/images/icons/twitter.svg';

export default function BlogDetails() {
  const elm_1 = useRef(null);
  const elm_2 = useRef(null);

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

  const article = {
    title:
      'Demographic factor associated with joint supplement use in dogs from the Dog Aging Project',
    excerpt:
      'As dogs age, their risk of developing osteoarthritis (OA) increases. Similar to OA in humans, OA in dogs has no cure, limiting treatment options to those that reduce...',
    category: 'Scientific Results',
    date: '09.12.2022',
    readingTime: '5min',
    url: '/blog/article-1',
    image: '/images/blog/blog-single-thumb.jpg',
  };

  return (
    <div>
      <div
        className="px-5 pb-24 pt-8 md:pb-32 lg:px-[4%] lg:pb-[40rem] lg:pt-[4rem]"
        style={{
          background: 'url(/images/dap-bg-noise-20.png) repeat, #fff',
        }}
      >
        <div className="flex items-start justify-between pb-16 md:pb-20 lg:flex-nowrap lg:pb-[10rem]">
          <div>
            <div className="flex w-full">
              <div className="flex w-full shrink-0 flex-col justify-between lg:max-w-[27rem] lg:pr-[4rem]">
                <div className="leading-none">
                  <p className="font-plex-mono mb-4 text-xs uppercase leading-tight text-[#532EA4] lg:mb-[2.667rem] lg:text-[1.867rem]">
                    {article.category}
                  </p>
                  <Link href="/blog" className="flex items-center">
                    <div className="w-[1.867rem] rotate-180 transform stroke-black text-black">
                      <ArrowRight />
                    </div>
                    <span className="ml-2 text-lg font-bold lg:text-[2.4rem]">
                      Back to blog
                    </span>
                  </Link>
                </div>
                <div className="font-plex-mono mb-4 flex flex-col items-end text-xs uppercase leading-none text-[#532EA4] lg:mb-[2.667rem] lg:text-[1.867rem]">
                  <p className="mb-4 lg:mb-[2.667rem]">{article.date}</p>
                  <p>Reading Time - {article.readingTime}</p>
                </div>
              </div>
              <div>
                <div className="mb-5 overflow-hidden rounded-3xl shadow-[0px_0px_14px_3px_rgba(0,0,0,0.30)] lg:mb-[2.667rem] lg:rounded-[4rem]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div className="lg:ml-[27rem]">
              <h1 className="mb-4 text-4xl font-medium leading-tight text-[#532EA4] lg:mb-[3.2rem] lg:text-[6.267rem] lg:-tracking-[0.114rem]">
                {article.title}
              </h1>
            </div>
          </div>

          <div className="w-full shrink-0 lg:ml-[4rem] lg:max-w-[40rem]">
            <CategoryList />
          </div>
        </div>

        <div className="flex">
          <div className="w-full shrink-0 lg:max-w-[27rem] lg:pr-[4rem]">
            <div className="text-lg font-medium leading-none lg:text-[2.8rem]">
              <p>Research by:</p>
              <p className="mb-2 lg:mb-[2rem]">Published in:</p>
              <div className="font-plex-mono mb-4 text-xs uppercase leading-tight text-[#532EA4] lg:mb-[2.667rem] lg:text-[1.867rem]">
                <p>{article.category}</p>
              </div>
            </div>
          </div>

          <div className="leading-normal text-black lg:text-[2.4rem] lg:leading-normal">
            <div className="mb-14 lg:mb-[7rem]">
              <h3 className="mb-4 text-xl font-medium leading-snug lg:mb-[2.667rem] lg:text-[3.6rem]">
                What is this paper about?
              </h3>
              <p className="mb-4 lg:mb-[2.667rem]">
                As dogs age, their risk of developing osteoarthritis (OA)
                increases. Similar to OA in humans, OA in dogs has no cure,
                limiting treatment options to those that reduce pain and
                inflammation. To this end, many dog owners elect to provide
                their dogs with joint supplements that may help with joint
                function and slow the progression of OA. However, the clinical
                evidence that these joint supplements have an impact on OA is
                still debated.
              </p>
              <p className="mb-4 lg:mb-[2.667rem]">
                The most commonly administered joint supplements are
                glucosamine, chondroitin, and omega-3 fatty acids. In this
                paper, we look at the different dog and owner factors that are
                associated with joint supplement administration among dogs
                enrolled in the Dog Aging Project.
              </p>
              <p>
                Not surprisingly, we find that dogs with a diagnosis of OA are
                older dogs, large dogs, and dogs recorded as having been
                overweight at some time in their lives. Interestingly, we find
                that neutered dogs are provided joint supplements at the same
                rate as intact dogs, even though neutered dogs have a higher
                prevalence of OA in the population.
              </p>
            </div>
            <div className="mb-14 lg:mb-[7rem]">
              <h3 className="mb-4 text-xl font-medium leading-snug lg:mb-[2.667rem] lg:text-[3.6rem]">
                What do these results mean for me and my dog?
              </h3>
              <p className="mb-4 lg:mb-[2.667rem]">
                At the moment, these results are just the start of our
                understanding of what factors influence owners to provide joint
                supplements to their dogs. Importantly, our current results,
                based on cross sectional analysis, cannot test the hypothesis
                that joint supplement use alters the risk of future OA, and
                should not be interpreted as a test of the impact of joint
                supplementation, as discussed in a previous blog post.
              </p>
              <p>
                However, we are hopeful that in the future, longitudinal studies
                in the Dog Aging Project will allow us to develop and test
                hypotheses to determine if dogs without OA who are provided a
                joint supplement are less likely to develop OA in the future.
                The Dog Aging Project allows us to ask these long-term questions
                that would be difficult in a clinical setting.
              </p>
            </div>
            <div className="mb-14 lg:mb-[7rem]">
              <h3 className="mb-4 text-xl font-medium leading-snug lg:mb-[2.667rem] lg:text-[3.6rem]">
                Where can I learn more?
              </h3>
              <div className="flex items-end justify-between gap-x-6 lg:gap-x-[5.333rem]">
                <p>
                  Jessica M. Hoffman, M. Katherine Tolbert, Daniel E.L.
                  Promislow, and the Dog Aging Project Consortium. 2022.
                  Demographic factors associated with joint supplement use in
                  dogs from the Dog Aging Project. Frontiers in Veterinary
                  Science. DOI: 10.3389/fvets.2022.90652.
                </p>
                <Link
                  href="#"
                  className="inline-block shrink-0 rounded-full bg-[#F7F3FF] px-6 py-4 font-semibold leading-none text-[#250A60] shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.3)] transition hover:bg-[#250A60] hover:text-[#F7F3FF] lg:px-[4rem] lg:py-[2.133rem] lg:text-[2.4rem]"
                >
                  Read the Paper
                </Link>
              </div>
            </div>
            <div className="mb-14 lg:mb-[7rem]">
              <h3 className="mb-4 text-xl font-medium leading-snug lg:mb-[2.667rem] lg:text-[3.6rem]">
                Abstract
              </h3>
              <p className="mb-4 lg:mb-[2.667rem]">
                Osteoarthritis (OA) is one of the most prevalent age-related
                chronic conditions that afflict companion dogs, and multiple
                joint supplements are available to prevent or treat OA, though
                the efficacy of these treatments is controversial.
              </p>
              <p className="mb-4 lg:mb-[2.667rem]">
                While the demographic factors that are associated with OA
                diagnosis are well established, the factors that are associated
                with joint supplement use are not as well studied. Using data
                collected from the Dog Aging Project, we analyzed owner survey
                responses regarding joint supplement administration and OA
                diagnosis for 26,951 adult dogs. In this cross-sectional
                analysis, logistic regression models and odds-ratios (OR) were
                employed to determine demographic factors of dogs and their
                owners that were associated with joint supplement
                administration.
              </p>
              <p>
                Forty percent of adult dogs in our population were given some
                type of joint supplement. Perhaps not surprisingly, dogs of
                older age, larger size, and those that were ever overweight were
                more likely to receive a joint supplement. Younger owner age,
                urban living, owner education, and feeding commercial dry food
                were associated with a reduced likelihood of administration of
                joint supplements to dogs. Interestingly, mixed breed dogs were
                also less likely to be administered a joint supplement (OR:
                0.73). Dogs with a clinical diagnosis of OA were more likely to
                receive a joint supplement than those without a reported OA
                diagnosis (OR: 3.82). Neutered dogs were more likely to have a
                diagnosis of OA, even after controlling for other demographic
                factors, yet their prevalence of joint supplement administration
                was the same as intact dogs. Overall, joint supplement use
                appears to be high in our large population of dogs in the United
                States. Prospective studies are needed to determine if joint
                supplements are more commonly administered as a preventative for
                OA or after an OA clinical diagnosis.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-medium leading-snug text-[#6543A5] lg:mb-[2rem] lg:text-[3.6rem]">
                Share this article
              </h3>
              <div className="flex items-center gap-2 lg:gap-[2rem]">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#6543A5] text-[#6543A5] hover:bg-[#6543A5] hover:text-white lg:h-[4.4rem] lg:w-[4.4rem]"
                >
                  <div className="svg_icon w-[11px] lg:w-[1.6rem]">
                    <FacebookIcon />
                  </div>
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#6543A5] text-[#6543A5] hover:bg-[#6543A5] hover:text-white lg:h-[4.4rem] lg:w-[4.4rem]"
                >
                  <div className="svg_icon w-[14px] lg:w-[1.9rem]">
                    <TwitterIcon />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <PanelThree />
      </div>
    </div>
  );
}
