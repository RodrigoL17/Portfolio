import ProjectCard from "./projectCard";
import { INFO } from "@/Const/cardInfo";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-radial from-[#ace2ff] to-[#313fff] p-10"
    >
      <h2 className="text-center text-8xl font-semibold text-slate-200 mt-5">
        Projects
      </h2>
      <div className="grid grid-cols-3 grid-rows-3 p-10">
        {INFO.map(
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
        )}
      </div>
    </section>
  );
}
