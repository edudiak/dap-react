import PanelOne from '@/components/our-team/panel-one';
import PanelTwo from '@/components/our-team/panel-two';

export default function OurTeam() {
  return (
    <div>
      <div
        className="relative pb-10 pt-28 md:pb-52 md:pt-36 lg:pb-[30rem] lg:pt-[14rem]"
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
