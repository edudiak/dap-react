import PanelOne from '@/components/our-team/panel-one';
import PanelTwo from '@/components/our-team/panel-two';

export default function OurTeam() {
  return (
    <div>
      <div
        className="pb-30 relative pt-2 md:pb-52 lg:pb-[30rem] lg:pt-[2rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(180deg, rgba(83, 46, 164, 0.69) 6.48%, rgba(192, 164, 255, 0.69) 17.50%)',
        }}
      >
        <PanelOne />

        <PanelTwo />
      </div>
    </div>
  );
}
