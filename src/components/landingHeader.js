"use client";

import Link from 'next-intl/link'

export default function LandingHeader({home, projects, contact}) {
  const changeLenguage = () => {};

  return (
    <header
      id="landing-header"
      className="px-3 py-5 flex items-center fixed top-0 w-full z-50 bg-slate-100/50 backdrop-blur-lg"
    >
      <nav className="flex items-center justify-around w-full">
        <div>
          logo
          {/* <Image src="#" alt=""/> */}
        </div>
        <ul className="flex">
          <li>
            <a className="py-3 px-5 font-bold" href="#intro">
             {home}
            </a>
          </li>
          <li>
            <a className="py-3 px-5 font-bold" href="#projects">
              {projects}
            </a>
          </li>
          <li>
            <a className="py-3 px-5 font-bold" href="#contact">
              {contact}
            </a>
          </li>
        </ul>
        <Link href="/" locale='es'>es</Link>
        <Link href="/" locale='en'>en</Link>
      </nav>
    </header>
  );
}
