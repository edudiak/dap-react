import PanelThree from '@/components/blog/panel-three';
import PanelTwo from '@/components/blog/category/panel-two';
import PanelOne from '@/components/blog/panel-one';

export default function BlogArchive() {
  return (
    <div>
      <div
        className="relative pb-16 pt-36 md:pb-20 lg:pb-[20rem] lg:pt-[22rem]"
        style={{
          background: 'url(/images/dap-bg-noise-20.png), repeat, #F8F4FF',
          backgroundBlendMode: 'color-burn, normal',
        }}
      >
        <PanelOne />

        <PanelTwo />

        <PanelThree />
      </div>
    </div>
  );
}
