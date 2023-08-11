import { useEffect } from 'react';
import { Gradient } from '@/lib/Gradient';

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
  useEffect(() => {
    // Create your instance
    const gradient = new Gradient();
    // Call `initGradient` with the selector to your canvas
    gradient.initGradient('#gradient-canvas');
  }, []);

  return (
    <div>
      <div
        className="relative pb-36 pt-36 md:pb-52 md:pt-20 lg:pb-[30rem] lg:pt-[28rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(180deg, #8A5DD2 7.93%, #250A60 100%)',
        }}
      >
        <canvas
          id="gradient-canvas"
          data-transition-in
          className="pointer-events-none absolute left-0 top-0 h-full w-full"
        />
        <HomePanelOne />

        <HomePanelTwo />

        <HomePanelThree />
      </div>

      <HomePanelFour />

      <HomePanelFive />

      <div
        className="pb-16 pt-20 lg:pb-[10rem] lg:pt-[33.333rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(180deg, #6543A5 0%, #B894FF 53.65%, #FFF 93.75%), #FFF',
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
