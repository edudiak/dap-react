export default function Footer() {
  return (
    <footer
      className="footer px-[5%] py-[10vw]"
      style={{
        background:
          'url(/images/dap-bg-noise-20.png), url(/images/footer-bg.png), #6543A5',
      }}
    >
      <div
        className="rounded-[2vw]"
        style={{
          background:
            'url(/images/dap-bg-noise-20.png), linear-gradient(80.98deg, rgba(255, 255, 255, 0) 6.08%, rgba(255, 255, 255, 0.13) 45.05%, rgba(255, 255, 255, 0.09) 77.02%, rgba(255, 255, 255, 0) 96.22%), linear-gradient(94.77deg, rgba(255, 255, 255, 0.28) 0.31%, rgba(255, 255, 255, 0.22) 0.32%, rgba(255, 255, 255, 0.08) 25.37%, rgba(255, 255, 255, 0.04) 52.95%, rgba(255, 255, 255, 0.09) 73.8%, rgba(255, 255, 255, 0.17) 97.85%)',
          backgroundBlendMode: 'overlay, normal, normal',
          backdropFilter: 'blur(40px)',
        }}
      >
        <div className="flex">
          <div className="w-1/2">
            <div className="text-white">Sign up for Email Updates</div>
            <div className="text-[#D8C4FF]">
              There are two ways to stay informed on the latest Dog Aging
              Project news and grow with our amazing community. Just check the
              boxes you wish to follow and add your email address below.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
