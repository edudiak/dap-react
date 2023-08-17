import PanelOne from '@/components/press-enquiries/panel-one';
import PanelTwo from '@/components/press-enquiries/panel-two';

export default function PressResources() {
  return (
    <div>
      <div className="relative bg-[#EAD6A5] pb-36 pt-28  md:pt-36 lg:pb-[30rem] lg:pt-[22rem]">
        <PanelOne />

        <PanelTwo />
      </div>
    </div>
  );
}
