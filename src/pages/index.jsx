import HomePanelOne from '@/components/home/panel-one';
import HomePanelTwo from '@/components/home/panel-two';
import HomePanelThree from '@/components/home/panel-three';
import HomePanelFour from '@/components/home/panel-four';
import HomePanelFive from '@/components/home/panel-five';
import HomePanelSix from '@/components/home/panel-six';
import HomePanelSeven from '@/components/home/panel-seven';
import HomePanelEight from '@/components/home/panel-eight';
import HomePanelNine from '@/components/home/panel-nine';

export default function Home() {
  return (
    <div>
      <div
        className="pb-[30rem] pt-[13.333rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(180deg, #8A5DD2 7.93%, #250A60 100%)',
        }}
      >
        <HomePanelOne />

        <HomePanelTwo />

        <HomePanelThree />
      </div>

      <HomePanelFour />

      <HomePanelFive />

      <div
        className="pb-[21.333rem] pt-[33.333rem]"
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
