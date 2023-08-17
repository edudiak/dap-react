import Head from 'next/head';
import { getCategories } from '@/services/httpServices';

import PanelOne from '@/components/blog/panel-one';
import PanelTwo from '@/components/blog/panel-two';

export default function Blog({ categories }) {
  console.log(categories);
  return (
    <>
      <Head>
        <title>Blog | DAP</title>
        <meta name="description" content="Blog | DAP" />
      </Head>
      <div>
        <div
          className="relative pb-16 pt-36 md:pb-20 lg:pb-[20rem] lg:pt-[6rem]"
          style={{
            background: 'url(/images/dap-bg-noise-20.png), repeat, #F8F4FF',
            backgroundBlendMode: 'color-burn, normal',
          }}
        >
          <PanelOne />

          <PanelTwo />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const categories = await getCategories();

  return { props: { categories } };
};
