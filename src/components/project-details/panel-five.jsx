/* eslint @next/next/no-img-element: "off" */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function PanelFive() {
  return (
    <div className="pb-26 relative -mt-[30px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-[#FFDADA] text-[#500000] lg:-mt-[10.667rem] lg:rounded-tl-[10.667rem] lg:rounded-tr-[10.667rem] lg:pb-[20rem]">
      <div className="mb-16 mt-20 flex items-center pl-5 lg:mb-[12rem] lg:mt-[21.33rem] lg:pl-[8%]">
        <div className="w-1/2">
          <div>
            <h2 className="mb-8 text-5xl leading-tight lg:mb-[8rem] lg:max-w-[86rem] lg:text-[10.267rem] lg:leading-tight lg:tracking-[0.114rem]">
              Building diversity, equity, inclusion & belonging
            </h2>
          </div>
        </div>
        <div className="w-1/2 md:pl-[3%]">
          <div className="relative">
            <Image
              src="/images/diversity-min.png"
              alt="dog-13"
              width={1000}
              height={700}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center lg:pr-[8%]">
        <div className="w-1/2 md:pr-[3%]">
          <div className="relative">
            <Image
              src="/images/diversity-2-min.png"
              alt="dog-13"
              width={1000}
              height={700}
            />
          </div>
        </div>
        <div className="w-1/2 md:pl-[6%]">
          <div className="mb-8 text-lg leading-snug lg:mb-[6rem] lg:text-[2.8rem]">
            <p className="mb-5 lg:mb-[4rem]">
              Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
              Proin porta est convallis lacus blandit pretium sed non enim.
              Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum
              ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor
              ac enim. In hac habitasse platea dictumst.
            </p>
            <p>
              Sed cursus venenatis tellus, non lobortis diam volutpat sit amet.
              Sed tellus augue, hendrerit eu rutrum in, porttitor at metus.
              Mauris ac hendrerit metus. Phasellus mattis lectus commodo felis
              egestas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
