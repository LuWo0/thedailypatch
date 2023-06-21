

import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link
            href="/"
            className="inline-block m-2 px-5 py-2 decoration-0 border-b-2 border-b-[#b9971f]"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="inline-block m-2 px-5 py-2 decoration-0 border-b border-b-[#b9971f] "
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="inline-block m-2 px-5 py-2 decoration-0 border-b border-b-[#b9971f] "
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
