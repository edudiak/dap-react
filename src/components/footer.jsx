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
        <div className="flex">
          <div className="w-1/2">
            <div className="mb-[2rem] text-[3.6rem] font-medium text-white">
              Sign up for Email Updates
            </div>
            <div className="text-[2.8rem] leading-snug text-[#F7F3FF]">
              There are two ways to stay informed on the latest Dog Aging
              Project news and grow with our amazing community. Just check the
              boxes you wish to follow and add your email address below.
            </div>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              placeholder="your.address@email.com"
              className="h-[4.667rem] w-full border-b-2 border-b-white bg-transparent text-[3.6rem] text-[#7048C6] placeholder-[#7048C6] placeholder-opacity-50 focus:outline-none focus-visible:border-b-[#7048C6]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
