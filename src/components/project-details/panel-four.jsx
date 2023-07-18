/* eslint @next/next/no-img-element: "off" */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function PanelFour() {
  const panel = useRef(null);
  const panel_bg = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: panel.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: panel_bg.current,
        },
      });
    }); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={panel}
      className="relative -mt-[30px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] lg:-mt-[10.667rem] lg:rounded-tl-[10.667rem] lg:rounded-tr-[10.667rem]"
    >
      <div ref={panel_bg} className="absolute min-h-screen w-full">
        <img
          src="/images/collaboration-bg.jpg"
          alt="Section 3"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="panel relative px-5 py-20 lg:px-[4%] lg:py-[21.333rem]">
        <div
          className="mb-16 mt-8 rounded-[20px] p-5 md:mt-12 lg:mb-[13.333rem] lg:mt-[10rem] lg:rounded-[4rem] lg:p-[5.333rem]"
          style={{
            background:
              'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
            backgroundBlendMode: 'overlay, normal, normal',
            boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <h4 className="mb-3 text-2xl leading-none text-[#3A1982] md:mb-3 md:text-4xl lg:mb-[2.667rem] lg:text-[8.133rem] lg:leading-none">
            Culture of Collaboration
          </h4>
          <div className="leading-snug text-[#6543A5] md:text-lg lg:text-[3.6rem] lg:leading-snug lg:-tracking-[0.144rem]">
            The Dog Aging Project has assembled an impressive team of
            researchers to expand our knowledge of the aging process. Our
            culture of collaboration fosters creative partnerships, which
            include experts from diverse disciplines at top research
            institutions. By working together with dog owners and primary care
            veterinarians, we have an unprecedented opportunity to find new and
            innovative health solutions.
          </div>
        </div>

        <div className="flex gap-x-[5.333rem]">
          <div
            className="mb-16 mt-8 w-full rounded-[20px] p-5 md:mt-12 lg:mb-[13.333rem] lg:mt-[10rem] lg:w-1/2 lg:rounded-[4rem] lg:p-[5.333rem]"
            style={{
              background:
                'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
              backgroundBlendMode: 'overlay, normal, normal',
              boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex flex-col gap-y-4 leading-snug text-[#532EA4] lg:gap-y-[4rem] lg:text-[2.8rem] lg:leading-snug lg:-tracking-[0.144rem]">
              <p>Augusta University College of Science and Mathematics</p>
              <p>Arizona Canine Cognition Center</p>
              <p>Arizona State University Center for Evolution and Medicine</p>
              <p>Arizona State University School of Life Sciences</p>
              <p>Allen Institute for Brain Science</p>
              <p>Boston University</p>
              <p>Broad Institute of MIT and Harvard</p>
              <p>Cleveland Institute for Computational Biology</p>
              <p>Colorado State University Flint Cancer Center</p>
              <p>
                Colorado State University College of Veterinary Medicine and
                Biomedical Sciences
              </p>
              <p>Cornell University College of Veterinary Medicine</p>
              <p>Fred Hutchinson Cancer Research Center</p>
              <p>Harvard Medical School Center for Bioethics</p>
              <p>Iowa State University College of Veterinary Medicine</p>
              <p>Midwestern University Animal Health Institute</p>
              <p>National University of Singapore</p>
              <p>North Carolina State College of Veterinary Medicine</p>
              <p>
                Oregon State University Carlson College of Veterinary Medicine
              </p>
              <p>
                Princeton University Lewis-Sigler Institute for Integrative
                Genomics
              </p>
            </div>
          </div>
          <div
            className="mb-16 mt-8 w-full rounded-[20px] p-5 md:mt-12 lg:mb-[13.333rem] lg:mt-[10rem] lg:w-1/2 lg:rounded-[4rem] lg:p-[5.333rem]"
            style={{
              background:
                'url(/images/dap-bg-noise-20.png), linear-gradient(250.64deg, rgba(255, 255, 255, 0.36) -39.08%, rgba(255, 255, 255, 0) 107.65%), linear-gradient(109.32deg, rgba(255, 255, 255, 0.24) -3.98%, rgba(255, 255, 255, 0.54) 51.7%, rgba(255, 255, 255, 0.1) 108.56%)',
              backgroundBlendMode: 'overlay, normal, normal',
              boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex flex-col gap-y-4 leading-snug text-[#532EA4] lg:gap-y-[4rem] lg:text-[2.8rem] lg:leading-snug lg:-tracking-[0.144rem]">
              <p>Santa Fe Institute</p>
              <p>Seattle Children’s Research Institute</p>
              <p>Tel Aviv University Sackler School of Medicine</p>
              <p>Tel Aviv University Blavatnik School of Computer Science</p>
              <p>
                Texas A&M School of Veterinary Medicine & Biomedical Sciences
              </p>
              <p>University of Arizona</p>
              <p>University of Georgia College of Veterinary Medicine</p>
              <p>University of Massachusetts Chan Medical School</p>
              <p>
                University of Pennsylvania Center for Translational
                Bioinformatics
              </p>
              <p>University of Southern California</p>
              <p>University of Washington College of Arts & Sciences</p>
              <p>University of Washington College of Built Environments</p>
              <p>University of Washington School of Medicine</p>
              <p>University of Washington School of Public Health</p>
              <p>University of Washington Social Development Research Group</p>
              <p>
                University of Wisconsin School of Medicine and Public Health
              </p>
              <p>
                Virginia-Maryland College of Veterinary Medicine, Virginia Tech
              </p>
              <p>Washington State University College of Veterinary Medicine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
