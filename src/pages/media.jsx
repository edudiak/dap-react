import PanelOne from '@/components/media/panel-one';
import PanelTwo from '@/components/media/panel-two';

export default function Media() {
  return (
    <div>
      <div className="relative bg-[#F8F4FF] pb-36 pt-28 md:pt-36 lg:pb-[30rem] lg:pt-[22rem]">
        <PanelOne />

        <PanelTwo />
      </div>
    </div>
  );
}
