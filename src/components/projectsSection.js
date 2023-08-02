import ProjectCard from "./projectCard";
import { INFO } from "@/Const/cardInfo";
import { useTranslations } from "next-intl";

export default function ProjectsSection() {

  const t = useTranslations("ProjectSection")

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-radial from-[#ace2ff] to-[#313fff] p-10 flex flex-col items-center justify-center"
    >
      <h2 className="text-center text-7xl font-semibold text-slate-200 my-5">
        {t("title")}
      </h2>
      <div className="grid grid-cols-4 grid-rows-2 p-10 gap-[4rem]">
        {["ecommerceBack","cssGradientGenerator"].map(key=> console.log(t(key.title)))}
        {/* {INFO.map(
          ({
            title,
            description,
            technologies,
            githubLink,
            urlLink,
            imgSrc,
          }) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              technologies={technologies}
              githubLink={githubLink}
              urlLink={urlLink}
              imgSrc={imgSrc}
            />
          )
        )} */}
      </div>
    </section>
  );
}
