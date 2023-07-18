/* eslint @next/next/no-img-element: "off" */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function PanelSeven() {
  return (
    <div className="relative overflow-hidden bg-white pb-20 pt-20 lg:pb-[18.66rem] lg:pt-[18.667rem]">
      <div className="px-5 pb-10 lg:px-[8%] lg:pb-[10rem]">
        <h2 className="mb-8 ml-auto max-w-[300px] text-4xl leading-none text-[#6543A5] lg:mb-[8rem] lg:max-w-[73rem] lg:text-[8.133rem] lg:tracking-[0.114rem]">
          Our research data privacy agreement
        </h2>

        <div className="mb-8 text-xl leading-snug text-[#250A60] lg:mb-[8rem] lg:text-[3.6rem]">
          The Dog Aging Project is committed to protecting our participants’
          privacy and the security of their personal information. Our online
          privacy policy is available HERE. Our research data privacy commitment
          is summarized below.
        </div>
        <ul className="mb-8 grid list-outside list-disc grid-cols-2 flex-wrap gap-y-5 text-xl leading-snug text-[#250A60] lg:mb-[8rem] lg:gap-y-[8rem] lg:text-[2.8rem]">
          <li className="mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            We respect the privacy of everyone associated with the Dog Aging
            Project and recognize that our research participants have
            volunteered to share their time and information with the DAP team in
            order to contribute to our scientific research.
          </li>
          <li className="mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            The DAP will never sell or share participant contact information.
          </li>
          <li className="mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            Only select DAP staff have access to the link between a dog owner’s
            personally identifying information and their dog’s health data.
          </li>
          <li className="mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            The DAP will make all reasonable efforts within the law to maintain
            the privacy and confidentiality of participant data.
          </li>
          <li className="mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            The personally identifying information of our participants, such as
            name and contact information, is encrypted and stored in a secure
            database.
          </li>
          <li className="mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            Canine health data are stored in our secure database under a unique
            identification number. This number does not include your actual
            name, address, or personally identifying information.
          </li>
          <li className="mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            When we share canine health data with our trusted research partners,
            these data do not include personally identifying information.
          </li>
          <li className="mx-5 px-2 lg:mx-[5rem] lg:px-[1rem]">
            In the unlikely case of a security breach, we will inform
            participants promptly.
          </li>
        </ul>
        <div className="leading-snug text-[#250A60] md:text-lg lg:text-[3.6rem] lg:leading-snug">
          Read the full Research Data Privacy Policy{' '}
          <Link href="/privacy-policy" className="">
            Click Here
          </Link>
        </div>
      </div>
    </div>
  );
}
