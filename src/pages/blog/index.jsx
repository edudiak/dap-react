import PanelOne from '@/components/blog/panel-one';
import PanelTwo from '@/components/blog/panel-two';
import PanelThree from '@/components/blog/panel-three';

export default function Blog() {
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