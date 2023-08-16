import PanelOne from '@/components/data-access/panel-one';
import PanelTwo from '@/components/data-access/panel-two';

export default function DataAccess() {
  return (
    <div>
      <div
        className="relative pb-36 pt-36 md:pb-40 lg:pb-[36rem] lg:pt-[22rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png) repeat, linear-gradient(0deg, #C0A4FF 0%, #C0A4FF 100%), url(/images/dap-bg-gradient.png) 0 0 / cover no-repeat, lightgray 50% / cover no-repeat',
          backgroundBlendMode: 'overlay, soft-light, normal',
        }}
      >
        <PanelOne />

        <PanelTwo />
      </div>
    </div>
  );
}
