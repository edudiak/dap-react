import PanelOne from '@/components/triad-fast-track/panel-one';
import PanelFour from '@/components/triad-fast-track/panel-four';
import PanelTwo from '@/components/triad-fast-track/panel-two';
import PanelThree from '@/components/triad-fast-track/panel-three';

export default function TriadFastTrack() {
  return (
    <div>
      <div
        className="bg-cover bg-left-top bg-no-repeat pb-36 pt-28 md:pb-52 md:pt-36 lg:pb-[20rem] lg:pt-[13.333rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(180deg, #815DC7 29.50%, #C0A4FF 100%)',
        }}
      >
        <PanelOne />

        <PanelTwo />

        <PanelThree />

        <PanelFour />
      </div>
    </div>
  );
}
