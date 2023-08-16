import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { useRouter } from 'next/router';

gsap.registerPlugin(ScrollTrigger);

export default function CategoryList() {
  const router = useRouter();
  const { slug } = router.query;

  const categories = [
    {
      title: 'General',
      slug: 'general',
      description:
        'Posts in this series introduce recent papers published in the scientific literature by members of the Dog Aging Project research team.',
      active: true,
    },
    {
      title: 'Community Science',
      slug: 'community-science',
      description:
        'Posts in this series introduce recent papers published in the scientific literature by members of the Dog Aging Project research team.',
      active: true,
    },
    {
      title: 'Scientific Results',
      slug: 'scientific-results',
      description:
        'Posts in this series introduce recent papers published in the scientific literature by members of the Dog Aging Project research team.',
      active: true,
    },
    {
      title: 'Inside Science',
      slug: 'inside-science',
      description:
        'Posts in this series give you an inside view of the cutting edge research processes being used by our team.',
      active: false,
    },
    {
      title: 'Inside Foundation',
      slug: 'inside-foundation',
      description:
        'Posts in this series take a deep dive into the genomic research being conducted in the Foundation Cohort study ito establish a foundation of genetic information about a wide range of dogs',
      active: false,
    },
    {
      title: 'Inside Precision',
      slug: 'inside-precision',
      description:
        'Posts in this series take a deep dive into the physiological and biochemical research being conducted in the  Precision Cohort study to provide a precise investigation of the physiological processes that underlie health and aging in a wide range of dogs.',
      active: false,
    },
    {
      title: 'Dog Geroscience',
      slug: 'dog-geroscience',
      description:
        'Posts in this series take a deep dive into the physiological and biochemical research being conducted in the  Precision Cohort study to provide a precise investigation of the physiological processes that underlie health and aging in a wide range of dogs.',
      active: false,
    },
    {
      title: 'Canine Cognition',
      slug: 'canine-cognition',
      description:
        'Posts in this series explore the many ways in which our scientists are studying how dogs think and experience their worlds.',
      active: false,
    },
    {
      title: 'Senior Dogs',
      slug: 'senior-dogs',
      description:
        'Posts in this series focus on common challenges that older dogs face and provide tools to help your senior dog maintain an optimal quality of life for as long as possible.',
      active: false,
    },
    {
      title: 'Inside TRIAD',
      slug: 'inside-triad',
      description:
        'Posts in this series focus on common challenges that older dogs face and provide tools to help your senior dog maintain an optimal quality of life for as long as possible.',
      active: false,
    },
  ];

  return (
    <div>
      <h2 className="mb-4 text-4xl font-medium leading-none text-[#532EA4] lg:mb-[3.2rem] lg:text-[4.8rem] lg:-tracking-[0.114rem]">
        Filter
      </h2>

      <div className="flex flex-col gap-y-2 lg:gap-y-[1.333rem]">
        {categories.map((category) => (
          <Link
            href={`/blog/category/${category.slug}`}
            key={category.title}
            className={`relative flex w-full shrink-0 flex-col overflow-hidden rounded-br-none rounded-tr-none md:flex-1 lg:rounded-br-none lg:rounded-tr-none ${
              category.slug === slug
                ? 'rounded-3xl bg-[#3A1982] lg:rounded-[4rem]'
                : 'rounded-full bg-[#6543A5]'
            }`}
          >
            <div className="flex items-center p-4 lg:p-[2rem]">
              <div className="mr-4 h-2 w-2 rounded-full border-2 border-white p-1 lg:mr-[1.6rem] lg:h-[2rem] lg:w-[2rem]">
                {category.slug === slug && (
                  <div className="h-full w-full rounded-full bg-white" />
                )}
              </div>
              <div className="font-plex-mono text-sm font-medium uppercase text-white lg:text-[1.867rem]">
                {category.title}
              </div>
            </div>
            {category.slug === slug ? (
              <div className="border-t-2 border-t-white p-4 text-xs leading-normal text-[#F7F3FF] lg:border-t-[0.267rem] lg:p-[2rem] lg:text-[1.867rem]">
                {category.description}
              </div>
            ) : (
              ''
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
