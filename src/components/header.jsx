import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="flex items-center justify-between pl-[5%]">
        <Link href="/" className="flex">
          <Image
            src="/images/dap-logo.svg"
            alt="Dog aging project"
            width={180}
            height={73}
          />
        </Link>
        <ul className="flex items-center gap-x-6">
          <li>
            <Link href="#">Project Details</Link>
          </li>
          <li>
            <Link href="/triad-fast-track">Triad Fast Track</Link>
          </li>
        </ul>
        <div>
          <ul className="flex items-center bg-[#6543A5]">
            <li>
              <Link href="#">Portal Login</Link>
            </li>
            <li>
              <Link href="#">Dog Park</Link>
            </li>
            <li>
              <Link href="#">Enroll Your Dog</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
