import PanelOne from '@/components/our-supporters/panel-one';
import PanelTwo from '@/components/our-supporters/panel-two';
import PanelThree from '@/components/our-supporters/panel-three';

export default function OurSupporters() {
  return (
    <div>
      <div
        className="relative pb-24 pt-36 md:pb-40 lg:pb-[26.667rem] lg:pt-[22rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(180deg, #815DC7 29.50%, #C0A4FF 100%)',
        }}
      >
        <PanelOne />

        <PanelTwo />

        <PanelThree />
      </div>
    </div>
  );
}
