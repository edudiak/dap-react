/* eslint jsx-a11y/label-has-associated-control: "off" */
export default function Footer() {
  return (
    <footer
      className="footer bg-cover bg-left-top bg-no-repeat px-[4%] py-[10%]"
      style={{
        background:
          'url(/images/dap-bg-noise-20.png), url(/images/footer-bg.png), #6543A5',
      }}
    >
      <div
        className="rounded-[5.333rem] p-[4rem]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(80.98deg, rgba(255, 255, 255, 0) 6.08%, rgba(255, 255, 255, 0.13) 45.05%, rgba(255, 255, 255, 0.09) 77.02%, rgba(255, 255, 255, 0) 96.22%), linear-gradient(94.77deg, rgba(255, 255, 255, 0.28) 0.31%, rgba(255, 255, 255, 0.22) 0.32%, rgba(255, 255, 255, 0.08) 25.37%, rgba(255, 255, 255, 0.04) 52.95%, rgba(255, 255, 255, 0.09) 73.8%, rgba(255, 255, 255, 0.17) 97.85%)',
          backgroundBlendMode: 'overlay, normal, normal',
          backdropFilter: 'blur(40px)',
        }}
      >
        <div className="flex gap-x-[5.333rem]">
          <div className="w-1/2">
            <div className="mb-[2rem] text-[3.6rem] font-medium text-white">
              Sign up for Email Updates
            </div>
            <div className="text-[2.6rem] leading-snug text-[#F7F3FF]">
              There are two ways to stay informed on the latest Dog Aging
              Project news and grow with our amazing community. Just check the
              boxes you wish to follow and add your email address below.
            </div>
          </div>
          <div className="w-1/2">
            <form action="">
              <label
                for="signUpForBlog"
                className="mb-[3rem] flex items-center"
              >
                <input
                  id="signUpForBlog"
                  type="checkbox"
                  value=""
                  name="signUpForBlog"
                />
                <div className="ml-[1rem] text-[2.133rem] leading-none text-[#F8F4FF]">
                  Sign me up for blog updates
                </div>
              </label>
              <label for="signUpForNewsletter" className="flex items-center">
                <input
                  id="signUpForNewsletter"
                  type="checkbox"
                  value=""
                  name="signUpForNewsletter"
                />
                <div className="ml-[1rem] text-[2.133rem] leading-none text-[#F8F4FF]">
                  Sign me up for the newsletter
                </div>
              </label>

              <div className="mt-[2.2rem]">
                <input
                  type="text"
                  placeholder="your.address@email.com"
                  className="h-[6.667rem] w-full border-b-2 border-b-[#E5D8FF] bg-transparent text-[3.6rem] text-[#7048C6] placeholder:opacity-50 focus:outline-none focus-visible:border-b-[#7048C6]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="ml-auto mt-[8rem] w-1/2 pl-[2.667rem]">
        <div className="flex justify-between">
          <div>
            <h4 className="mb-[2rem] text-[2.133rem] font-bold text-[#D2BEFF]">
              The Project
            </h4>
            <ul className="flex flex-col gap-y-[1.333rem] text-[1.867rem] text-white">
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Veterinarians
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Supporters
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-[2rem] text-[2.133rem] font-bold text-[#D2BEFF]">
              Research
            </h4>
            <ul className="flex flex-col gap-y-[1.333rem] text-[1.867rem] text-white">
              <li>
                <a href="#" className="hover:underline">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Access
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-[2rem] text-[2.133rem] font-bold text-[#D2BEFF]">
              Blog
            </h4>
            <ul className="flex flex-col gap-y-[1.333rem] text-[1.867rem] text-white">
              <li>
                <a href="#" className="hover:underline">
                  Scientific Results
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Inside Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Inside Cognition
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Inside Foundation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Inside Precision
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Aging Dog Care
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-[2rem] text-[2.133rem] font-bold text-[#D2BEFF]">
              Media
            </h4>
            <ul className="flex flex-col gap-y-[1.333rem] text-[1.867rem] text-white">
              <li>
                <a href="#" className="hover:underline">
                  News coverage
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-[2rem] text-[2.133rem] font-bold text-[#D2BEFF]">
              FAQ
            </h4>
            <ul className="flex flex-col gap-y-[1.333rem] text-[1.867rem] text-white">
              <li>
                <a href="#" className="hover:underline">
                  Project FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Owner FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Veterinarian FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-x-[2.667rem]">
        <div className="w-1/4">
          <h4 className="text-[3.6rem] text-white">Join the Project</h4>
          <div className="mt-[1.5rem] border-t border-t-[#B894FF] pt-[3rem]">
            <a href="#" className="text-[2.4rem] font-bold text-[#D1BD8F]">
              Enroll Your Dog
            </a>
          </div>
        </div>
        <div className="w-1/4">
          <h4 className="text-[3.6rem] text-white">Follow Us</h4>
          <div className="mt-[1.5rem] border-t border-t-[#B894FF] pt-[3rem]">
            <a href="#" className="text-[2.4rem] font-bold text-[#D1BD8F]">
              Enroll Your Dog
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <div className="mt-[5.6rem] flex gap-x-[4rem] border-t border-t-[#B894FF] pt-[3rem] text-[2.13rem] font-bold text-[#D1BD8F]">
            <a href="#">The Dog Park</a>
            <a href="#">Portal Access</a>
            <a href="#">Enroll Your Dog</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
