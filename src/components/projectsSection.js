import ProjectCard from "./projectCard";
import { useTranslations } from "next-intl";

export default function ProjectsSection() {
  const t = useTranslations("ProjectSection");

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-radial from-[#ace2ff] to-[rgb(49,63,255)] p-10 flex flex-col items-center justify-center shadow-[0px_0px_20px_20px_rgba(49,63,255,0.4)]"
    >
      <h2 className="text-center text-7xl font-semibold text-slate-200 mt-5 mb-10">
        {t("title")}
      </h2>
      <div className="grid grid-cols-4 grid-rows-2 p-10 gap-[4rem]">
        {["ECB", "CSSGG", "CAL", "TTT", "TDA", "ECR", "ECJS", "PNE"].map(
          (key) => (
            <ProjectCard
              key={t(`${key}.title`)}
              title={t(`${key}.title`)}
              description={t(`${key}.description`)}
              technologies={t(`${key}.technologies`)}
              githubLink={t(`${key}.githubLink`)}
              urlLink={t(`${key}.urlLink`)}
              imgSrc={t(`${key}.imgSrc`)}
            />
          )
        )}
      </div>
    </section>
  );
}
