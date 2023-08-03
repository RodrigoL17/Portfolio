import Image from "next/image";
import CardButtonsContainer from "./cardButtonsContainer.js";
import TechContainer from "./techContainer.js";



export default function ProjectCard({
  title,
  description,
  githubLink,
  urlLink,
  technologies,
  imgSrc,
}) {
  return (
    <div
     key={title}
      className="max-w-[20rem] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-[1px_1px_18px_10px_rgba(255,255,255,0.4)] hover:scale-105 transition-all ease-in duration-200"
    >
      <a {...(urlLink !== "" ? {href:urlLink, target:"_blank"} : {})} className="flex justify-center border-b-2 border-slate-200">
        <Image
          className="rounded-t-lg h-[180px] object-contain"
          src={imgSrc}
          alt=""
          width={350}
          height={180}
        />
      </a>
      <div className="p-5">
        <a {...(urlLink !== "" ? {href:urlLink, target:"_blank"} : {})}>
          <h5 className="mb-2 text-2xl h-[64px] font-bold tracking-tight text-gray-900 dark:text-white text-ellipsis">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[100px]">
          {description}
        </p>
        <TechContainer technologies={technologies.split(",")}/>
        <CardButtonsContainer githubLink={githubLink} urlLink={urlLink} />
      </div>
    </div>
  );
}
