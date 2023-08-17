import PanelOne from '@/components/blog/category/panel-one';
import PanelTwo from '@/components/blog/panel-two';

export default function BlogArchive() {
  return (
    <div>
      <div
        className="relative pb-16 pt-8 md:pb-20 md:pt-16 lg:pb-[20rem] lg:pt-[6rem]"
        style={{
          background: 'url(/images/dap-bg-noise-20.png), repeat, #F8F4FF',
          backgroundBlendMode: 'color-burn, normal',
        }}
      >
        <PanelOne />

        <PanelTwo />
      </div>
    </div>
  );
}
