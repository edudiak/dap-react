import PanelOne from '@/components/tft/panel-one';
import PanelFour from '@/components/tft/panel-four';
import PanelTwo from '@/components/tft/panel-two';
import PanelThree from '@/components/tft/panel-three';

export default function TriadFastTrack() {
  return (
    <div>
      <div
        className="bg-cover bg-left-top bg-no-repeat pb-20 pt-48 lg:pb-[20rem] lg:pt-[13.333rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), url(/images/dap-bg-purple.png), linear-gradient(0deg, #7048C6, #7048C6)',
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
