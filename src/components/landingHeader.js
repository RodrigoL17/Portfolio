"use client";
import Link from "next-intl/link";
import { SpainFlagIcon, USFlagIcon } from "./icons";

export default function LandingHeader({ home, projects, contact, locale }) {
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
        <div className="flex gap-2 ml-10">
          <Link className={`${locale === "en" && "grayscale"}`} href="/" locale="es">
            <SpainFlagIcon />
          </Link>
          <Link className={`${locale === "es" && "grayscale"}`} href="/" locale="en">
            <USFlagIcon />
          </Link>
        </div>
        </ul>
      </nav>
    </header>
  );
}
