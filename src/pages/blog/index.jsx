import PanelOne from '@/components/blog/panel-one';
import PanelTwo from '@/components/blog/panel-two';
import PanelThree from '@/components/blog/panel-three';

export default function Blog() {
  return (
    <div>
      <div className="relative bg-[#F8F4FF] pb-16 pt-36 md:pb-20 lg:pb-[20rem] lg:pt-[22rem]">
        <PanelOne />

        <PanelTwo />

        <PanelThree />
      </div>
    </div>
  );
}
