import TFTPanelOne from '@/components/tft/panel-one';
import TFTPanelThree from '@/components/tft/panel-three';
import TFTPanelTwo from '@/components/tft/panel-two';

export default function TriadFastTrack() {
  return (
    <div>
      <div
        className="bg-cover bg-left-top bg-no-repeat pb-[30rem] pt-[13.333rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), url(/images/dap-bg-purple.png), linear-gradient(0deg, #7048C6, #7048C6)',
        }}
      >
        <TFTPanelOne />

        <TFTPanelTwo />

        <TFTPanelThree />
      </div>
    </div>
  );
}
