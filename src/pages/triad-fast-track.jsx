import TFTPanelOne from '@/components/tft/panel-one';
import TFTPanelTwo from '@/components/tft/panel-two';

export default function TriadFastTrack() {
  return (
    <div>
      <div
        className="pb-[30rem] pt-[13.333rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(0deg, #7048C6, #7048C6), url(/images/dap-bg-purple.png)',
        }}
      >
        <TFTPanelOne />

        <TFTPanelTwo />
      </div>
    </div>
  );
}
