import PanelOne from '@/components/project-details/panel-one';
import PanelTwo from '@/components/project-details/panel-two';
import PanelThree from '@/components/project-details/panel-three';
import PanelFour from '@/components/project-details/panel-four';
import PanelFive from '@/components/project-details/panel-five';
import PanelSix from '@/components/project-details/panel-six';
import PanelSeven from '@/components/project-details/panel-seven';

export default function ProjectDetails() {
  return (
    <div>
      <div
        className="relative pb-36 pt-28 md:pb-52 md:pt-36 lg:pb-[46rem] lg:pt-[22rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(180deg, #8A5DD2 7.93%, #250A60 100%)',
        }}
      >
        <PanelOne />

        <PanelTwo />
      </div>

      <PanelThree />

      <PanelFour />

      <PanelFive />

      <PanelSix />

      <PanelSeven />
    </div>
  );
}
