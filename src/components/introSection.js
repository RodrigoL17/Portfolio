import DownloadIcon from "./icons/DownloadIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="h-screen w-full bg-slate-100 flex items-center justify-center gap-[100px]"
    >
      <div className="gap-3 flex flex-col">
        <div className="flex flex-col mb-6 justify-start "> 
          <p className="text-2xl">Hi👋, I'm</p>
          <p className="text-8xl -indent-2 bg-gradient-to-r from-[#00158b] to-[#15c7ff] bg-clip-text text-transparent align-[50px] leading-snug">Rodrigo Lezama</p>
          <p className="text-5xl -indent-1">Full-Stack Web Developer</p>
        </div>
        <div className="flex gap-10 items-center [&>a]:flex [&>a]:items-center [&>a]:gap-2 [&>a]:border-black [&>a]:border-solid [&>a]:border-[1px] [&>a]:rounded-lg [&>a]:py-2 [&>a]:px-4 [&>a]:text-[18px] [&>a]:bg-[#0c75ca] [&>a]:font-medium [&>a]:text-white hover:[&>a]:bg-[#2f4eff] [&>a]:shadow-[4px_4px_8px_rgba(0,0,0,0.8)]">
          <a
            href="RodrigoLezama-FullStackWebDeveloper.pdf"
            download="RodrigoLezama-Resume"
          >
            Resume <DownloadIcon height={"1em"} fill={"currentColor"}/>
          </a>
          <a className="" href="https://github.com/RodrigoL17" target="_blank">
            GitHub <GitHubIcon height={"1em"} fill={"currentColor"}/>
          </a>
          <a
            className=""
            href="https://www.linkedin.com/in/rodrigo-lezama-31a650224/"
            target="_blank"
          >
            LinkedIn <LinkedInIcon height={"1em"} fill={"currentColor"}/>
          </a>
        </div>
      </div>
      <Image src="/portada.png" alt="Ilustracion de diseño web" width={500} height={500}/>
    </section>
  );
}
