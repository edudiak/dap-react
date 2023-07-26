import PanelOne from '@/components/publications/panel-one';
import PanelTwo from '@/components/publications/panel-two';

export default function OurSupporters() {
  return (
    <div>
      <div
        className="relative pb-24 pt-36 md:pb-40 lg:pb-[26.667rem] lg:pt-[22rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png) repeat, linear-gradient(0deg, #C0A4FF 0%, #C0A4FF 100%), url(/images/dap-bg-gradient.png), lightgray 50% / cover no-repeat',
          backgroundBlendMode: 'overlay, soft-light, normal',
        }}
      >
        <PanelOne />

        <PanelTwo />
      </div>
    </div>
  );
}
