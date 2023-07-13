import HomePanelEight from '@/components/home/panel-eight';
import HomePanelFive from '@/components/home/panel-five';
import HomePanelFour from '@/components/home/panel-four';
import HomePanelNine from '@/components/home/panel-nine';
import HomePanelSeven from '@/components/home/panel-seven';
import HomePanelSix from '@/components/home/panel-six';
import HomePanelThree from '@/components/home/panel-three';
import HomePanelTwo from '@/components/home/panel-two';
import PanelOne from '@/components/project-details/panel-one';

export default function ProjectDetails() {
  return (
    <div>
      <div
        className="relative pb-36 pt-36 md:pb-52 lg:pb-[30rem] lg:pt-[22rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(180deg, #8A5DD2 7.93%, #250A60 100%)',
        }}
      >
        <PanelOne />

        <HomePanelTwo />

        <HomePanelThree />
      </div>

      <HomePanelFour />

      <HomePanelFive />

      <div
        className="pb-20 pt-20 lg:pb-[21.333rem] lg:pt-[33.333rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(180deg, #6543A5 5.37%, rgba(100, 66, 164, 0.85) 34.94%, rgba(100, 66, 164, 0.28) 70.41%, rgba(255, 255, 255, 0) 96.74%), #FFFFFF',
          backgroundBlendMode: 'overlay, normal, normal',
        }}
      >
        <HomePanelSix />

        <HomePanelSeven />
      </div>

      <HomePanelEight />

      <HomePanelNine />
    </div>
  );
}
