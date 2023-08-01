import GitHubIcon from "./icons/GitHubIcon";
import LinkIcon from "./icons/LinkIcon";

export default function CardButtonsContainer({ urlLink, githubLink }) {
  return (
    <div className="flex gap-10">
      {urlLink && (
        <a
          href={urlLink}
          target="_blank"
          className=" items-center text-white min-w-[56.5px] flex justify-center border-black border-solid border-[1px] rounded-lg py-2 px-4 text-[18px] bg-[#0c75ca] font-medium  hover:bg-[#2f4eff] shadow-[4px_4px_8px_rgba(0,0,0,0.6)]"
        >
          <LinkIcon height={"1em"} fill={"currentColor"}/>
        </a>
      )}
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          className=" items-center text-white min-w-[56.5px] flex justify-center border-black border-solid border-[1px] rounded-lg py-2 px-4 text-[18px] bg-[#0c75ca] font-medium  hover:bg-[#2f4eff] shadow-[4px_4px_8px_rgba(0,0,0,0.6)]"
        >
          <GitHubIcon height={"1em"} fill={"currentColor"}/>
        </a>
      )}
    </div>
  );
}
