"use client"
export default function LandingHeader() {

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
              Home
            </a>
          </li>
          <li>
            <a className="py-3 px-5 font-bold" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="py-3 px-5 font-bold" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
