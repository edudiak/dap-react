import PanelOne from '@/components/veterinarians/panel-one';
import PanelTwo from '@/components/veterinarians/panel-two';
import PanelThree from '@/components/veterinarians/panel-three';

export default function ProjectDetails() {
  return (
    <div>
      <div
        className="relative pb-36 pt-28 md:pt-36 lg:pb-[46rem] lg:pt-[22rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(180deg, #815DC7 29.50%, #C0A4FF 100%)',
        }}
      >
        <PanelOne />
      </div>

      <PanelTwo />

      <PanelThree />
    </div>
  );
}
