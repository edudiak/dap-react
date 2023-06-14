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
        className="pb-36 pt-36 md:pb-52 lg:pb-[30rem] lg:pt-[28rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(180deg, #8A5DD2 7.93%, #250A60 100%)',
        }}
      >
        <HomePanelOne />

        <video autoPlay muted playsInline loop className="w-full">
          <source src="/videos/dna-video.webm" type="video/webm" />
          <source src="/videos/dna-video.mp4" type="video/mp4" />
        </video>

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
